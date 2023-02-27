export const QUESTIONS = [
  {
    questionId: 0,
    title:
      '"E/libEGL: validate_display:99 error 3008 (EGL_BAD_DISPLAY) android os 7.1 nougat',
    content:
      'I am getting the following error while running my app on Android OS 7.1 Nougat. E/libEGL: validate_display:99 error 3008 (EGL_BAD_DISPLAY)[ 04-21 10:19:18.788 4410: 4622 D/ ] HostConnection::get() New Host Connection established 0x7db835ad6200, tid 4622 In build.gradle I am using vectorDrawables.useSupportLibrary = true and the following dependencies:',
    score: 73,
    viewCnt: '9123',
    profileImg:
      'https://www.gravatar.com/avatar/3b905f68b59214392331844b6f4fa95b?s=256&d=identicon&r=PG',
    nickname: 'KUSH A BK',
    asked: '1,429',
    createDate: new Date().toISOString(),
  },
  {
    questionId: 1,
    title:
      'Play Store updates/installs app using a different account than the one the user made IAP through',
    content:
      'On this bug report on Github https://github.com/googlesamples/android-play-billing/issues/2#issuecomment-305380836 we were asked to raise the issue here.The issue is simple. The user has 2 or more accounts on their phone, let"s say xyz@gmail.com and abc@gmail.com. They install an app with the account xyz@gmail.com. They purchase some IAP items. The app updates and now the app is under abc@gmail.com and the user has lost the purchase. This happens a lot when using staged rollouts.',
    score: 66,
    viewCnt: '3432',
    profileImg:
      'https://www.gravatar.com/avatar/ea883e4243387730cfbfd69740fac647?s=256&d=identicon&r=PG',
    nickname: 'casolorz',
    asked: '7,976',
    createDate: new Date().toISOString(),
  },
  {
    questionId: 2,
    title: 'android ndk gdb loaded sharedlibraries missing *.oat',
    content:
      'Both gdb 7.7 and gbd 7.11 missed some shared libraries when debugging my device (oppo r7s). I have pulled all libraries to local.Here is a complete list of libraries shown by info shared',
    score: 64,
    viewCnt: '1123',
    profileImg: 'https://i.stack.imgur.com/zbq8V.jpg?s=256&g=1',
    nickname: 'Joey.Z',
    asked: '4,172',
    createDate: new Date().toISOString(),
  },
];
