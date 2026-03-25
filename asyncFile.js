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

    console.log("File written");

    // append more text
    fs.appendFile("note123.txt", "Adding more content\n", (err) => {
        if (err) {
            console.log("Error appending:", err);
            return;
        }

        console.log("Content appended");

        // get file stats
        fs.stat("note123.txt", (err, stats) => {
            if (err) {
                console.log("Error getting stats:", err);
                return;
            }

            console.log("File Size:", stats.size, "bytes");
            console.log("Created At:", stats.birthtime);

            // read updated file
            fs.readFile("note123.txt", "utf-8", (err, data) => {
                if (err) {
                    console.log("Error reading new file:", err);
                    return;
                }

                console.log("Updated file content:");
                console.log(data);

                // delete file (cleanup)
                fs.unlink("note123.txt", (err) => {
                    if (err) {
                        console.log("Error deleting file:", err);
                        return;
                    }

                    console.log("File deleted successfully");
                });
            });
        });
    });
});

console.log("hi");
console.log("hello");