//  * 검색창 열기 - input.hs_txt에 포커스가 주어졌을 때
$('.h_search .hs_txt').focus(function(){
    $('.keyword_collection').show();
});
// * 검색창 닫기 - 컬렉션 영역의 닫기 버튼 클릭
$('.keyword_collection .close button').click(function(){
    $('.keyword_collection').hide();
})

// * 문서 전체를 클릭 할 때
$(document).click(function(e){
    // target변수에 클릭한 대상을 저장
    var target = $(e.target);
    // target.closest('.h_search).length
    // => 클릭한 대상이 .h_search 내부에 있는 대상이면 true값 저장함.
    // !붙였다는 건 위의 값을 반대로 뒤집는 다는 이야기
    if(!target.closest('.h_search').length){
        $('.keyword_collection').hide();
    }
    // && !target.closest('.keyword_collection').length
})
// *키워드 순위
$('.h_keyword').slick({
    arrows : false,
    vertical : true,
    // autoplay : true,
    // autoplaySpeed : 4000
});

// 전체메뉴 보기
$('.btn_open_allmenu').click(function(e){
    e.preventDefault();
    $('.allmenu').show();
    $(this).addClass('active');
})

// 전체메뉴 닫기
$('.allmenu_close').click(function(e){
    e.preventDefault();
    $('.allmenu').hide();
    $('.btn_open_allmenu').removeClass('active');
})