function button1() {
    import { writeFile } from "fs";
    var sampleObject = {
        purchasingChannelCode: "1",
    };
}
;
writeFile("./test.json", JSON.stringify(sampleObject, null, 4), (err) => {
    if (err) {
        console.error(err);
        return;
    }
    ;
    console.log("File has been created");
});