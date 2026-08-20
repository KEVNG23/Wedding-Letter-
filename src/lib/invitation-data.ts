/**
 * Every piece of copy on the invitation lives here.
 * Edit this file to update the site — no component changes needed.
 */

export const invitation = {
  // ---------------------------------------------------------------- couple
  coupleShort: "Dũng & Tuyền",
  brideFirst: "TUYỀN",
  groomFirst: "DŨNG",
  brideFull: "Nguyễn Thị Thanh Tuyền (Annie)",
  groomFull: "Nguyễn Trí Dũng",
  monogram: { left: "D", right: "T" },

  // ------------------------------------------------------------------ hero
  heroJoiner: "and",
  heroTagline: "are getting married",
  heroScrollHint: "Scroll down for details",

  // --------------------------------------------------------------- welcome
  welcomeHeading: "FRIENDS AND FAMILY",
  welcomeBody:
    "We are so excited to celebrate this special moment in our lives with our closest family and friends. As we count down to our big day. We can't wait to celebrate with you all!!",
  welcomeSignature: "Dũng & Tuyền",

  // ------------------------------------------------------- invitation card
  cardTitle: "LỄ ĐÍNH HÔN\n&\nLỄ THÀNH HÔN",

  // --------------------------------------------------------------- the day
  theDayTitle: "THE DAY",
  theDayVenue: "TẠI TƯ GIA — 616 LÊ ĐỨC ANH",
  theDayCity: "BÌNH HƯNG HÒA B, BÌNH TÂN, TP. HCM",
  theDayDate: "17 | 01 | 27",

  /**
   * Placeholder run sheet — replace the times and labels with the real
   * schedule. `icon` must be one of the keys in TIMELINE_ICONS.
   */
  timeline: [
    { time: "07:00", label: "đón dâu", icon: "car" },
    { time: "09:00", label: "lễ thành hôn", icon: "rings" },
    { time: "10:00", label: "chụp hình", icon: "camera" },
    { time: "11:00", label: "tiệc mừng", icon: "cake" },
    { time: "13:00", label: "chung vui", icon: "cheers" },
  ],

  // --------------------------------------------------------- details card
  ceremonyName: "Lễ Thành Hôn",
  ceremonyLead: "sẽ cử hành",
  venueLabel: "TẠI TƯ GIA",
  addressLine1: "616 Lê Đức Anh, P. Bình Hưng Hòa B,",
  addressLine2: "Q. Bình Tân, TP. Hồ Chí Minh",
  addressOld:
    "(Địa chỉ cũ: 616 Quốc Lộ 1A, P Bình Hưng Hoà B, Q. Bình Tân, TP HCM )",
  mapsQuery: "616 Lê Đức Anh, Bình Hưng Hòa B, Bình Tân, Hồ Chí Minh",
  mapsLabel: "Xem bản đồ",
  doubleHappiness: "囍",

  month: "THÁNG 1",
  weekday: "Chủ Nhật",
  day: "17",
  timeOfDay: "lúc 9 sáng",
  year: "2027",
  lunar: "(Nhằm ngày 10.12.2026 Âm Lịch)",

  footerNote: "Save the date and celebrate this special moment with us",

  // ------------------------------------------------------------------ rsvp
  rsvpTitle: "THIỆP PHÚC ĐÁP",
  rsvpIntro: "Sự hiện diện của Quý khách sẽ là niềm vinh hạnh và góp phần tạo nên những kỷ niệm đẹp trong ngày cưới của chúng tôi.",
  rsvpDeadline: "Để chúng tôi có thể chuẩn bị chu đáo cho buổi tiệc, kính mong Quý khách vui lòng xác nhận tham dự trước ngày 30/12/2026 bằng cách điền thông tin bên dưới.",
  rsvpClosing: "Xin chân thành cảm ơn và rất mong được đón tiếp Quý khách trong ngày vui của chúng tôi.",
  rsvpNameLabel: "Họ và Tên",
  rsvpGuestGroupLabel: "Bạn thuộc nhóm khách:",
  rsvpGuestGroups: [
    "Người nhà",
    "Bạn của ba mẹ cô dâu",
    "Bạn của ba mẹ chú rể",
    "Bạn của cô dâu chú rể",
  ],
  rsvpAttendingLabel: "Bạn có thể tham dự không?",
  rsvpYes: "Có, tôi sẽ tham dự",
  rsvpNo: "Rất tiếc, tôi không thể tham dự",
  rsvpCompanionsLabel: "Ngoài bạn ra, có ai đi cùng với bạn không",
  rsvpAllergyLabel: "Bạn có bị dị ứng thực phẩm nào không?",
  rsvpVegetarianLabel: "Bạn có phải người ăn chay trường không",
  rsvpVegetarianYes: "Có",
  rsvpVegetarianNo: "Không",
  rsvpSubmit: "Gửi",
  rsvpSubmitting: "ĐANG GỬI…",
  rsvpThanksYes: "Cảm ơn bạn rất nhiều! Hẹn gặp bạn trong ngày vui của chúng mình.",
  rsvpThanksNo: "Cảm ơn bạn đã phản hồi. Chúng mình sẽ nhớ đến bạn trong ngày vui!",
  rsvpError: "Có lỗi xảy ra, bạn thử gửi lại giúp mình nhé.",
} as const;

export const EASE_LUXURY = [0.22, 1, 0.36, 1] as const;
