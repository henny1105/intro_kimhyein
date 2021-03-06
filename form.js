(function(){
    //발급받은 user_id값 인수로 전달
    emailjs.init("user_pO8YWN0vzUKBzlDm8G6UV");
})();

window.onload = function() {
    var form = document.getElementById("contact-form");
    
    form.addEventListener('submit', function(e) {
        e.preventDefault();

        // 고유 contact 숫자 랜덤하게 생성
        this.contact_number.value = Math.random() * 100000 | 0;

        emailjs
            .sendForm('service_f4ekagn', 'template_w4msy4i', this) //serviceID, templateID입력
            .then(
                function(response) {
                    console.log('메일 발송 성공', response.status, response.text); 
                    alert("문의 내용이 전송되었습니다. 빠르게 답변드릴게요!");   
                    form.reset();   
                }, 
                function(error) {
                    console.log('메일 발송 실패', error);
                    alert("메일 발송에 실패했습니다.");
                }
            );
    });   
}