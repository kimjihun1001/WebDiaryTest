const textInput = document.querySelector("#textInput");
const textBox = document.querySelector("#textBox");
const save = document.querySelector("#save");

function click_save()
{
    console.log("저장 클릭");
    var newText = textInput.value;
    console.log(textInput.value);
    textInput.value = "";
    textBox.innerText = newText;

    // [JSON 다운로드 실시] 
    var jsonObj = {"idx":1, "name":newText};
    new JsonDownload(jsonObj).download();
}

class JsonDownload {
    // 클래스 생성자 초기화 실시
    constructor(data={}) {
        this.data = data;
    }

    // 파일 다운로드 수행 실시
    download (type_of = "application/json", filename = "jsonObj.json") { // 확장자명을 json 으로 지정
        let body = document.body; // body 변수 선언
        const a = document.createElement("a"); // a 태그 생성 
        a.href = URL.createObjectURL(new Blob([JSON.stringify(this.data, null, 2)], {
            type: type_of
        }));
        a.setAttribute("download", filename); // a 태그에 다운로드 속성 추가
        body.appendChild(a); // body에 a 태그 추가
        a.click(); // 클릭 이벤트를 발생시켜 다운로드
        body.removeChild(a); // body에서 제거
    }
};