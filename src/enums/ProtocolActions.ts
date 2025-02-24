enum ProtocolActions {
  APPROVE = 'approve', //"Təsdiqləmək/Qərarlı"
  PROLONG = 'prolong', // "Qərar verilməni uzatmaq"
  SUSPEND = 'suspend', // "Qərar verilməni dayandırmaq"
  REFUSE = 'refuse', // "Xitam vermək"
  WARN = 'warn', // "Xəbərdarlıq etmək"
  CONDITIONAL_PENALTY = 'conditional-penalty', // "Şərti cəriməyə keçirmək"
  CANCEL = 'cancel', // "Ləğv etmək"
  REFUSE_CONDITIONAL_PENALTY = 'refuse-conditional-penalty', // "Xitam vermək"
  SENT_RESPECTIVELY = 'sent-respectively', // "Aidiyyatı üzrə göndər"
  REDIRECT = 'redirect', // "Aidiyyatı üzrə digər orqan idarəyə göndər"
}

export default ProtocolActions
