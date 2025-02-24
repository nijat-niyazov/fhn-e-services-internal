enum CitizenApplicationStatuses {
  PENDING_APPROVE = 1, //Təsdiq gözləyir
  REFUSED = 2, //İmtina edilmiş
  CANCELLED = 3, //Ləğv edilmiş
  PENDING_PAYMENT = 4, //Ödəniş gözləyir
  PENDING_CORRECTION = 5, //Düzəliş
  PAID = 6, //Ödənilmiş
  ACCEPTED = 7, //Qəbul olundu
  DONE = 8, //İcra olundu
}

export default CitizenApplicationStatuses
