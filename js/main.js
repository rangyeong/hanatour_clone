
// #탑배너 닫기
$('.topBn_close').click(function(){
    $('#topBn').stop().animate({marginTop:-90});
});

// * 본문1 - 왼쪽 탭
$('.rev_btn li').click(function(e){
    e.preventDefault();
    let i = $(this).index();
    $('.rev_btn li').removeClass('on');
    $(this).addClass('on');
    $('.reserve .form_wrap > div').hide();
    $('.reserve .form_wrap > div').eq(i).show();
});

// * 본문1 - 왼쪽 탭 - 패키지 - 주요도시
$('.pkg01_tab_btn p').click(function(){
    let i = $(this).index();
    $('.pkg01_tab_btn p').removeClass('on');
    $(this).addClass('on');
    $('.pkg01_pan').removeClass('active');
    $('.pkg01_pan').eq(i).addClass('active');
});

// * 본문1 - 왼쪽 탭 - 패키지 - 주요도시 - 대분류
$('.pkg01_pan01 li').click(function(e){
    e.preventDefault();
    let i = $(this).index();
    $('.pkg01_pan01 li').removeClass('active');
    $(this).addClass('active');
    $('.pkg01_pan02_box').removeClass('active');
    $('.pkg01_pan02_box').eq(i).addClass('active');
});

// 본문1 - 왼쪽 탭 - 패키지 - 주요도시 창 열기 
$('#pkg_location').focus(function(){
    let t = $(this).offset().top - 20;
    $('html, body').stop().animate({
        scrollTop : t
    });
    $('.pkg01_select').show();
});

// 본문1 - 왼쪽 탭 - 패키지 - 주요도시 창 닫기 
$('.pkg01_select_close').click(function(e){
    e.preventDefault();
    $('.pkg01_select').hide();
});

// 본문1 - 왼쪽 탭 - 패키지 - 주요도시 선택
$('.pkg01_pan02_box li').click(function(){
    let txt = $(this).text();
    $('#pkg_location').val(txt);
    $('.pkg01_select').hide();
    $('.pkg01_pan02_box li').removeClass('choice');
    $(this).addClass('choice');
});

// 본문1 - 왼쪽 탭 - 패키지 - 출발지
$('#pkg_depart').click(function(){
    $('.pkg021_select').show();
});

$('#pkg_depart li').click(function(){
    let txt = $(this).text();
    if(txt == '전체')txt = '출발지 전체';
    $('#pkg_depart').val(txt);
    $('.pkg021_select').hide();
    $('#pkg_depart li').removeClass('choice');
    $(this).addClass('choice');
});

// 본문1 - 왼쪽 탭 - 패키지 - 달력 시작

// nowMonth변수 : 달력 구성을 위해 사용
let nowMonth = new Date();
// today변수 : setHours()메소드로 오늘 자정시간을 저장. 과거, 미래 시점 파악을 위해 사용
let today = new Date();
today.setHours(0, 0, 0, 0);
let todayCalendar = $('.calendar tbody');

buildCalendar();
function buildCalendar(){
    /*
    // - new Date()를 사용해 특정 날짜값을 저장할 수 있음. 
    // - nowMonth변수에 저장된 날짜 정보에서 연도와 월의 정보를 가지고 오고 
    // 세번 째 매개변수의 자리에 일(date)의 정보를 입력.
    // - firstDate변수는 달력의 첫째날을 가리키기 때문에 세번째 매개변수로 1을 사용.
    // - 세번째 매개변수에 0을 입력하면 전달의 마지막 날 숫자를 가지고 올 수 있음. 
    // - 그래서 lastDate변수에 월의 정보를 입력할 때 +1을 해서 다음달 정보로 지정하고, 
    // 세번째 매개변수에 0을 입력하면 결국 현재 달의 마지막 날이 저장됨.
    */
    let firstDate = new Date(nowMonth.getFullYear(), nowMonth.getMonth(), 1);
    let lastDate = new Date(nowMonth.getFullYear(), nowMonth.getMonth() +1, 0);

    $('calYear').text(nowMonth.getFullYear());
    $('calMonth').text(leftPad(nowMonth.getMonth() +1));
    /*
    insertRow()메소드 : 테이블 태그에 tr태그 생성하는 명령.
    이때 생성된 tr태그는 지정된 영역의 막내 자식 위치로 추가 됨.
    자바스크립트 원형의 명령이기 때문에 tr을 생성할 대상을 가지고 올 때 인덱스값 사용해야 명령이 제대로 동작함.
    */
    let nowRow = todayCalendar[0].insertRow();

    // 1일의 요일을 기준으로 td태그 만들어줌.
    // 1일 앞쪽 칸은 비워져 있어야 하니, 해당 칸을 만들어 주는 명령.
    for(let j = 0; j < firstDate.getDay(); j++){
        // insertCell() : 지정된 tr태그 안에 td태그 생성
        let nowColumn = nowRow.insertCell();
    }


    // 실제 날짜를 채우는 반복문 만들기
    /*
    setDate()메소드 : 특정 날짜로 값을셋팅하는 명령.
    다음 날을 가리키는 명령 : setDate(오늘 날짜 +1)
    오늘 날짜를 선택하는 명령 : 현재시각정보.getDate()
    =>그래서 최종적으로 setDate(현재시각정보.getDate())
    */
   // nowDay변수는 for문의 반복 횟수를 나타내는 대상이자, 화면에 출력될 날짜를 나타내는 대상임.
    for(let nowDay = firstDate; nowDay <= lastDate; nowDay.setDate(nowDay.getDate() + 1)){
        // nowRow변수에는 tr태그가 담겨져 있음
        // nowRow변수에 inserCell()메서드를 처리하면 td태그가 생성 됨.
        // 반복문이 첫째 날부터 마지막 날까지 반복 처리되기 때문에
        // td태그가 해당 월의 일자만큼 반복 생성됨.
        // nowColumn변수는 날짜를 담고 있을 td태그를 가리킴.
        let nowColumn = nowRow.insertCell();
        // nowDay.getDate() : 현재 날짜를 저장
        // nowColumn변수의 내용으로 현재 날짜의 숫자를 입력.
        // Date()객체는 자바스크립트의 내장객체라 제이쿼리 형식의 명령 html()이 아닌 자바스크립트 원형의 명령 innerHTML()을 사용해야 입력 됨. 
        nowColumn.innerHTML = '<span>' + nowDay.getDate() + '</span>';

        // nowDay.getDay() : 현재의 요일을 저장.
        // 만약 현재 요일이 0과 같다면, 즉 일요일이라면
        if(nowDay.getDay() == 0){
            // nowColumn변수(=td태그)에 .sun추가.
            // 여기서도 제이쿼리의 addClass()가 아닌 자바스크립트의 classList로 접근
            nowColumn.classList.add('sun');
        }
        // 만약 현재 요일이 6과 같다면, 즉 토요일이라면
        if(nowDay.getDay() == 6){
            // nowColumn변수(=td태그)에 .sat추가.
            nowColumn.classList.add('sat');
            // 토요일은 한 행의 마지막 자료이기 대문에 새로운 tr태그를 생성해서 자료가 저장되도록 만들기.
            nowRow = todayCalendar[0].insertRow()
        }
        // 과거, 현재, 미래 나누기
        if(nowDay < today){
            nowColumn.classList.add('past');
        } else if(nowDay.getFullYear()==today.getFullYear() && nowDay.getMonth()==today.getMonth() && nowDay.getDate()==today.getDate()){
            nowColumn.classList.add('today');
        }else{
            nowColumn.classList.add('future');
        }
    } // 실제 날짜를 채우는 반복문 마지막

} // buildCalendar()함수 마지막

// 한 자리 숫자 앞에 0을 붙여서 표기하는 함수
function leftPad(num){
    if(number < 10){
        // 문자열 + 숫자형 => 문자열
        number = '0' + number;
    }
    return number;
}

// 본문1 - 왼쪽 탭 - 패키지 - 달력 끝


//  * 본문1 슬라이드 이미지

$('.ms_slide_wrap').slick({
    prevArrow : '.ms_prev',
    nextArrow : '.ms_next',
    dots : true,
    appendDots : '.ms_pager',
    customPaging : function(slider, i){
        return `<span class="current">${i + 1}</span> / ${slider.slideCount}`
    },
    autoplay : true,
    autoplaySpeed : 6000,
    speed : 400,
    asNavFor : '.ms_bg_wrap'
});

$('.ms_pause').click(function(){
    $(this).hide();
    $('.ms_paly').show();
    $('.ms_slide_wrap').slick('slickPause');
});

$('.ms_paly').click(function(){
    $(this).hide();
    $('.ms_pause').show();
    $('.ms_slide_wrap').slick('slickPlay');
});

$('.ms_bg_wrap').slick({
    arrows : false,
    autoplay : true,
    autoplaySpeed : 6000,
    speed : 400,
    fade : true,
    asNavFor : '.ms_slide_wrap'
});