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
  brideName: "Nguyễn Thị Thanh Tuyền",
  brideNickname: "(Annie)",
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
  rsvpTitle: "RSVP",
  rsvpDeadline: "Vui lòng phản hồi trước ngày 31.12.2026",
  rsvpNameLabel: "TÊN CỦA BẠN",
  rsvpAttendingLabel: "BẠN CÓ THỂ ĐẾN CHUNG VUI CÙNG CHÚNG MÌNH CHỨ?",
  rsvpYes: "CÓ, MÌNH SẼ ĐẾN",
  rsvpNo: "RẤT TIẾC, MÌNH KHÔNG THỂ ĐẾN",
  rsvpGuestsLabel: "SỐ NGƯỜI THAM DỰ",
  rsvpPhoneLabel: "SỐ ĐIỆN THOẠI (KHÔNG BẮT BUỘC)",
  rsvpMessageLabel: "LỜI CHÚC GỬI ĐẾN CÔ DÂU CHÚ RỂ",
  rsvpSubmit: "GỬI PHẢN HỒI",
  rsvpSubmitting: "ĐANG GỬI…",
  rsvpThanksYes: "Cảm ơn bạn rất nhiều! Hẹn gặp bạn trong ngày vui của chúng mình.",
  rsvpThanksNo: "Cảm ơn bạn đã phản hồi. Chúng mình sẽ nhớ đến bạn trong ngày vui!",
  rsvpError: "Có lỗi xảy ra, bạn thử gửi lại giúp mình nhé.",
} as const;

export const EASE_LUXURY = [0.22, 1, 0.36, 1] as const;
