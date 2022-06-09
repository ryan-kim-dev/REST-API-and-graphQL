import MsgItem from './MsgItem';

const UserIds = ['roy', 'kim'];
const getRandomUserId = () => UserIds[Math.round(Math.random())];
// const msgs = [
//   {
//     id: 1,
//     userId: getRandomUserId(),
//     timestamp: 1234567890,
//     text: '1 mockup data test',
//   },
// ];
const msgs = Array(50)
  .fill(0)
  .map((_, i) => ({
    // 매개변수를 비워두려면 _ 로 쓰면 된다.
    id: 50 - i,
    userId: getRandomUserId(),
    timestamp: 1234567890123 + (50 - i) * 1000 * 60, // 밀리초를 초단위로 바꾸기
    text: `${50 - i} mockup data test`,
  })); // fill이 있어야 map 돌릴수 있음.

const MsgList = () => (
  <ul className="messages">
    {msgs.map(el => (
      <MsgItem key={el.id} {...el} />
    ))}
  </ul>
);

export default MsgList;
