export const buttonSvodData = [
  { label: "AnimeFesta" },
  { label: "Amazon Prime Video" },
  { label: "DMM TV" },
  { label: "dアニメストア" },
  { label: "dアニメストア for Prime Video" },
  { label: "FOD" },
  { label: "Hulu" },
  { label: "Lemino" },
  { label: "バンダイチャンネル" },
  { label: "auスマートパスプレミアム" },
  { label: "J:COMオンデマンド メガパック" },
  { label: "milplus 見放題パックプライム" },
  { label: "TELASA（見放題プラン）" },
];

export const buttonTvodData = [
  { label: "Google Play" },
  { label: "HAPPY!動画" },
  { label: "J:COMオンデマンド" },
  { label: "milplus" },
  { label: "music.jp" },
  { label: "TELASA（レンタル）" },
  { label: "Video Market" },
  { label: "クランクイン！ビデオ" },
  { label: "ニコニコチャンネル" },
];

export const distributionData = [
  {
    title: "7月8日より毎週土曜23時00分～ 地上波1週間先行配信 ※第2話より",
    buttonTexts: ["ABEMA"],
  },
  {
    title: "7月12日より毎週水曜23時00分～ 地上波3日間先行配信 ※第2話より",
    buttonTexts: ["U-NEXT", "アニメ放題"],
  },
  {
    title: "7月15日より毎週土曜22時30分～ 順次配信※第2話より",
    subtitle: "【SVOD】見放題配信",
    buttonTexts: buttonSvodData.map((item) => item.label),
  },
  {
    title: "7月15日より毎週土曜22時30分～ 順次配信※第2話より",
    subtitle: "【TVOD】レンタル配信",
    buttonTexts: buttonTvodData.map((item) => item.label),
  },
  {
    title: "7月15日より毎週土曜22時30分～ 順次配信※第2話より",
    subtitle: "【AVOD】最新話 期間限定 無料配信",
    buttonTexts: ["ニコニコ生放送"],
  },
];
