// title과 color clickUrl을 받는 MyButton 컴포넌트 만들기

// title은 버튼의 이름
// color는 버튼의 색상
// clickUrl은 이동할 링크를 입력

// => 위 '네이버로 이동' 버튼을 클릭하면
// 네이버 페이지가 '새 탭'으로 열린다.

// props는 객체이다.
export default function CaptionImage(props) {
  const { title, color, clickUrl } = props;
  return (
    <a
      href={clickUrl}
      target="_blank "
      style={{
        padding: 2,
        color: "white",
        backgroundColor: color,
      }}
    >
      {title}
    </a>
  );
}
