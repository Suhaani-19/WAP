const fs = require("fs");

console.log("Start");

// read file
fs.readFile("note.txt", "utf-8", (error, data) => {
    if (error) {
        console.log("Error reading file:", error);
        return;
    }
    console.log("File read:", data);
});

// write file
fs.writeFile("note123.txt", "Writingggg\n", (err) => {
    if (err) {
        console.log("Error writing file:", err);
        return;
    }

    console.log("File write");

    // append more text
    fs.appendFile("note123.txt", "Adding more content\n", (err) => {
        if (err) {
            console.log("Error appending:", err);
            return;
        }

        console.log("Content appended");

        // read the newly written file
        fs.readFile("note123.txt", "utf-8", (err, data) => {
            if (err) {
                console.log("Error reading new file:", err);
                return;
            }

            console.log("Updated file content:");
            console.log(data);
        });
    });
});

;