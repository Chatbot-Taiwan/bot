const { router, text } = require('bottender/router');
const { NewMeetupInfo, MeetupHistory } = require('./meetup');
const { Home } = require('./home');

export default async function App(context: any) {
  if (context.event.isText) {
    return router([
        text('主選單', Home),
        text('最新小聚', NewMeetupInfo),
        text('歷史小聚', MeetupHistory),
      ]);
  }
};