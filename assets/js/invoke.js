$(function () {
    // preventing page from redirecting
    $("html").on("dragover", function (e) {
        e.preventDefault();
        e.stopPropagation();
    });

    $("html").on("drop", function (e) {
        e.preventDefault();
        e.stopPropagation();
    });

    $(".upload-area").on("dragenter", function (e) {
        e.stopPropagation();
        e.preventDefault();
    });

    $(".upload-area").on("dragover", function (e) {
        e.stopPropagation();
        e.preventDefault();
    });

    $(".upload-area").on("drop", function (e) {
        e.stopPropagation();
        e.preventDefault();

        var file = e.originalEvent.dataTransfer.files[0];
        invokeImage(file);
    });

    // Open file selector on div click
    $("#uploadfile").click(function () {
        $("#file").click();
    });

    // On file selected
    $("#file").change(function () {
        var file = $("#file")[0].files[0];
        if (!file) return;

        invokeImage(file);
    });

    $("#invoke-button").click(function () {
        var text = $("#text-area textarea").val();
        invokeText(text);
    });
});

function invokeText(text) {
    resetPage();
    $("#thinking").show();
    $("#invoke-button").hide();

    checkTextWithNyckel(text);
}

function invokeImage(file) {
    $(".upload-instructions").hide();
    resetPage();
    $("#thinking").show();

    showImage(file);
    resizeAndUploadImage(file);
}

function showImage(file) {
    var reader = new FileReader();
    reader.onload = function (e) {
        $(".upload-area").css("background-image", "url(" + e.target.result + ")");
    };
    reader.readAsDataURL(file);
}

function resizeAndUploadImage(file) {
    // Ensure it's an image
    if (file.type.match(/image.*/)) {
        // Load the image
        var reader = new FileReader();
        reader.onload = function (readerEvent) {
            var image = new Image();
            image.onload = function (imageEvent) {
                // Resize the image
                var canvas = document.createElement("canvas"),
                    max_size = 600,
                    width = image.width,
                    height = image.height;
                if (width > height) {
                    if (width > max_size) {
                        height *= max_size / width;
                        width = max_size;
                    }
                } else {
                    if (height > max_size) {
                        width *= max_size / height;
                        height = max_size;
                    }
                }
                canvas.width = width;
                canvas.height = height;
                canvas.getContext("2d").drawImage(image, 0, 0, width, height);
                var dataUrl = canvas.toDataURL("image/jpeg");
                var resizedImage = dataURLToBlob(dataUrl);

                checkImageWithNyckel(resizedImage);
            };
            image.src = readerEvent.target.result;
        };
        reader.readAsDataURL(file);
    } else {
        alert("You must choose an image");
        resetPage();
    }
}

var dataURLToBlob = function (dataUrl) {
    var BASE64_MARKER = ";base64,";
    if (dataUrl.indexOf(BASE64_MARKER) == -1) {
        var parts = dataUrl.split(",");
        var contentType = parts[0].split(":")[1];
        var raw = parts[1];

        return new Blob([raw], { type: contentType });
    }

    var parts = dataUrl.split(BASE64_MARKER);
    var contentType = parts[0].split(":")[1];
    var raw = window.atob(parts[1]);
    var rawLength = raw.length;

    var uInt8Array = new Uint8Array(rawLength);

    for (var i = 0; i < rawLength; ++i) {
        uInt8Array[i] = raw.charCodeAt(i);
    }

    return new Blob([uInt8Array], { type: contentType });
};

function displayResult(response) {
    var confidence = response.confidence.toLocaleString(undefined, { style: 'percent', minimumFractionDigits: 2 });
    resetPage();
    $("#prediction #label-name").text(response.labelName);
    $("#prediction #confidence").text(confidence + " confident");
    $("#prediction").show();
}

function displayError(response) {
    resetPage();
    $("#error #message").text("There appears to be an error. Please try again!");
    $("#error").show();
    console.log(response);
}

function resetPage() {
    $("#error").hide();
    $("#thinking").hide();
    $("#prediction").hide();
    $("#no-prediction").hide();
    $("#invoke-button").show();
}

function checkTextWithNyckel(text) {
    var functionId = $("#invoke-container").data("functionId");
    var url = `https://www.nyckel.com/v1/functions/${functionId}/invoke`;
    var body = JSON.stringify({ data: text });

    $.ajax({
        url: url,
        type: "post",
        data: body,
        contentType: "application/json",
        processData: false,
        dataType: "json",
        success: function (response) {
            displayResult(response);
        },
        error: function (response) {
            displayError(response);
        }
    });
}

function checkImageWithNyckel(image) {
    var formdata = new FormData();
    formdata.append("file", image);

    var functionId = $("#invoke-container").data("functionId");
    var url = `https://www.nyckel.com/v1/functions/${functionId}/invoke`;

    $.ajax({
        url: url,
        type: "post",
        data: formdata,
        contentType: false,
        processData: false,
        dataType: "json",
        success: function (response) {
            displayResult(response);
        },
        error: function (response) {
            displayError(response);
        }
    });
}