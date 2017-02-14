/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * @module
 * @description
 * Entry point for all public APIs of the platform-browser package.
 */

export namespace SAPB1 {
export function callSL(b1cmd:  SAPB1.B1ObjActionEnum, actionUri: string, slsessionid: string, slrouteid: string, ...obj: any[]): SLCallObject {
	var obj = [];
	for (var _i = 4; _i < arguments.length; _i++) {
	obj[_i - 4] = arguments[_i];
	}
	var data;
	if (b1cmd == SAPB1.B1ObjActionEnum.ADD || b1cmd == SAPB1.B1ObjActionEnum.UPDATE || b1cmd == SAPB1.B1ObjActionEnum.LOGIN)
	{
    // I think this grabs each argument and then sticks it all in a json object, so the object is composed of the type, the endpoint, the session id, the route, and then the actual object itself
		//data = JSON.stringify(obj[0][0]);
    data = JSON.stringify(obj[0])
	}

  let callObject: SLCallObject = new SLCallObject(actionUri,<B1ObjActionEnum>b1cmd, data );
  return callObject;
}

export class SLCallObject {
  public _endpoint: string = "";
  public _httpVerb: B1ObjActionEnum;
  public _callData: JSON;

  constructor(endpoint: string, httpverb: B1ObjActionEnum, data: JSON) {
    this._endpoint = endpoint;
    this._httpVerb = httpverb;
    this._callData = data;
  }
}

export class AccountCategorySourceEnum {
static acsBalanceSheet = "acsBalanceSheet";
static acsProfitAndLoss = "acsProfitAndLoss";
}

export class AccountSegmentationTypeEnum {
static ast_Alphanumeric = "ast_Alphanumeric";
static ast_Numeric = "ast_Numeric";
}

export class AcquisitionPeriodControlEnum {
static apcProRataTemporis = "apcProRataTemporis";
static apcFirstYearConvention = "apcFirstYearConvention";
static apcHalfYear = "apcHalfYear";
static apcFullYear = "apcFullYear";
}

export class AcquisitionProRataTypeEnum {
static aprtExactlyDailyBase = "aprtExactlyDailyBase";
static aprtFirstDayOfCurrentPeriod = "aprtFirstDayOfCurrentPeriod";
static aprtFirstDayOfNextPeriod = "aprtFirstDayOfNextPeriod";
}

export class AlertManagementDocumentEnum {
static atd_NOB = "atd_NOB";
static atd_Invoices = "atd_Invoices";
static atd_RevertInvoice = "atd_RevertInvoice";
static atd_DeliveryNotes = "atd_DeliveryNotes";
static atd_Returns = "atd_Returns";
static atd_Orders = "atd_Orders";
static atd_PurchaseInvoices = "atd_PurchaseInvoices";
static atd_PurchaseDeliveryNotes = "atd_PurchaseDeliveryNotes";
static atd_PurchaseOrders = "atd_PurchaseOrders";
static atd_Quotations = "atd_Quotations";
static atd_IncomingPayments = "atd_IncomingPayments";
static atd_JournalEntries = "atd_JournalEntries";
static atd_OutgoingPayments = "atd_OutgoingPayments";
static atd_ChecksForPayment = "atd_ChecksForPayment";
static atd_CorrectionInvoice = "atd_CorrectionInvoice";
static atd_DownPaymentIncoming = "atd_DownPaymentIncoming";
static atd_DownPaymentOutgoing = "atd_DownPaymentOutgoing";
}

export class AlertManagementFrequencyType {
static atfi_Minutes = "atfi_Minutes";
static atfi_Hours = "atfi_Hours";
static atfi_Days = "atfi_Days";
static atfi_Weeks = "atfi_Weeks";
static atfi_Monthly = "atfi_Monthly";
}

export class AlertManagementPriorityEnum {
static atp_Low = "atp_Low";
static atp_Normal = "atp_Normal";
static atp_High = "atp_High";
}

export class AlertManagementTypeEnum {
static att_User = "att_User";
static att_System = "att_System";
}

export class AmountCatTypeEnum {
static act_Open = "act_Open";
static act_Invoiced = "act_Invoiced";
}

export class ApprovalTemplateConditionTypeEnum {
static atctUndefined = "atctUndefined";
static atctDeviationFromCreditLine = "atctDeviationFromCreditLine";
static atctDeviationFromObligo = "atctDeviationFromObligo";
static atctGrossProfitPercent = "atctGrossProfitPercent";
static atctDiscountPercent = "atctDiscountPercent";
static atctDeviationFromBudget = "atctDeviationFromBudget";
static atctTotalDocument = "atctTotalDocument";
static atctItemCode = "atctItemCode";
static atctTotalLine = "atctTotalLine";
static atctCountedQuantity = "atctCountedQuantity";
static atctQuantity = "atctQuantity";
static atctVariance = "atctVariance";
static atctVariancePercent = "atctVariancePercent";
}

export class ApprovalTemplateOperationTypeEnum {
static opcodeUndefined = "opcodeUndefined";
static opcodeGreaterThan = "opcodeGreaterThan";
static opcodeGreaterOrEqual = "opcodeGreaterOrEqual";
static opcodeLessThan = "opcodeLessThan";
static opcodeLessOrEqual = "opcodeLessOrEqual";
static opcodeEqual = "opcodeEqual";
static opcodeDoesNotEqual = "opcodeDoesNotEqual";
static opcodeInRange = "opcodeInRange";
static opcodeNotInRange = "opcodeNotInRange";
}

export class ApprovalTemplatesDocumentTypeEnum {
static atdtQuotation = "atdtQuotation";
static atdtOrder = "atdtOrder";
static atdtDelivery = "atdtDelivery";
static atdtReturns = "atdtReturns";
static atdtArDownPayment = "atdtArDownPayment";
static atdtArInvoice = "atdtArInvoice";
static atdtArCreditMemo = "atdtArCreditMemo";
static atdtCorrectionInvoice = "atdtCorrectionInvoice";
static atdtPurchaseOrder = "atdtPurchaseOrder";
static atdtGoodsReceiptPO = "atdtGoodsReceiptPO";
static atdtGoodsReturns = "atdtGoodsReturns";
static atdtApDownPayment = "atdtApDownPayment";
static atdtApInvoice = "atdtApInvoice";
static atdtApCreditMemo = "atdtApCreditMemo";
static atdtGoodsReceipt = "atdtGoodsReceipt";
static atdtGoodsIssue = "atdtGoodsIssue";
static atdtInventoryTransfer = "atdtInventoryTransfer";
static atdtPurchaseQuotation = "atdtPurchaseQuotation";
static atdtInventoryTransferRequest = "atdtInventoryTransferRequest";
static atdtOutgoingPayment = "atdtOutgoingPayment";
static atdtInventoryCounting = "atdtInventoryCounting";
static atdtInventoryPosting = "atdtInventoryPosting";
static atdtInventoryOpeningBalance = "atdtInventoryOpeningBalance";
}

export class AreaTypeEnum {
static atPostingtoGL = "atPostingtoGL";
static atAdditionalArea = "atAdditionalArea";
static atDerivedArea = "atDerivedArea";
}

export class AssesseeTypeEnum {
static atCompany = "atCompany";
static atOthers = "atOthers";
}

export class AssetDocumentStatusEnum {
static adsPosted = "adsPosted";
static adsDraft = "adsDraft";
static adsCancelled = "adsCancelled";
}

export class AssetDocumentTypeEnum {
static adtOrdinaryDepreciation = "adtOrdinaryDepreciation";
static adtUnplannedDepreciation = "adtUnplannedDepreciation";
static adtSpecialDepreciation = "adtSpecialDepreciation";
static adtAppreciation = "adtAppreciation";
static adtAssetTransfer = "adtAssetTransfer";
static adtSales = "adtSales";
static adtScrapping = "adtScrapping";
static adtAssetClassTransfer = "adtAssetClassTransfer";
}

export class AssetOriginalTypeEnum {
static aotARInvoice = "aotARInvoice";
static aotAPCreditMemo = "aotAPCreditMemo";
static aotAPInvoice = "aotAPInvoice";
static aotOutgoingPayment = "aotOutgoingPayment";
static aotAPCorrectionInvoice = "aotAPCorrectionInvoice";
static aotCapitalization = "aotCapitalization";
static aotFixedAssetsCreditMemo = "aotFixedAssetsCreditMemo";
static aotAllTransactions = "aotAllTransactions";
static aotManualDepreciation = "aotManualDepreciation";
static aotFixedAssetsTransfer = "aotFixedAssetsTransfer";
static aotRetirement = "aotRetirement";
}

export class AssetStatusEnum {
static New = "New";
static Active = "Active";
static Inactive = "Inactive";
}

export class AssetTransactionTypeEnum {
static att_BeginningOfYear = "att_BeginningOfYear";
static att_Acquistion = "att_Acquistion";
static att_Retirement = "att_Retirement";
static att_Transfer = "att_Transfer";
static att_WriteUp = "att_WriteUp";
static att_OrdinaryDepreciation = "att_OrdinaryDepreciation";
static att_UplannedDepreciation = "att_UplannedDepreciation";
static att_SpecialDepreciation = "att_SpecialDepreciation";
static att_EndOfYear = "att_EndOfYear";
}

export class AssetTypeEnum {
static atAssetTypeGeneral = "atAssetTypeGeneral";
static atAssetTypeLowValueAsset = "atAssetTypeLowValueAsset";
}

export class AttributeGroupFieldTypeEnum {
static agftText = "agftText";
static agftNumeric = "agftNumeric";
static agftDate = "agftDate";
static agftAmount = "agftAmount";
static agftPrice = "agftPrice";
static agftQuantity = "agftQuantity";
}

export class AuthenticateUserResultsEnum {
static aturNoUserConnectedToCompany = "aturNoUserConnectedToCompany";
static aturUsernamePasswordMatched = "aturUsernamePasswordMatched";
static aturLogOnUserNotAdmin = "aturLogOnUserNotAdmin";
static aturBadUserOrPassword = "aturBadUserOrPassword";
static aturUserHasBeenLocked = "aturUserHasBeenLocked";
static aturPasswordExpired = "aturPasswordExpired";
static aturDBErrors = "aturDBErrors";
}

export class AutoAllocOnReceiptMethodEnum {
static aaormDefaultBin = "aaormDefaultBin";
static aaormItemCurrentAndHistoricalBins = "aaormItemCurrentAndHistoricalBins";
static aaormItemCurrentBins = "aaormItemCurrentBins";
static aaormLastBinReceivedItem = "aaormLastBinReceivedItem";
}

export class AutomaticPostingEnum {
static apNo = "apNo";
static apInterestAndFee = "apInterestAndFee";
static apInterestOnly = "apInterestOnly";
static apFeeOnly = "apFeeOnly";
}

export class BankStatementDocTypeEnum {
static bsdtReceipts = "bsdtReceipts";
static bsdtPaymentToVendor = "bsdtPaymentToVendor";
static bsdtInvoices = "bsdtInvoices";
static bsdtPurchases = "bsdtPurchases";
static bsdtDownPaymentIncoming = "bsdtDownPaymentIncoming";
static bsdtDownPaymentOutgoing = "bsdtDownPaymentOutgoing";
static bsdtRevertInvoices = "bsdtRevertInvoices";
static bsdtRevertPurchases = "bsdtRevertPurchases";
static bsdtJournalEntry = "bsdtJournalEntry";
}

export class BankStatementRowSourceEnum {
static bsImported = "bsImported";
static bsImportedAndAmended = "bsImportedAndAmended";
static bsManuallyEntered = "bsManuallyEntered";
}

export class BankStatementStatusEnum {
static bssExecuted = "bssExecuted";
static bssDraft = "bssDraft";
static bssOld = "bssOld";
}

export class BaseDateSelectEnum {
static bdsFromDueDate = "bdsFromDueDate";
static bdsFromLastDunningRun = "bdsFromLastDunningRun";
}

export class BatchDetailServiceStatusEnum {
static bdsStatus_Released = "bdsStatus_Released";
static bdsStatus_NotAccessible = "bdsStatus_NotAccessible";
static bdsStatus_Locked = "bdsStatus_Locked";
}

export class BinActionTypeEnum {
static batToWarehouse = "batToWarehouse";
static batFromWarehouse = "batFromWarehouse";
}

export class BinLocationFieldTypeEnum {
static blftWarehouseSublevel = "blftWarehouseSublevel";
static blftBinLocationAttribute = "blftBinLocationAttribute";
}

export class BinRestrictItemEnum {
static briNone = "briNone";
static briSpecificItem = "briSpecificItem";
static briSingleItemOnly = "briSingleItemOnly";
static briSpecificItemGroup = "briSpecificItemGroup";
static briSpecificItemGroupOnly = "briSpecificItemGroupOnly";
}

export class BinRestrictTransactionEnum {
static brtNoRestrictions = "brtNoRestrictions";
static brtAllTrans = "brtAllTrans";
static brtInboundTrans = "brtInboundTrans";
static brtOutboundTrans = "brtOutboundTrans";
static brtAllExceptInventoryTrans = "brtAllExceptInventoryTrans";
}

export class BinRestrictUoMEnum {
static bruNone = "bruNone";
static bruSpecificUoM = "bruSpecificUoM";
static bruSingleUoMOnly = "bruSingleUoMOnly";
static bruSpecificUoMGroup = "bruSpecificUoMGroup";
static bruSpecificUoMGroupOnly = "bruSpecificUoMGroupOnly";
}

export class BinRestrictionBatchEnum {
static brbNoRestrictions = "brbNoRestrictions";
static brbSingleBatch = "brbSingleBatch";
}

export class BlanketAgreementDatePeriodsEnum {
static Daily = "Daily";
static Weekly = "Weekly";
static Monthly = "Monthly";
static Quarterly = "Quarterly";
static Semiannually = "Semiannually";
static Annually = "Annually";
static OneTime = "OneTime";
}

export class BlanketAgreementDocTypeEnum {
static ARInvoice = "ARInvoice";
static ARCreditMemo = "ARCreditMemo";
static Delivery = "Delivery";
static Return = "Return";
static SalesOrder = "SalesOrder";
static APInvoice = "APInvoice";
static APCreditMemo = "APCreditMemo";
static GoodsReceiptPO = "GoodsReceiptPO";
static GoodsReturn = "GoodsReturn";
static PurchaseOrder = "PurchaseOrder";
static SalesQuotation = "SalesQuotation";
static APCorrectionInvoice = "APCorrectionInvoice";
static APCorrectionInvoiceReversal = "APCorrectionInvoiceReversal";
static ARCorrectionInvoice = "ARCorrectionInvoice";
static ARCorrectionInvoiceReversal = "ARCorrectionInvoiceReversal";
static ARDownPayment = "ARDownPayment";
static APDownPayment = "APDownPayment";
static PurchaseQuotation = "PurchaseQuotation";
}

export class BlanketAgreementMethodEnum {
static amItem = "amItem";
static amMonetary = "amMonetary";
}

export class BlanketAgreementStatusEnum {
static asApproved = "asApproved";
static asOnHold = "asOnHold";
static asDraft = "asDraft";
static asTerminated = "asTerminated";
}

export class BlanketAgreementTypeEnum {
static atGeneral = "atGeneral";
static atSpecific = "atSpecific";
}

export class BoAPARDocumentTypes {
static bodt_Invoice = "bodt_Invoice";
static bodt_CreditNote = "bodt_CreditNote";
static bodt_DeliveryNote = "bodt_DeliveryNote";
static bodt_Return = "bodt_Return";
static bodt_Order = "bodt_Order";
static bodt_PurchaseInvoice = "bodt_PurchaseInvoice";
static bodt_PurchaseCreditNote = "bodt_PurchaseCreditNote";
static bodt_PurchaseDeliveryNote = "bodt_PurchaseDeliveryNote";
static bodt_PurchaseReturn = "bodt_PurchaseReturn";
static bodt_PurchaseOrder = "bodt_PurchaseOrder";
static bodt_Quotation = "bodt_Quotation";
static bodt_CorrectionAPInvoice = "bodt_CorrectionAPInvoice";
static bodt_CorrectionARInvoice = "bodt_CorrectionARInvoice";
static bodt_Zero = "bodt_Zero";
static bodt_MinusOne = "bodt_MinusOne";
static bodt_PurchaseQutation = "bodt_PurchaseQutation";
}

export class BoAccountTypes {
static at_Expenses = "at_Expenses";
static at_Other = "at_Other";
static at_Revenues = "at_Revenues";
}

export class BoActivities {
static cn_Conversation = "cn_Conversation";
static cn_Meeting = "cn_Meeting";
static cn_Task = "cn_Task";
static cn_Other = "cn_Other";
static cn_Note = "cn_Note";
static cn_Campaign = "cn_Campaign";
}

export class BoAdEpnsDistribMethods {
static aedm_None = "aedm_None";
static aedm_Quantity = "aedm_Quantity";
static aedm_Volume = "aedm_Volume";
static aedm_Weight = "aedm_Weight";
static aedm_Equally = "aedm_Equally";
static aedm_RowTotal = "aedm_RowTotal";
}

export class BoAdEpnsTaxTypes {
static aext_NormalTax = "aext_NormalTax";
static aext_NoTax = "aext_NoTax";
static aext_UseTax = "aext_UseTax";
}

export class BoAddressType {
static bo_ShipTo = "bo_ShipTo";
static bo_BillTo = "bo_BillTo";
}

export class BoAeDistMthd {
static aed_Equally = "aed_Equally";
static aed_LineTotal = "aed_LineTotal";
static aed_None = "aed_None";
static aed_Quantity = "aed_Quantity";
static aed_Volume = "aed_Volume";
static aed_Weight = "aed_Weight";
}

export class BoAlertTypeforWHStockEnum {
static atfwhs_WarningOnly = "atfwhs_WarningOnly";
static atfwhs_Block = "atfwhs_Block";
static atfwhs_NoMessage = "atfwhs_NoMessage";
}

export class BoAllocationByEnum {
static ab_CashValueAfterCustoms = "ab_CashValueAfterCustoms";
static ab_CashValueBeforeCustoms = "ab_CashValueBeforeCustoms";
static ab_Equal = "ab_Equal";
static ab_Quantity = "ab_Quantity";
static ab_Volume = "ab_Volume";
static ab_Weight = "ab_Weight";
}

export class BoApprovalRequestDecisionEnum {
static ardPending = "ardPending";
static ardApproved = "ardApproved";
static ardNotApproved = "ardNotApproved";
}

export class BoApprovalRequestStatusEnum {
static arsPending = "arsPending";
static arsApproved = "arsApproved";
static arsNotApproved = "arsNotApproved";
static arsGenerated = "arsGenerated";
static arsGeneratedByAuthorizer = "arsGeneratedByAuthorizer";
static arsCancelled = "arsCancelled";
}

export class BoBOETypes {
static bobt_Incoming = "bobt_Incoming";
static bobt_Outgoing = "bobt_Outgoing";
}

export class BoBOTFromStatus {
static btfs_Sent = "btfs_Sent";
static btfs_Generated = "btfs_Generated";
static btfs_Deposited = "btfs_Deposited";
static btfs_Paid = "btfs_Paid";
}

export class BoBOTToStatus {
static btts_Canceled = "btts_Canceled";
static btts_Generated = "btts_Generated";
static btts_Deposit = "btts_Deposit";
static btts_Paid = "btts_Paid";
static btts_Failed = "btts_Failed";
static btts_Closed = "btts_Closed";
}

export class BoBarCodeStandardEnum {
static rlbsan13 = "rlbsan13";
static rlbsCode39 = "rlbsCode39";
static rlbsCode128 = "rlbsCode128";
}

export class BoBaseDateRateEnum {
static bdr_PostingDate = "bdr_PostingDate";
static bdr_TaxDate = "bdr_TaxDate";
}

export class BoBaselineDate {
static bld_ClosingDate = "bld_ClosingDate";
static bld_PostingDate = "bld_PostingDate";
static bld_SystemDate = "bld_SystemDate";
static bld_TaxDate = "bld_TaxDate";
}

export class BoBlockBudget {
static bb_OnlyAnnualAlert = "bb_OnlyAnnualAlert";
static bb_MonthlyAlertOnly = "bb_MonthlyAlertOnly";
static bb_Block = "bb_Block";
}

export class BoBoeStatus {
static boes_Created = "boes_Created";
static boes_Sent = "boes_Sent";
static boes_Deposited = "boes_Deposited";
static boes_Paid = "boes_Paid";
static boes_Cancelled = "boes_Cancelled";
static boes_Closed = "boes_Closed";
static boes_Failed = "boes_Failed";
}

export class BoBpAccountTypes {
static bpat_General = "bpat_General";
static bpat_DownPayment = "bpat_DownPayment";
static bpat_AssetsAccount = "bpat_AssetsAccount";
static bpat_Receivable = "bpat_Receivable";
static bpat_Payable = "bpat_Payable";
static bpat_OnCollection = "bpat_OnCollection";
static bpat_Presentation = "bpat_Presentation";
static bpat_AssetsPayable = "bpat_AssetsPayable";
static bpat_Discounted = "bpat_Discounted";
static bpat_Unpaid = "bpat_Unpaid";
static bpat_OpenDebts = "bpat_OpenDebts";
static bpat_Domestic = "bpat_Domestic";
static bpat_Foreign = "bpat_Foreign";
static bpat_CashDiscountInterim = "bpat_CashDiscountInterim";
static bpat_ExchangeRateInterim = "bpat_ExchangeRateInterim";
}

export class BoBpsDocTypes {
static bpdt_PaymentReference = "bpdt_PaymentReference";
static bpdt_ISR = "bpdt_ISR";
static bpdt_DocNum = "bpdt_DocNum";
}

export class BoBudgetAlert {
static ba_AnnualAlert = "ba_AnnualAlert";
static ba_MonthlyAlert = "ba_MonthlyAlert";
}

export class BoBusinessAreaEnum {
static baSales = "baSales";
static baPurchase = "baPurchase";
static baSalesAndPurchase = "baSalesAndPurchase";
}

export class BoBusinessPartnerGroupTypes {
static bbpgt_CustomerGroup = "bbpgt_CustomerGroup";
static bbpgt_VendorGroup = "bbpgt_VendorGroup";
}

export class BoBusinessPartnerTypes {
static garAll = "garAll";
static garCompany = "garCompany";
static garPrivate = "garPrivate";
static garGovernment = "garGovernment";
}

export class BoCardCompanyTypes {
static cCompany = "cCompany";
static cPrivate = "cPrivate";
static cGovernment = "cGovernment";
}

export class BoCardTypes {
static cCustomer = "cCustomer";
static cSupplier = "cSupplier";
static cLid = "cLid";
}

export class BoChangeLogEnum {
static clChartOfAccounts = "clChartOfAccounts";
static clBusinessPartners = "clBusinessPartners";
static clItems = "clItems";
static clVatGroups = "clVatGroups";
static clUsers = "clUsers";
static clInvoices = "clInvoices";
static clCreditNotes = "clCreditNotes";
static clDeliveryNotes = "clDeliveryNotes";
static clReturns = "clReturns";
static clOrders = "clOrders";
static clPurchaseInvoices = "clPurchaseInvoices";
static clPurchaseCreditNotes = "clPurchaseCreditNotes";
static clPurchaseDeliveryNotes = "clPurchaseDeliveryNotes";
static clPurchaseReturns = "clPurchaseReturns";
static clPurchaseOrders = "clPurchaseOrders";
static clQuotations = "clQuotations";
static clIncomingPayments = "clIncomingPayments";
static clJournalEntries = "clJournalEntries";
static clCreditCards = "clCreditCards";
static clAdminInfo = "clAdminInfo";
static clVendorPayments = "clVendorPayments";
static clItemGroups = "clItemGroups";
static clInventoryGeneralEntry = "clInventoryGeneralEntry";
static clInventoryGeneralExit = "clInventoryGeneralExit";
static clWarehouses = "clWarehouses";
static clProductTrees = "clProductTrees";
static clStockTransfers = "clStockTransfers";
static clFinancePeriods = "clFinancePeriods";
static clAdditionalExpenses = "clAdditionalExpenses";
static clPickLists = "clPickLists";
static clMaterialRevaluation = "clMaterialRevaluation";
static clCorrectionPurchaseInvoice = "clCorrectionPurchaseInvoice";
static clCorrectionPurchaseInvoiceReversal = "clCorrectionPurchaseInvoiceReversal";
static clCorrectionInvoice = "clCorrectionInvoice";
static clCorrectionInvoiceReversal = "clCorrectionInvoiceReversal";
static clEmployeesInfo = "clEmployeesInfo";
static clCustomerEquipmentCards = "clCustomerEquipmentCards";
static clWithholdingTaxCodes = "clWithholdingTaxCodes";
static clBillOfExchange = "clBillOfExchange";
static clServiceCalls = "clServiceCalls";
static clProductionOrders = "clProductionOrders";
static clDownPayments = "clDownPayments";
static clPurchaseDownPayments = "clPurchaseDownPayments";
static clPeriodCategory = "clPeriodCategory";
static clHouseBankAccounts = "clHouseBankAccounts";
static clSalesTaxInvoice = "clSalesTaxInvoice";
static clPurchaseTaxInvoice = "clPurchaseTaxInvoice";
static clExternalBankOperationCodes = "clExternalBankOperationCodes";
static clInternalBankOperationCodes = "clInternalBankOperationCodes";
static clOutgoingExciseInvoice = "clOutgoingExciseInvoice";
static clIncomingExciseInvoice = "clIncomingExciseInvoice";
static clInventoryTransferRequests = "clInventoryTransferRequests";
static clPurchaseQuotation = "clPurchaseQuotation";
static clUDO = "clUDO";
}

export class BoCheckDepositTypeEnum {
static cdtCashChecks = "cdtCashChecks";
static cdtPostdatedChecks = "cdtPostdatedChecks";
}

export class BoClosingDateProcedureBaseDateEnum {
static bocpdbld_BaseSystemDate = "bocpdbld_BaseSystemDate";
static bocpdbld_PostingDate = "bocpdbld_PostingDate";
}

export class BoClosingDateProcedureDueMonthEnum {
static bocpddm_HalfMonth = "bocpddm_HalfMonth";
static bocpddm_MonthEnd = "bocpddm_MonthEnd";
static bocpddm_MonthStart = "bocpddm_MonthStart";
static bocpddm_None = "bocpddm_None";
}

export class BoCockpitTypeEnum {
static cptt_UserCockpit = "cptt_UserCockpit";
static cptt_TemplateCockpit = "cptt_TemplateCockpit";
}

export class BoConsumptionMethod {
static cm_BackwardForward = "cm_BackwardForward";
static cm_ForwardBackward = "cm_ForwardBackward";
}

export class BoContractTypes {
static ct_Customer = "ct_Customer";
static ct_ItemGroup = "ct_ItemGroup";
static ct_SerialNumber = "ct_SerialNumber";
}

export class BoCorInvItemStatus {
static ciis_Was = "ciis_Was";
static ciis_ShouldBe = "ciis_ShouldBe";
}

export class BoCpCardAcct {
static cfp_Card = "cfp_Card";
static cfp_Account = "cfp_Account";
}

export class BoCurrencyCheck {
static cc_Block = "cc_Block";
static cc_NoMessage = "cc_NoMessage";
}

export class BoCurrencySources {
static bocs_LocalCurrency = "bocs_LocalCurrency";
static bocs_SystemCurrency = "bocs_SystemCurrency";
static bocs_BPCurrency = "bocs_BPCurrency";
}

export class BoDataOwnershipManageMethodEnum {
static doManageByDocOnly = "doManageByDocOnly";
static doManageByBPOnly = "doManageByBPOnly";
static doManageByBPnDoc = "doManageByBPnDoc";
}

export class BoDataSourceEnum {
static rldsFreeText = "rldsFreeText";
static rldsSystemVariable = "rldsSystemVariable";
static rldsDatabase = "rldsDatabase";
static rldsFormula = "rldsFormula";
}

export class BoDateTemplate {
static dt_DDMMYY = "dt_DDMMYY";
static dt_DDMMCCYY = "dt_DDMMCCYY";
static dt_MMDDYY = "dt_MMDDYY";
static dt_MMDDCCYY = "dt_MMDDCCYY";
static dt_CCYYMMDD = "dt_CCYYMMDD";
static dt_DDMonthYYYY = "dt_DDMonthYYYY";
static dt_YYMMDD = "dt_YYMMDD";
}

export class BoDeductionTaxGroupCodeEnum {
static dtgcInterestReceivers = "dtgcInterestReceivers";
static dtgcEmployeeReceivingCommission = "dtgcEmployeeReceivingCommission";
static dtgcWritersPrice = "dtgcWritersPrice";
static dtgcPaidServices = "dtgcPaidServices";
static dtgcPaymentsToForeignCitizens = "dtgcPaymentsToForeignCitizens";
static dtgcPaymentsForCitizensInForeignCountries = "dtgcPaymentsForCitizensInForeignCountries";
static dtgcInvalidPaymentFromCompensationFund = "dtgcInvalidPaymentFromCompensationFund";
static dtgcRepaymentToEmployerFromCompensationFund = "dtgcRepaymentToEmployerFromCompensationFund";
static dtgcRentalPayments = "dtgcRentalPayments";
static dtgcPaymentsFromStudyFund = "dtgcPaymentsFromStudyFund";
static dtgcDividendPayments = "dtgcDividendPayments";
}

export class BoDefaultBatchStatus {
static dbs_Released = "dbs_Released";
static dbs_NotAccessible = "dbs_NotAccessible";
static dbs_Locked = "dbs_Locked";
}

export class BoDepositAccountTypeEnum {
static datBankAccount = "datBankAccount";
static datBusinessPartner = "datBusinessPartner";
}

export class BoDepositCheckEnum {
static dtNo = "dtNo";
static dcAsCash = "dcAsCash";
static dtAsPostdated = "dtAsPostdated";
}

export class BoDepositPostingTypes {
static dpt_Collection = "dpt_Collection";
static dpt_Discounted = "dpt_Discounted";
}

export class BoDepositTypeEnum {
static dtChecks = "dtChecks";
static dtCredit = "dtCredit";
static dtCash = "dtCash";
static dtBOE = "dtBOE";
}

export class BoDocItemType {
static dit_Item = "dit_Item";
static dit_Resource = "dit_Resource";
}

export class BoDocLineType {
static dlt_Regular = "dlt_Regular";
static dlt_Alternative = "dlt_Alternative";
}

export class BoDocSpecialLineType {
static dslt_Text = "dslt_Text";
static dslt_Subtotal = "dslt_Subtotal";
}

export class BoDocSummaryTypes {
static dNoSummary = "dNoSummary";
static dByItems = "dByItems";
static dByDocuments = "dByDocuments";
}

export class BoDocWhsAutoIssueMethod {
static whsBinSingleChoiceOnly = "whsBinSingleChoiceOnly";
static whsBinBinCodeOrder = "whsBinBinCodeOrder";
static whsBinAltSortCodeOrder = "whsBinAltSortCodeOrder";
static whsBinQtyDescendingOrder = "whsBinQtyDescendingOrder";
static whsBinQtyAscendingOrder = "whsBinQtyAscendingOrder";
static whsBinFIFO = "whsBinFIFO";
static whsBinLIFO = "whsBinLIFO";
static whsBinSingleBinPreferred = "whsBinSingleBinPreferred";
}

export class BoDocWhsUpdateTypes {
static dwh_No = "dwh_No";
static dwh_OrdersFromVendors = "dwh_OrdersFromVendors";
static dwh_CustomerOrders = "dwh_CustomerOrders";
static dwh_Consignment = "dwh_Consignment";
static dwh_Stock = "dwh_Stock";
}

export class BoDocumentLinePickStatus {
static dlps_Picked = "dlps_Picked";
static dlps_NotPicked = "dlps_NotPicked";
static dlps_ReleasedForPicking = "dlps_ReleasedForPicking";
static dlps_PartiallyPicked = "dlps_PartiallyPicked";
}

export class BoDocumentSubType {
static bod_None = "bod_None";
static bod_InvoiceExempt = "bod_InvoiceExempt";
static bod_DebitMemo = "bod_DebitMemo";
static bod_Bill = "bod_Bill";
static bod_ExemptBill = "bod_ExemptBill";
static bod_PurchaseDebitMemo = "bod_PurchaseDebitMemo";
static bod_ExportInvoice = "bod_ExportInvoice";
}

export class BoDocumentTypes {
static dDocument_Items = "dDocument_Items";
static dDocument_Service = "dDocument_Service";
}

export class BoDueDateEnum {
static boddDateOfPaymentRun = "boddDateOfPaymentRun";
static boddDueDateOfInvoice = "boddDueDateOfInvoice";
static boddPaymentTerms = "boddPaymentTerms";
}

export class BoDurations {
static du_Minuts = "du_Minuts";
static du_Hours = "du_Hours";
static du_Days = "du_Days";
}

export class BoExpenseOperationTypeEnum {
static bo_ExpOpType_ProfessionalServices = "bo_ExpOpType_ProfessionalServices";
static bo_ExpOpType_RentingAssets = "bo_ExpOpType_RentingAssets";
static bo_ExpOpType_Others = "bo_ExpOpType_Others";
static bo_ExpOpType_None = "bo_ExpOpType_None";
}

export class BoExtensionErrorActionEnum {
static eeaStop = "eeaStop";
static eeaIgnore = "eeaIgnore";
static eeaPrompt = "eeaPrompt";
}

export class BoFatherCardTypes {
static cPayments_sum = "cPayments_sum";
static cDelivery_sum = "cDelivery_sum";
}

export class BoFieldTypes {
static db_Alpha = "db_Alpha";
static db_Memo = "db_Memo";
static db_Numeric = "db_Numeric";
static db_Date = "db_Date";
static db_Float = "db_Float";
}

export class BoFldSubTypes {
static st_None = "st_None";
static st_Address = "st_Address";
static st_Phone = "st_Phone";
static st_Time = "st_Time";
static st_Rate = "st_Rate";
static st_Sum = "st_Sum";
static st_Price = "st_Price";
static st_Quantity = "st_Quantity";
static st_Percentage = "st_Percentage";
static st_Measurement = "st_Measurement";
static st_Link = "st_Link";
static st_Image = "st_Image";
}

export class BoForecastViewType {
static fvtDaily = "fvtDaily";
static fvtWeekly = "fvtWeekly";
static fvtMonthly = "fvtMonthly";
}

export class BoFormattedSearchActionEnum {
static bofsaNone = "bofsaNone";
static bofsaQuery = "bofsaQuery";
static bofsaValidValues = "bofsaValidValues";
}

export class BoFrequency {
static bof_Daily = "bof_Daily";
static bof_Weekly = "bof_Weekly";
static bof_Every4Weeks = "bof_Every4Weeks";
static bof_Monthly = "bof_Monthly";
static bof_Quarterly = "bof_Quarterly";
static bof_HalfYearly = "bof_HalfYearly";
static bof_Annually = "bof_Annually";
static bof_OneTime = "bof_OneTime";
static bof_EveryXDays = "bof_EveryXDays";
}

export class BoGLMethods {
static glm_WH = "glm_WH";
static glm_ItemClass = "glm_ItemClass";
static glm_ItemLevel = "glm_ItemLevel";
}

export class BoGenderTypes {
static gt_Female = "gt_Female";
static gt_Male = "gt_Male";
static gt_Undefined = "gt_Undefined";
}

export class BoGridTypeEnum {
static gtCombination = "gtCombination";
static gtContinuousLine = "gtContinuousLine";
static gtBrokenLine = "gtBrokenLine";
static gtDots = "gtDots";
}

export class BoHorizontalAlignmentEnum {
static rlhjRight = "rlhjRight";
static rlhjLeft = "rlhjLeft";
static rlhjCentralized = "rlhjCentralized";
static rlhjLanguageDependent = "rlhjLanguageDependent";
}

export class BoInterimDocTypes {
static boidt_None = "boidt_None";
static boidt_ExchangeRate = "boidt_ExchangeRate";
static boidt_CashDiscount = "boidt_CashDiscount";
}

export class BoInventorySystem {
static bis_MovingAverage = "bis_MovingAverage";
static bis_Standard = "bis_Standard";
static bis_FIFO = "bis_FIFO";
static bis_SNB = "bis_SNB";
}

export class BoIssueMethod {
static im_Backflush = "im_Backflush";
static im_Manual = "im_Manual";
}

export class BoItemTreeTypes {
static iNotATree = "iNotATree";
static iAssemblyTree = "iAssemblyTree";
static iSalesTree = "iSalesTree";
static iProductionTree = "iProductionTree";
static iTemplateTree = "iTemplateTree";
static iIngredient = "iIngredient";
}

export class BoLineBreakEnum {
static rlsAllowOverflow = "rlsAllowOverflow";
static rlsAdjustToCell = "rlsAdjustToCell";
static rlsDivideIntoRows = "rlsDivideIntoRows";
}

export class BoMRPComponentWarehouse {
static bomcw_BOM = "bomcw_BOM";
static bomcw_Parent = "bomcw_Parent";
}

export class BoManageMethod {
static bomm_OnEveryTransaction = "bomm_OnEveryTransaction";
static bomm_OnReleaseOnly = "bomm_OnReleaseOnly";
}

export class BoMaterialTypes {
static mt_GoodsForReseller = "mt_GoodsForReseller";
static mt_FinishedGoods = "mt_FinishedGoods";
static mt_GoodsInProcess = "mt_GoodsInProcess";
static mt_RawMaterial = "mt_RawMaterial";
static mt_Package = "mt_Package";
static mt_SubProduct = "mt_SubProduct";
static mt_IntermediateMaterial = "mt_IntermediateMaterial";
static mt_ConsumerMaterial = "mt_ConsumerMaterial";
static mt_FixedAsset = "mt_FixedAsset";
static mt_Service = "mt_Service";
static mt_OtherInput = "mt_OtherInput";
static mt_Other = "mt_Other";
}

export class BoMeritalStatuses {
static mts_Single = "mts_Single";
static mts_Married = "mts_Married";
static mts_Divorced = "mts_Divorced";
static mts_Widowed = "mts_Widowed";
}

export class BoMoneyPrecisionTypes {
static mpt_Sum = "mpt_Sum";
static mpt_Price = "mpt_Price";
static mpt_Rate = "mpt_Rate";
static mpt_Quantity = "mpt_Quantity";
static mpt_Percent = "mpt_Percent";
static mpt_Measure = "mpt_Measure";
static mpt_Tax = "mpt_Tax";
}

export class BoMsgPriorities {
static pr_Low = "pr_Low";
static pr_Normal = "pr_Normal";
static pr_High = "pr_High";
}

export class BoMsgRcpTypes {
static rt_RandomUser = "rt_RandomUser";
static rt_ContactPerson = "rt_ContactPerson";
static rt_InternalUser = "rt_InternalUser";
}

export class BoORCTPaymentTypeEnum {
static bopt_None = "bopt_None";
static bopt_Electronic = "bopt_Electronic";
static bopt_Post = "bopt_Post";
static bopt_Telegraph = "bopt_Telegraph";
static bopt_Express = "bopt_Express";
}

export class BoObjectTypes {
static oChartOfAccounts = "oChartOfAccounts";
static oBusinessPartners = "oBusinessPartners";
static oBanks = "oBanks";
static oItems = "oItems";
static oVatGroups = "oVatGroups";
static oPriceLists = "oPriceLists";
static oSpecialPrices = "oSpecialPrices";
static oItemProperties = "oItemProperties";
static oBusinessPartnerGroups = "oBusinessPartnerGroups";
static oUsers = "oUsers";
static oInvoices = "oInvoices";
static oCreditNotes = "oCreditNotes";
static oDeliveryNotes = "oDeliveryNotes";
static oReturns = "oReturns";
static oOrders = "oOrders";
static oPurchaseInvoices = "oPurchaseInvoices";
static oPurchaseCreditNotes = "oPurchaseCreditNotes";
static oPurchaseDeliveryNotes = "oPurchaseDeliveryNotes";
static oPurchaseReturns = "oPurchaseReturns";
static oPurchaseOrders = "oPurchaseOrders";
static oQuotations = "oQuotations";
static oIncomingPayments = "oIncomingPayments";
static oJournalVouchers = "oJournalVouchers";
static oJournalEntries = "oJournalEntries";
static oStockTakings = "oStockTakings";
static oContacts = "oContacts";
static oCreditCards = "oCreditCards";
static oCurrencyCodes = "oCurrencyCodes";
static oPaymentTermsTypes = "oPaymentTermsTypes";
static oBankPages = "oBankPages";
static oManufacturers = "oManufacturers";
static oVendorPayments = "oVendorPayments";
static oLandedCostsCodes = "oLandedCostsCodes";
static oShippingTypes = "oShippingTypes";
static oLengthMeasures = "oLengthMeasures";
static oWeightMeasures = "oWeightMeasures";
static oItemGroups = "oItemGroups";
static oSalesPersons = "oSalesPersons";
static oCustomsGroups = "oCustomsGroups";
static oChecksforPayment = "oChecksforPayment";
static oInventoryGenEntry = "oInventoryGenEntry";
static oInventoryGenExit = "oInventoryGenExit";
static oWarehouses = "oWarehouses";
static oCommissionGroups = "oCommissionGroups";
static oProductTrees = "oProductTrees";
static oStockTransfer = "oStockTransfer";
static oWorkOrders = "oWorkOrders";
static oCreditPaymentMethods = "oCreditPaymentMethods";
static oCreditCardPayments = "oCreditCardPayments";
static oAlternateCatNum = "oAlternateCatNum";
static oBudget = "oBudget";
static oBudgetDistribution = "oBudgetDistribution";
static oMessages = "oMessages";
static oBudgetScenarios = "oBudgetScenarios";
static oUserDefaultGroups = "oUserDefaultGroups";
static oSalesOpportunities = "oSalesOpportunities";
static oSalesStages = "oSalesStages";
static oActivityTypes = "oActivityTypes";
static oActivityLocations = "oActivityLocations";
static oDrafts = "oDrafts";
static oDeductionTaxHierarchies = "oDeductionTaxHierarchies";
static oDeductionTaxGroups = "oDeductionTaxGroups";
static oAdditionalExpenses = "oAdditionalExpenses";
static oSalesTaxAuthorities = "oSalesTaxAuthorities";
static oSalesTaxAuthoritiesTypes = "oSalesTaxAuthoritiesTypes";
static oSalesTaxCodes = "oSalesTaxCodes";
static oQueryCategories = "oQueryCategories";
static oFactoringIndicators = "oFactoringIndicators";
static oPaymentsDrafts = "oPaymentsDrafts";
static oAccountSegmentations = "oAccountSegmentations";
static oAccountSegmentationCategories = "oAccountSegmentationCategories";
static oWarehouseLocations = "oWarehouseLocations";
static oForms1099 = "oForms1099";
static oInventoryCycles = "oInventoryCycles";
static oWizardPaymentMethods = "oWizardPaymentMethods";
static oBPPriorities = "oBPPriorities";
static oDunningLetters = "oDunningLetters";
static oUserFields = "oUserFields";
static oUserTables = "oUserTables";
static oPickLists = "oPickLists";
static oPaymentRunExport = "oPaymentRunExport";
static oUserQueries = "oUserQueries";
static oMaterialRevaluation = "oMaterialRevaluation";
static oCorrectionPurchaseInvoice = "oCorrectionPurchaseInvoice";
static oCorrectionPurchaseInvoiceReversal = "oCorrectionPurchaseInvoiceReversal";
static oCorrectionInvoice = "oCorrectionInvoice";
static oCorrectionInvoiceReversal = "oCorrectionInvoiceReversal";
static oContractTemplates = "oContractTemplates";
static oEmployeesInfo = "oEmployeesInfo";
static oCustomerEquipmentCards = "oCustomerEquipmentCards";
static oWithholdingTaxCodes = "oWithholdingTaxCodes";
static oBillOfExchangeTransactions = "oBillOfExchangeTransactions";
static oKnowledgeBaseSolutions = "oKnowledgeBaseSolutions";
static oServiceContracts = "oServiceContracts";
static oServiceCalls = "oServiceCalls";
static oUserKeys = "oUserKeys";
static oQueue = "oQueue";
static oSalesForecast = "oSalesForecast";
static oTerritories = "oTerritories";
static oIndustries = "oIndustries";
static oProductionOrders = "oProductionOrders";
static oDownPayments = "oDownPayments";
static oPurchaseDownPayments = "oPurchaseDownPayments";
static oPackagesTypes = "oPackagesTypes";
static oUserObjectsMD = "oUserObjectsMD";
static oTeams = "oTeams";
static oRelationships = "oRelationships";
static oUserPermissionTree = "oUserPermissionTree";
static oActivityStatus = "oActivityStatus";
static oChooseFromList = "oChooseFromList";
static oFormattedSearches = "oFormattedSearches";
static oAttachments2 = "oAttachments2";
static oUserLanguages = "oUserLanguages";
static oMultiLanguageTranslations = "oMultiLanguageTranslations";
static oDynamicSystemStrings = "oDynamicSystemStrings";
static oHouseBankAccounts = "oHouseBankAccounts";
static oBusinessPlaces = "oBusinessPlaces";
static oLocalEra = "oLocalEra";
static oNotaFiscalCFOP = "oNotaFiscalCFOP";
static oNotaFiscalCST = "oNotaFiscalCST";
static oNotaFiscalUsage = "oNotaFiscalUsage";
static oClosingDateProcedure = "oClosingDateProcedure";
static oBPFiscalRegistryID = "oBPFiscalRegistryID";
static oSalesTaxInvoice = "oSalesTaxInvoice";
static oPurchaseTaxInvoice = "oPurchaseTaxInvoice";
static oPurchaseQuotations = "oPurchaseQuotations";
static oStockTransferDraft = "oStockTransferDraft";
static oInventoryTransferRequest = "oInventoryTransferRequest";
static oPurchaseRequest = "oPurchaseRequest";
}

export class BoOpenIncPayment {
static oip_BankTransfer = "oip_BankTransfer";
static oip_Cash = "oip_Cash";
static oip_Checks = "oip_Checks";
static oip_Credit = "oip_Credit";
static oip_No = "oip_No";
}

export class BoOperationEnum {
static rloNone = "rloNone";
static rloAddition = "rloAddition";
static rloSubtraction = "rloSubtraction";
static rloMultiplication = "rloMultiplication";
static rloDivision = "rloDivision";
static rloPercentage = "rloPercentage";
static rloLeftPartCharacters = "rloLeftPartCharacters";
static rloRightPartMantissa = "rloRightPartMantissa";
static rloRound = "rloRound";
static rloConcat = "rloConcat";
static rloRight = "rloRight";
static rloLeft = "rloLeft";
static rloSentence = "rloSentence";
static rloLength = "rloLength";
static rloCurrency = "rloCurrency";
static rloNumber = "rloNumber";
static rloLessThan = "rloLessThan";
static rloLessOrEqual = "rloLessOrEqual";
static rloEqual = "rloEqual";
static rloNotEqual = "rloNotEqual";
static rloGreaterOrEqual = "rloGreaterOrEqual";
static rloGreaterThan = "rloGreaterThan";
}

export class BoOpexStatus {
static bos_Open = "bos_Open";
static bos_Close = "bos_Close";
}

export class BoOrientationEnum {
static ortVertical = "ortVertical";
static ortHorizontal = "ortHorizontal";
}

export class BoPayTermDueTypes {
static pdt_MonthEnd = "pdt_MonthEnd";
static pdt_HalfMonth = "pdt_HalfMonth";
static pdt_MonthStart = "pdt_MonthStart";
static pdt_None = "pdt_None";
}

export class BoPaymentMeansEnum {
static bopmCheck = "bopmCheck";
static bopmBankTransfer = "bopmBankTransfer";
static bopmBillOfExchange = "bopmBillOfExchange";
}

export class BoPaymentPriorities {
static bopp_Priority_1 = "bopp_Priority_1";
static bopp_Priority_2 = "bopp_Priority_2";
static bopp_Priority_3 = "bopp_Priority_3";
static bopp_Priority_4 = "bopp_Priority_4";
static bopp_Priority_5 = "bopp_Priority_5";
static bopp_Priority_6 = "bopp_Priority_6";
}

export class BoPaymentTypeEnum {
static boptIncoming = "boptIncoming";
static boptOutgoing = "boptOutgoing";
}

export class BoPaymentsObjectType {
static bopot_IncomingPayments = "bopot_IncomingPayments";
static bopot_OutgoingPayments = "bopot_OutgoingPayments";
}

export class BoPermission {
static boper_Full = "boper_Full";
static boper_ReadOnly = "boper_ReadOnly";
static boper_None = "boper_None";
static boper_Various = "boper_Various";
static boper_Undefined = "boper_Undefined";
}

export class BoPickStatus {
static ps_Released = "ps_Released";
static ps_Picked = "ps_Picked";
static ps_PartiallyPicked = "ps_PartiallyPicked";
static ps_PartiallyDelivered = "ps_PartiallyDelivered";
static ps_Closed = "ps_Closed";
}

export class BoPictureSizeEnum {
static rlpsOriginalSize = "rlpsOriginalSize";
static rlpsFitFieldSizeNonProportionally = "rlpsFitFieldSizeNonProportionally";
static rlpsFitFieldSizeProportionally = "rlpsFitFieldSizeProportionally";
static rlpsFitFieldHeight = "rlpsFitFieldHeight";
static rlpsFitFieldWidth = "rlpsFitFieldWidth";
}

export class BoPlanningSystem {
static bop_MRP = "bop_MRP";
static bop_None = "bop_None";
}

export class BoPriceListGroupNum {
static boplgn_Group1 = "boplgn_Group1";
static boplgn_Group2 = "boplgn_Group2";
static boplgn_Group3 = "boplgn_Group3";
static boplgn_Group4 = "boplgn_Group4";
}

export class BoPrintReceiptEnum {
static boprcAlways = "boprcAlways";
static boprcNo = "boprcNo";
static boprcOnlyWhenAdding = "boprcOnlyWhenAdding";
}

export class BoProcurementMethod {
static bom_Buy = "bom_Buy";
static bom_Make = "bom_Make";
}

export class BoProductSources {
static bps_PurchasedFromDomVendor = "bps_PurchasedFromDomVendor";
static bps_ImportedByCompany = "bps_ImportedByCompany";
static bps_ImportedGoodsPurchasedFromDomVendor = "bps_ImportedGoodsPurchasedFromDomVendor";
static bps_ProducedByCompany = "bps_ProducedByCompany";
}

export class BoProductionOrderOriginEnum {
static bopooManual = "bopooManual";
static bopooMRP = "bopooMRP";
static bopooSalesOrder = "bopooSalesOrder";
}

export class BoProductionOrderStatusEnum {
static boposPlanned = "boposPlanned";
static boposReleased = "boposReleased";
static boposClosed = "boposClosed";
static boposCancelled = "boposCancelled";
}

export class BoProductionOrderTypeEnum {
static bopotStandard = "bopotStandard";
static bopotSpecial = "bopotSpecial";
static bopotDisassembly = "bopotDisassembly";
}

export class BoQueryTypeEnum {
static qtRegular = "qtRegular";
static qtWizard = "qtWizard";
}

export class BoRcptCredTypes {
static cr_Regular = "cr_Regular";
static cr_Telephone = "cr_Telephone";
static cr_InternetTransaction = "cr_InternetTransaction";
}

export class BoRcptInvTypes {
static it_AllTransactions = "it_AllTransactions";
static it_OpeningBalance = "it_OpeningBalance";
static it_ClosingBalance = "it_ClosingBalance";
static it_Invoice = "it_Invoice";
static it_CredItnote = "it_CredItnote";
static it_TaxInvoice = "it_TaxInvoice";
static it_Return = "it_Return";
static it_PurchaseInvoice = "it_PurchaseInvoice";
static it_PurchaseCreditNote = "it_PurchaseCreditNote";
static it_PurchaseDeliveryNote = "it_PurchaseDeliveryNote";
static it_PurchaseReturn = "it_PurchaseReturn";
static it_Receipt = "it_Receipt";
static it_Deposit = "it_Deposit";
static it_JournalEntry = "it_JournalEntry";
static it_PaymentAdvice = "it_PaymentAdvice";
static it_ChequesForPayment = "it_ChequesForPayment";
static it_StockReconciliations = "it_StockReconciliations";
static it_GeneralReceiptToStock = "it_GeneralReceiptToStock";
static it_GeneralReleaseFromStock = "it_GeneralReleaseFromStock";
static it_TransferBetweenWarehouses = "it_TransferBetweenWarehouses";
static it_WorkInstructions = "it_WorkInstructions";
static it_DeferredDeposit = "it_DeferredDeposit";
static it_CorrectionInvoice = "it_CorrectionInvoice";
static it_APCorrectionInvoice = "it_APCorrectionInvoice";
static it_ARCorrectionInvoice = "it_ARCorrectionInvoice";
static it_DownPayment = "it_DownPayment";
static it_PurchaseDownPayment = "it_PurchaseDownPayment";
}

export class BoRcptTypes {
static rCustomer = "rCustomer";
static rAccount = "rAccount";
static rSupplier = "rSupplier";
}

export class BoRemindUnits {
static reu_Days = "reu_Days";
static reu_Weeks = "reu_Weeks";
static reu_Month = "reu_Month";
}

export class BoReportLayoutItemTypeEnum {
static rlitPageHeader = "rlitPageHeader";
static rlitStartOfReport = "rlitStartOfReport";
static rlitRepetitiveAreaHeader = "rlitRepetitiveAreaHeader";
static rlitRepetitiveArea = "rlitRepetitiveArea";
static rlitRepetitiveAreaFooter = "rlitRepetitiveAreaFooter";
static rlitEndOfReport = "rlitEndOfReport";
static rlitPageFooter = "rlitPageFooter";
static rlitTextField = "rlitTextField";
static rlitPictureField = "rlitPictureField";
static rlitUserField = "rlitUserField";
}

export class BoResolutionUnits {
static rsu_Days = "rsu_Days";
static rsu_Hours = "rsu_Hours";
}

export class BoResponseUnit {
static boru_Day = "boru_Day";
static boru_Hour = "boru_Hour";
}

export class BoRoleInTeam {
static borit_Leader = "borit_Leader";
static borit_Member = "borit_Member";
}

export class BoRoundingMethod {
static borm_FixedEnding = "borm_FixedEnding";
static borm_FixedInterval = "borm_FixedInterval";
static borm_NoRounding = "borm_NoRounding";
static borm_RoundToFullAmount = "borm_RoundToFullAmount";
static borm_RoundToFullDecAmount = "borm_RoundToFullDecAmount";
static borm_RoundToFullTensAmount = "borm_RoundToFullTensAmount";
}

export class BoRoundingRule {
static borrRoundDown = "borrRoundDown";
static borrRoundOff = "borrRoundOff";
static borrRoundUp = "borrRoundUp";
}

export class BoSalaryCostUnits {
static scu_Hour = "scu_Hour";
static scu_Day = "scu_Day";
static scu_Week = "scu_Week";
static scu_Month = "scu_Month";
static scu_Year = "scu_Year";
static scu_Semimonthly = "scu_Semimonthly";
static scu_Biweekly = "scu_Biweekly";
}

export class BoSerialNumberStatus {
static sns_Active = "sns_Active";
static sns_InLab = "sns_InLab";
static sns_Loaned = "sns_Loaned";
static sns_Returned = "sns_Returned";
static sns_Terminated = "sns_Terminated";
}

export class BoSeriesGroupEnum {
static sg_Group1 = "sg_Group1";
static sg_Group2 = "sg_Group2";
static sg_Group3 = "sg_Group3";
static sg_Group4 = "sg_Group4";
static sg_Group5 = "sg_Group5";
static sg_Group6 = "sg_Group6";
static sg_Group7 = "sg_Group7";
static sg_Group8 = "sg_Group8";
static sg_Group9 = "sg_Group9";
static sg_Group10 = "sg_Group10";
}

export class BoSeriesTypeEnum {
static stDocument = "stDocument";
static stBusinessPartner = "stBusinessPartner";
static stItem = "stItem";
static stResource = "stResource";
}

export class BoServicePaymentMethods {
static spmAccreditedToBankAccount = "spmAccreditedToBankAccount";
static spmBankTransfer = "spmBankTransfer";
static spmOther = "spmOther";
}

export class BoServiceSupplyMethods {
static ssmImmediate = "ssmImmediate";
static ssmToMoreResumptions = "ssmToMoreResumptions";
}

export class BoServiceTypes {
static bst_Regular = "bst_Regular";
static bst_Warranty = "bst_Warranty";
}

export class BoSoClosedInTypes {
static sos_Months = "sos_Months";
static sos_Weeks = "sos_Weeks";
static sos_Days = "sos_Days";
}

export class BoSoOsStatus {
static sos_Open = "sos_Open";
static sos_Missed = "sos_Missed";
static sos_Sold = "sos_Sold";
}

export class BoSoStatus {
static so_Open = "so_Open";
static so_Closed = "so_Closed";
}

export class BoSortTypeEnum {
static rlstAlpha = "rlstAlpha";
static rlstNumeric = "rlstNumeric";
static rlstMoney = "rlstMoney";
static rlstDate = "rlstDate";
}

export class BoStatus {
static bost_Open = "bost_Open";
static bost_Close = "bost_Close";
static bost_Paid = "bost_Paid";
static bost_Delivered = "bost_Delivered";
}

export class BoStckTrnDir {
static bos_TransferToTechnician = "bos_TransferToTechnician";
static bos_TransferFromTechnician = "bos_TransferFromTechnician";
}

export class BoSubPeriodTypeEnum {
static spt_Year = "spt_Year";
static spt_Quarters = "spt_Quarters";
static spt_Months = "spt_Months";
static spt_Days = "spt_Days";
}

export class BoSvcCallPriorities {
static scp_Low = "scp_Low";
static scp_Medium = "scp_Medium";
static scp_High = "scp_High";
}

export class BoSvcContractStatus {
static scs_Approved = "scs_Approved";
static scs_Frozen = "scs_Frozen";
static scs_Draft = "scs_Draft";
static scs_Terminated = "scs_Terminated";
}

export class BoSvcEpxDocTypes {
static edt_Invoice = "edt_Invoice";
static edt_Delivery = "edt_Delivery";
static edt_Return = "edt_Return";
static edt_StockTransfer = "edt_StockTransfer";
static edt_CreditMemo = "edt_CreditMemo";
static edt_Order = "edt_Order";
static edt_Quotation = "edt_Quotation";
static edt_AP_Invoice = "edt_AP_Invoice";
static edt_GoodsReceipt = "edt_GoodsReceipt";
static edt_GoodsReturn = "edt_GoodsReturn";
static edt_PurchaseOrder = "edt_PurchaseOrder";
static edt_PurchaseQuotation = "edt_PurchaseQuotation";
static edt_AR_CorrectionInvoice = "edt_AR_CorrectionInvoice";
static edt_AP_CorrectionInvoice = "edt_AP_CorrectionInvoice";
}

export class BoSvcExpPartTypes {
static sep_Inventory = "sep_Inventory";
static sep_NonInventory = "sep_NonInventory";
}

export class BoTCDConditionEnum {
static tcdcNone = "tcdcNone";
static tcdcFederalTaxID = "tcdcFederalTaxID";
static tcdcShipToAddress = "tcdcShipToAddress";
static tcdcShipToStreePOBox = "tcdcShipToStreePOBox";
static tcdcShipToCity = "tcdcShipToCity";
static tcdcShipToZipCode = "tcdcShipToZipCode";
static tcdcShipToCounty = "tcdcShipToCounty";
static tcdcShipToState = "tcdcShipToState";
static tcdcShipToCountry = "tcdcShipToCountry";
static tcdcItem = "tcdcItem";
static tcdcItemGroup = "tcdcItemGroup";
static tcdcBusinessPartner = "tcdcBusinessPartner";
static tcdcCustomerGroup = "tcdcCustomerGroup";
static tcdcVendorGroup = "tcdcVendorGroup";
static tcdcWarehouse = "tcdcWarehouse";
static tcdcGLAccount = "tcdcGLAccount";
static tcdcCustomerEquTax = "tcdcCustomerEquTax";
static tcdcTaxStatus = "tcdcTaxStatus";
static tcdcFreight = "tcdcFreight";
static tcdcUDF = "tcdcUDF";
static tcdcBranchNumber = "tcdcBranchNumber";
}

export class BoTCDDocumentTypeEnum {
static tcddtItem = "tcddtItem";
static tcddtService = "tcddtService";
static tcddtItemAndService = "tcddtItemAndService";
}

export class BoTaxInvoiceTypes {
static botit_AlterationCorrectionInvoice = "botit_AlterationCorrectionInvoice";
static botit_AlterationInvoice = "botit_AlterationInvoice";
static botit_CorrectionInvoice = "botit_CorrectionInvoice";
static botit_Invoice = "botit_Invoice";
static botit_JournalEntry = "botit_JournalEntry";
static botit_Payment = "botit_Payment";
}

export class BoTaxPostAccEnum {
static tpa_Default = "tpa_Default";
static tpa_SalesTaxAccount = "tpa_SalesTaxAccount";
static tpa_PurchaseTaxAccount = "tpa_PurchaseTaxAccount";
}

export class BoTaxRoundingRuleTypes {
static trr_RoundDown = "trr_RoundDown";
static trr_RoundUp = "trr_RoundUp";
static trr_RoundOff = "trr_RoundOff";
static trr_CompanyDefault = "trr_CompanyDefault";
}

export class BoTaxTypes {
static tt_Yes = "tt_Yes";
static tt_No = "tt_No";
static tt_UseTax = "tt_UseTax";
static tt_OffsetTax = "tt_OffsetTax";
}

export class BoTimeTemplate {
static tt_24H = "tt_24H";
static tt_12H = "tt_12H";
}

export class BoTransactionTypeEnum {
static botrntComplete = "botrntComplete";
static botrntReject = "botrntReject";
}

export class BoUDOObjType {
static boud_Document = "boud_Document";
static boud_MasterData = "boud_MasterData";
}

export class BoUPTOptions {
static bou_FullNone = "bou_FullNone";
static bou_FullReadNone = "bou_FullReadNone";
}

export class BoUTBTableType {
static bott_Document = "bott_Document";
static bott_DocumentLines = "bott_DocumentLines";
static bott_MasterData = "bott_MasterData";
static bott_MasterDataLines = "bott_MasterDataLines";
static bott_NoObject = "bott_NoObject";
static bott_NoObjectAutoIncrement = "bott_NoObjectAutoIncrement";
}

export class BoUniqueSerialNumber {
static usn_None = "usn_None";
static usn_MfrSerialNumber = "usn_MfrSerialNumber";
static usn_SerialNumber = "usn_SerialNumber";
static usn_LotNumber = "usn_LotNumber";
}

export class BoUserGroup {
static ug_Regular = "ug_Regular";
static ug_Deleted = "ug_Deleted";
}

export class BoVatCategoryEnum {
static bovcInputTax = "bovcInputTax";
static bovcOutputTax = "bovcOutputTax";
}

export class BoVatStatus {
static vExempted = "vExempted";
static vLiable = "vLiable";
static vEC = "vEC";
}

export class BoVerticalAlignmentEnum {
static rlvaTop = "rlvaTop";
static rlvaBottom = "rlvaBottom";
static rlvaCentralized = "rlvaCentralized";
}

export class BoWorkOrderStat {
static wk_ProductComplete = "wk_ProductComplete";
static wk_WorkInstruction = "wk_WorkInstruction";
static wk_WorkOrder = "wk_WorkOrder";
}

export class BoYesNoEnum {
static tNO = "tNO";
static tYES = "tYES";
}

export class BrazilMultiIndexerTypes {
static bmitInvalid = "bmitInvalid";
static bmitIncomeNature = "bmitIncomeNature";
}

export class BrazilNumericIndexerTypes {
static bnitInvalid = "bnitInvalid";
static bnitBeverageCommercialBrand = "bnitBeverageCommercialBrand";
static bnitFuelGroup = "bnitFuelGroup";
static bnitNatureOfCompany = "bnitNatureOfCompany";
static bnitEconomicActivityType = "bnitEconomicActivityType";
static bnitCooperativeAssociationType = "bnitCooperativeAssociationType";
static bnitProfitTaxation = "bnitProfitTaxation";
static bnitCompanyQualification = "bnitCompanyQualification";
static bnitDeclarerType = "bnitDeclarerType";
static bnitEnvironmentType = "bnitEnvironmentType";
static bnitTributaryType = "bnitTributaryType";
static bnitTributaryRegimeCode = "bnitTributaryRegimeCode";
static bnitIncomeNatureTable = "bnitIncomeNatureTable";
static bnitIncomeNatureCode = "bnitIncomeNatureCode";
static bnitExportationDocumentType = "bnitExportationDocumentType";
static bnitExportationNature = "bnitExportationNature";
static bnitLadingBillType = "bnitLadingBillType";
}

export class BrazilStringIndexerTypes {
static bsitInvalid = "bsitInvalid";
static bsitBeverageTable = "bsitBeverageTable";
static bsitNatureOfCalculationBase = "bsitNatureOfCalculationBase";
static bsitCreditOrigin = "bsitCreditOrigin";
static bsitBeverageGroup = "bsitBeverageGroup";
static bsitCreditContributionOrigin = "bsitCreditContributionOrigin";
static bsitIPIPeriod = "bsitIPIPeriod";
static bsitSPEDProfile = "bsitSPEDProfile";
static bsitImportationDocumentType = "bsitImportationDocumentType";
static bsitReferentialAccountCode = "bsitReferentialAccountCode";
}

export class CalculateInterestMethodEnum {
static cimOnRemainingAmount = "cimOnRemainingAmount";
static cimOnOriginalSum = "cimOnOriginalSum";
}

export class CalculationBaseEnum {
static cbYearly = "cbYearly";
static cbMonthly = "cbMonthly";
}

export class CallMessageStatusEnum {
static cmsUnread = "cmsUnread";
static cmsRead = "cmsRead";
}

export class CallMessageTypeEnum {
static cmtInformation = "cmtInformation";
static cmtWarning = "cmtWarning";
static cmtError = "cmtError";
}

export class CampaignAssignToEnum {
static catUser = "catUser";
static catEmployee = "catEmployee";
}

export class CampaignBPStatusEnum {
static cbpsActive = "cbpsActive";
static cbpsInactive = "cbpsInactive";
}

export class CampaignItemTypeEnum {
static citItems = "citItems";
static citLabel = "citLabel";
static citTravel = "citTravel";
}

export class CampaignStatusEnum {
static csOpen = "csOpen";
static csFinished = "csFinished";
static csCanceled = "csCanceled";
}

export class CampaignTypeEnum {
static ctEmail = "ctEmail";
static ctMail = "ctMail";
static ctFax = "ctFax";
static ctPhoneCall = "ctPhoneCall";
static ctMeeting = "ctMeeting";
static ctSMS = "ctSMS";
static ctWeb = "ctWeb";
static ctOthers = "ctOthers";
}

export class CancelStatusEnum {
static csYes = "csYes";
static csNo = "csNo";
static csCancellation = "csCancellation";
}

export class ClosingOptionEnum {
static coByCurrentSystemDate = "coByCurrentSystemDate";
static coByOriginalDocumentDate = "coByOriginalDocumentDate";
static coBySpecifiedDate = "coBySpecifiedDate";
}

export class ContractSequenceEnum {
static cs_Monthly = "cs_Monthly";
static cs_Quarterly = "cs_Quarterly";
static cs_SemiAnnually = "cs_SemiAnnually";
static cs_Yearly = "cs_Yearly";
}

export class CounterTypeEnum {
static ctUser = "ctUser";
static ctEmployee = "ctEmployee";
}

export class CountingDocumentStatusEnum {
static cdsOpen = "cdsOpen";
static cdsClosed = "cdsClosed";
}

export class CountingLineStatusEnum {
static clsOpen = "clsOpen";
static clsClosed = "clsClosed";
}

export class CountingTypeEnum {
static ctSingleCounter = "ctSingleCounter";
static ctMultipleCounters = "ctMultipleCounters";
}

export class CreateMethodEnum {
static cmManual = "cmManual";
static cmAutomatic = "cmAutomatic";
}

export class CurrenciesDecimalsEnum {
static cd1Digit = "cd1Digit";
static cd2Digits = "cd2Digits";
static cd3Digits = "cd3Digits";
static cd4Digits = "cd4Digits";
static cd5Digits = "cd5Digits";
static cd6Digits = "cd6Digits";
static cdDefault = "cdDefault";
static cdWithoutDecimals = "cdWithoutDecimals";
}

export class CycleCountDeterminationCycleByEnum {
static ccdcbItemGroup = "ccdcbItemGroup";
static ccdcbWarehouseSublevel1 = "ccdcbWarehouseSublevel1";
static ccdcbWarehouseSublevel2 = "ccdcbWarehouseSublevel2";
static ccdcbWarehouseSublevel3 = "ccdcbWarehouseSublevel3";
static ccdcbWarehouseSublevel4 = "ccdcbWarehouseSublevel4";
}

export class DepreciationCalculationBaseEnum {
static dcbAcquisitionValue = "dcbAcquisitionValue";
static dcbNetBookValue = "dcbNetBookValue";
}

export class DepreciationMethodEnum {
static dmNoDepreciation = "dmNoDepreciation";
static dmStraightLine = "dmStraightLine";
static dmStraightLinePeriodControl = "dmStraightLinePeriodControl";
static dmDecliningBalance = "dmDecliningBalance";
static dmMultilevel = "dmMultilevel";
static dmImmediateWriteOff = "dmImmediateWriteOff";
static dmSpecialDepreciation = "dmSpecialDepreciation";
static dmManualDepreciation = "dmManualDepreciation";
static dmAccelerated = "dmAccelerated";
}

export class DirectDebitTypeEnum {
static ddtCORE = "ddtCORE";
static ddtB2B = "ddtB2B";
static ddtCOR1 = "ddtCOR1";
}

export class DiscountGroupBaseObjectEnum {
static dgboNone = "dgboNone";
static dgboItemGroups = "dgboItemGroups";
static dgboItemProperties = "dgboItemProperties";
static dgboManufacturer = "dgboManufacturer";
static dgboItems = "dgboItems";
}

export class DiscountGroupDiscountTypeEnum {
static dgdt_Fixed = "dgdt_Fixed";
static dgdt_Variable = "dgdt_Variable";
}

export class DiscountGroupRelationsEnum {
static dgrLowestDiscount = "dgrLowestDiscount";
static dgrHighestDiscount = "dgrHighestDiscount";
static dgrAverageDiscount = "dgrAverageDiscount";
static dgrDiscountTotals = "dgrDiscountTotals";
static dgrMultipliedDiscount = "dgrMultipliedDiscount";
}

export class DiscountGroupTypeEnum {
static dgt_AllBPs = "dgt_AllBPs";
static dgt_CustomerGroup = "dgt_CustomerGroup";
static dgt_VendorGroup = "dgt_VendorGroup";
static dgt_SpecificBP = "dgt_SpecificBP";
}

export class DocumentAuthorizationStatusEnum {
static dasWithout = "dasWithout";
static dasPending = "dasPending";
static dasApproved = "dasApproved";
static dasRejected = "dasRejected";
static dasGenerated = "dasGenerated";
static dasGeneratedbyAuthorizer = "dasGeneratedbyAuthorizer";
static dasCancelled = "dasCancelled";
}

export class DocumentDeliveryTypeEnum {
static ddtNoneSeleted = "ddtNoneSeleted";
static ddtCreateOnlineDocument = "ddtCreateOnlineDocument";
static ddtPostToAribaNetwork = "ddtPostToAribaNetwork";
}

export class DomesticBankAccountValidationEnum {
static dbavNone = "dbavNone";
static dbavBelgium = "dbavBelgium";
static dbavSpain = "dbavSpain";
static dbavFrance = "dbavFrance";
static dbavItaly = "dbavItaly";
static dbavNetherlands = "dbavNetherlands";
static dbavPortugal = "dbavPortugal";
}

export class DownPaymentTypeEnum {
static dptRequest = "dptRequest";
static dptInvoice = "dptInvoice";
}

export class DrawingMethodEnum {
static dmAll = "dmAll";
static dmNone = "dmNone";
static dmQuantity = "dmQuantity";
static dmTotal = "dmTotal";
}

export class DueDateTypesEnum {
static ddtAfterTimePeriod = "ddtAfterTimePeriod";
static ddtByDates = "ddtByDates";
}

export class DunningLetterTypeEnum {
static dltDunningLetter1 = "dltDunningLetter1";
static dltDunningLetter2 = "dltDunningLetter2";
static dltDunningLetter3 = "dltDunningLetter3";
static dltDunningLetter4 = "dltDunningLetter4";
static dltDunningLetter5 = "dltDunningLetter5";
static dltDunningLetter6 = "dltDunningLetter6";
static dltDunningLetter7 = "dltDunningLetter7";
static dltDunningLetter8 = "dltDunningLetter8";
static dltDunningLetter9 = "dltDunningLetter9";
static dltDunningLetter10 = "dltDunningLetter10";
static dltDunningALL = "dltDunningALL";
}

export class ECDPostingTypeEnum {
static ecdNormal = "ecdNormal";
static ecdStatement = "ecdStatement";
}

export class EDocGenerationTypeEnum {
static edocGenerate = "edocGenerate";
static edocGenerateLater = "edocGenerateLater";
static edocNotRelevant = "edocNotRelevant";
}

export class EDocStatusEnum {
static edoc_New = "edoc_New";
static edoc_Pending = "edoc_Pending";
static edoc_Sent = "edoc_Sent";
static edoc_Error = "edoc_Error";
static edoc_Ok = "edoc_Ok";
}

export class EcmActionLogTypeEnum {
static altSend = "altSend";
static altReceive = "altReceive";
static altImport = "altImport";
static altNote = "altNote";
static altWarning = "altWarning";
static altError = "altError";
}

export class EcmActionPeriodTypeEnum {
static aptYear = "aptYear";
static aptQuarter = "aptQuarter";
static aptMonth = "aptMonth";
static aptDateRange = "aptDateRange";
}

export class EcmActionStatusEnum {
static lasNone = "lasNone";
static lasNew = "lasNew";
static lasPending = "lasPending";
static lasError = "lasError";
static lasOK = "lasOK";
static lasSent = "lasSent";
static lasDocError = "lasDocError";
static lasWaiting = "lasWaiting";
static lasAuthorized = "lasAuthorized";
static lasInProcess = "lasInProcess";
static lasRejected = "lasRejected";
static lasDenied = "lasDenied";
static lasCanceled = "lasCanceled";
static lasAborted = "lasAborted";
static lasQueued = "lasQueued";
}

export class EcmActionTypeEnum {
static latNone = "latNone";
static latSetup = "latSetup";
static latReport = "latReport";
static latDocumentAR = "latDocumentAR";
static latDocumentAP = "latDocumentAP";
static latDraft = "latDraft";
static latOther = "latOther";
static latSkip = "latSkip";
static latContingency = "latContingency";
static latBpCheck = "latBpCheck";
}

export class ElecCommStatusEnum {
static ecsApproved = "ecsApproved";
static ecsPendingApproval = "ecsPendingApproval";
static ecsRejected = "ecsRejected";
}

export class EmployeeExemptionUnitEnum {
static eeu_None = "eeu_None";
static eeu_Yearly = "eeu_Yearly";
static eeu_Monthly = "eeu_Monthly";
static eeu_Weekly = "eeu_Weekly";
static eeu_Daily = "eeu_Daily";
}

export class EmployeePaymentMethodEnum {
static epm_None = "epm_None";
static epm_BankTransfer = "epm_BankTransfer";
}

export class EmployeeTransferProcessingStatusEnum {
static etps_New = "etps_New";
static etps_Sent = "etps_Sent";
static etps_Accepted = "etps_Accepted";
static etps_Error = "etps_Error";
}

export class EmployeeTransferStatusEnum {
static ets_New = "ets_New";
static ets_Processing = "ets_Processing";
static ets_Sent = "ets_Sent";
static ets_Received = "ets_Received";
static ets_Accepted = "ets_Accepted";
static ets_Error = "ets_Error";
}

export class EndTypeEnum {
static etNoEndDate = "etNoEndDate";
static etByCounter = "etByCounter";
static etByDate = "etByDate";
}

export class ExchangeRateSelectEnum {
static ierFromInovice = "ierFromInovice";
static ierCurrentRate = "ierCurrentRate";
}

export class ExternalCallStatusEnum {
static ecsNew = "ecsNew";
static ecsInProcess = "ecsInProcess";
static ecsCompleted = "ecsCompleted";
static ecsConfirmed = "ecsConfirmed";
static ecsFailed = "ecsFailed";
}

export class FolioLetterEnum {
static fLetterA = "fLetterA";
static fLetterB = "fLetterB";
static fLetterC = "fLetterC";
static fLetterE = "fLetterE";
static fLetterM = "fLetterM";
static fLetterR = "fLetterR";
}

export class FreightTypeEnum {
static ftShipping = "ftShipping";
static ftInsurance = "ftInsurance";
static ftOther = "ftOther";
static ftSpecial = "ftSpecial";
}

export class GTSResponseToExceedingEnum {
static Block = "Block";
static Split = "Split";
}

export class GeneratedAssetStatusEnum {
static gasOpen = "gasOpen";
static gasClosed = "gasClosed";
}

export class GetGLAccountByEnum {
static gglab_General = "gglab_General";
static gglab_Warehouse = "gglab_Warehouse";
static gglab_ItemGroup = "gglab_ItemGroup";
}

export class GovPayCodePeriodicityEnum {
static gpcpMonth = "gpcpMonth";
static gpcpQuarter = "gpcpQuarter";
static gpcpHalfMonth = "gpcpHalfMonth";
static gpcpTenDays = "gpcpTenDays";
}

export class GovPayCodeSPEDCategoryEnum {
static gpcscICMS = "gpcscICMS";
static gpcscICMSST = "gpcscICMSST";
static gpcscIPI = "gpcscIPI";
static gpcscISS = "gpcscISS";
static gpcscPIS = "gpcscPIS";
static gpcscCOFINS = "gpcscCOFINS";
static gpcsPISST = "gpcsPISST";
static gpcsCONFINSST = "gpcsCONFINSST";
}

export class GroupingMethodEnum {
static gmPerInvoice = "gmPerInvoice";
static gmPerDunningLevel = "gmPerDunningLevel";
static gmPerBP = "gmPerBP";
}

export class InstallmentPaymentsPossiblityEnum {
static ippCr = "ippCr";
static ippNo = "ippNo";
static ippRd = "ippRd";
static ippYes = "ippYes";
}

export class IntrastatConfigurationEnum {
static enAdditionalMeasureUnit = "enAdditionalMeasureUnit";
static enCommodityCodes = "enCommodityCodes";
static enCustomProcedures = "enCustomProcedures";
static enIncoterms = "enIncoterms";
static enNatureOfTransactions = "enNatureOfTransactions";
static enPortsOfEntryAndExit = "enPortsOfEntryAndExit";
static enServiceCodes = "enServiceCodes";
static enStatisticalProcedures = "enStatisticalProcedures";
static enTransportModes = "enTransportModes";
static enRegions = "enRegions";
}

export class InvBaseDocTypeEnum {
static Default = "Default";
static Empty = "Empty";
static PurchaseDeliveryNotes = "PurchaseDeliveryNotes";
static InventoryGeneralEntry = "InventoryGeneralEntry";
static WarehouseTransfers = "WarehouseTransfers";
static InventoryTransferRequest = "InventoryTransferRequest";
}

export class InventoryAccountTypeEnum {
static iatExpenses = "iatExpenses";
static iatRevenues = "iatRevenues";
static iatExemptIncome = "iatExemptIncome";
static iatInventory = "iatInventory";
static iatCost = "iatCost";
static iatTransfer = "iatTransfer";
static iatVarience = "iatVarience";
static iatPriceDifference = "iatPriceDifference";
static iatNegativeInventoryAdjustment = "iatNegativeInventoryAdjustment";
static iatDecreasing = "iatDecreasing";
static iatIncreasing = "iatIncreasing";
static iatReturning = "iatReturning";
static iatEURevenues = "iatEURevenues";
static iatEUExpenses = "iatEUExpenses";
static iatForeignRevenue = "iatForeignRevenue";
static iatForeignExpens = "iatForeignExpens";
static iatPurchase = "iatPurchase";
static iatPAReturn = "iatPAReturn";
static iatPurchaseOffset = "iatPurchaseOffset";
static iatExchangeRateDifferences = "iatExchangeRateDifferences";
static iatGoodsClearing = "iatGoodsClearing";
static iatGLDecrease = "iatGLDecrease";
static iatGLIncrease = "iatGLIncrease";
static iatWip = "iatWip";
static iatWipVariance = "iatWipVariance";
static iatWipOffsetProfitAndLoss = "iatWipOffsetProfitAndLoss";
static iatInventoryOffsetProfitAndLoss = "iatInventoryOffsetProfitAndLoss";
static iatStockInflationAdjust = "iatStockInflationAdjust";
static iatStockInflationOffset = "iatStockInflationOffset";
static iatCostInflation = "iatCostInflation";
static iatCostInflationOffset = "iatCostInflationOffset";
static iatExpenseClearing = "iatExpenseClearing";
static iatExpenseOffsetting = "iatExpenseOffsetting";
static iatStockInTransit = "iatStockInTransit";
static iatShippedGoods = "iatShippedGoods";
static iatVATInRevenue = "iatVATInRevenue";
static iatSalesCredit = "iatSalesCredit";
static iatPurchaseCredit = "iatPurchaseCredit";
static iatExemptedCredits = "iatExemptedCredits";
static iatSalesCreditForeign = "iatSalesCreditForeign";
static iatForeignPurchaseCredit = "iatForeignPurchaseCredit";
static iatSalesCreditEU = "iatSalesCreditEU";
static iatEUPurchaseCredit = "iatEUPurchaseCredit";
static iatPurchaseBalance = "iatPurchaseBalance";
static iatWHIncomingCenvat = "iatWHIncomingCenvat";
static iatWHOutgoingCenvat = "iatWHOutgoingCenvat";
static iatFreeOfChargeSales = "iatFreeOfChargeSales";
static iatFreeOfChargePurchase = "iatFreeOfChargePurchase";
}

export class InventoryCycleTypeEnum {
static ictCylce = "ictCylce";
static ictMRP = "ictMRP";
}

export class InventoryOpeningBalancePriceSourceEnum {
static iobpsByPriceList = "iobpsByPriceList";
static iobpsLastEvaluatedPrice = "iobpsLastEvaluatedPrice";
static iobpsItemCost = "iobpsItemCost";
}

export class InventoryPostingCopyOptionEnum {
static ipcoNoCountersDiff = "ipcoNoCountersDiff";
static ipcoIndividual1CountedQuantity = "ipcoIndividual1CountedQuantity";
static ipcoIndividual2CountedQuantity = "ipcoIndividual2CountedQuantity";
static ipcoIndividual3CountedQuantity = "ipcoIndividual3CountedQuantity";
static ipcoIndividual4CountedQuantity = "ipcoIndividual4CountedQuantity";
static ipcoIndividual5CountedQuantity = "ipcoIndividual5CountedQuantity";
static ipcoTeamCountedQuantity = "ipcoTeamCountedQuantity";
}

export class InventoryPostingPriceSourceEnum {
static ippsByPriceList = "ippsByPriceList";
static ippsLastEvaluatedPrice = "ippsLastEvaluatedPrice";
static ippsItemCost = "ippsItemCost";
}

export class IssuePrimarilyByEnum {
static ipbSerialAndBatchNumbers = "ipbSerialAndBatchNumbers";
static ipbBinLocations = "ipbBinLocations";
}

export class ItemClassEnum {
static itcService = "itcService";
static itcMaterial = "itcMaterial";
}

export class ItemTypeEnum {
static itItems = "itItems";
static itLabor = "itLabor";
static itTravel = "itTravel";
static itFixedAssets = "itFixedAssets";
}

export class ItemUoMTypeEnum {
static iutPurchasing = "iutPurchasing";
static iutSales = "iutSales";
static iutInventory = "iutInventory";
}

export class KPITypeEnum {
static asSingle = "asSingle";
static asQuarterly = "asQuarterly";
static asMonthly = "asMonthly";
static asMultiple = "asMultiple";
}

export class LCCostTypeEnum {
static asFixedCosts = "asFixedCosts";
static asVariableCosts = "asVariableCosts";
}

export class LandedCostAllocationByEnum {
static asCashValueBeforeCustoms = "asCashValueBeforeCustoms";
static asCashValueAfterCustoms = "asCashValueAfterCustoms";
static asQuantity = "asQuantity";
static asWeight = "asWeight";
static asVolume = "asVolume";
static asEqual = "asEqual";
}

export class LandedCostBaseDocumentTypeEnum {
static asDefault = "asDefault";
static asEmpty = "asEmpty";
static asGoodsReceiptPO = "asGoodsReceiptPO";
static asLandedCosts = "asLandedCosts";
static asPurchaseInvoice = "asPurchaseInvoice";
}

export class LandedCostDocStatusEnum {
static lcOpen = "lcOpen";
static lcClosed = "lcClosed";
}

export class LegalDataLineTypeEnum {
static ldlt_DocumentTotal = "ldlt_DocumentTotal";
static ldlt_TaxPerLine = "ldlt_TaxPerLine";
static ldlt_TotalTax = "ldlt_TotalTax";
}

export class LicenseTypeEnum {
static lkIdirect = "lkIdirect";
static lkSOAIndirect = "lkSOAIndirect";
static lkSOA = "lkSOA";
static lkB1iIndirect = "lkB1iIndirect";
static lkB1i = "lkB1i";
}

export class LicenseUpdateTypeEnum {
static ultAssign = "ultAssign";
static ultRemove = "ultRemove";
}

export class LineStatusTypeEnum {
static lst_Open = "lst_Open";
static lst_Closed = "lst_Closed";
}

export class LineTypeEnum {
static ltDocument  = "ltDocument ";
static ltRounding = "ltRounding";
static ltVat = "ltVat";
}

export class LinkedDocTypeEnum {
static ldtEmptyLink = "ldtEmptyLink";
static ldtSalesOpportunitiesLink = "ldtSalesOpportunitiesLink";
static ldtSalesQuotationsLink = "ldtSalesQuotationsLink";
static ldtSalesOrdersLink = "ldtSalesOrdersLink";
static ldtDeliveriesLink = "ldtDeliveriesLink";
static ldtARInvoicesLink = "ldtARInvoicesLink";
}

export class MultipleCounterRoleEnum {
static mcrTeamCounter = "mcrTeamCounter";
static mcrIndividualCounter = "mcrIndividualCounter";
}

export class OperationCode347Enum {
static ocGoodsOrServiciesAcquisitions = "ocGoodsOrServiciesAcquisitions";
static ocPublicEntitiesAcquisitions = "ocPublicEntitiesAcquisitions";
static ocTravelAgenciesPurchases = "ocTravelAgenciesPurchases";
static ocSalesOrServicesRevenues = "ocSalesOrServicesRevenues";
static ocPublicSubsidies = "ocPublicSubsidies";
static ocTravelAgenciesSales = "ocTravelAgenciesSales";
}

export class OperationCodeTypeEnum {
static octSummaryInvoicesEntry = "octSummaryInvoicesEntry";
static octSummaryReceiptsEntry = "octSummaryReceiptsEntry";
static octInvoicewithSeveralVATRates = "octInvoicewithSeveralVATRates";
static octCorrectionInvoice = "octCorrectionInvoice";
static octDueVATPendingInvoiceIssuance = "octDueVATPendingInvoiceIssuance";
static octExpensesIncurredbyTravelAgentforCustomers = "octExpensesIncurredbyTravelAgentforCustomers";
static octSpecialRegulationforVATGroup = "octSpecialRegulationforVATGroup";
static octSpecialRegulationforGoldInvestment = "octSpecialRegulationforGoldInvestment";
static octReverseChargeProcedure = "octReverseChargeProcedure";
static octUnsummarizedReceipts = "octUnsummarizedReceipts";
static octIdentificationofErrorTransactions = "octIdentificationofErrorTransactions";
static octTransactionswithEntrepreneursIssuingReceiptsforAgriculturalCompensation = "octTransactionswithEntrepreneursIssuingReceiptsforAgriculturalCompensation";
static octServiceInvoicingbyTravelAgenciesonBehalfofThirdParties = "octServiceInvoicingbyTravelAgenciesonBehalfofThirdParties";
static octBusinessOfficeRental = "octBusinessOfficeRental";
static octSubsidies = "octSubsidies";
static octIncomingPaymentsforIndustrialandIntellectualPropertyRights = "octIncomingPaymentsforIndustrialandIntellectualPropertyRights";
static octInsuranceTransactions = "octInsuranceTransactions";
static octPurchasesfromTravelAgencies = "octPurchasesfromTravelAgencies";
static octTransactionsSubjecttoProductionServiceandImportTaxesinCeutaandMelilla = "octTransactionsSubjecttoProductionServiceandImportTaxesinCeutaandMelilla";
}

export class OpportunityTypeEnum {
static boOpSales = "boOpSales";
static boOpPurchasing = "boOpPurchasing";
}

export class PMDocumentTypeEnum {
static pmdt_ManualJournalEntry = "pmdt_ManualJournalEntry";
static pmdt_SalesQuotation = "pmdt_SalesQuotation";
static pmdt_SalesOrder = "pmdt_SalesOrder";
static pmdt_Delivery = "pmdt_Delivery";
static pmdt_Return = "pmdt_Return";
static pmdt_ARDownPaymentRequest = "pmdt_ARDownPaymentRequest";
static pmdt_ARDownPaymentInvoice = "pmdt_ARDownPaymentInvoice";
static pmdt_ARInvoice = "pmdt_ARInvoice";
static pmdt_ARCreditMemo = "pmdt_ARCreditMemo";
static pmdt_ARReserveInvoice = "pmdt_ARReserveInvoice";
static pmdt_PurchaseQuotation = "pmdt_PurchaseQuotation";
static pmdt_PurchaseOrder = "pmdt_PurchaseOrder";
static pmdt_GoodsReceiptPO = "pmdt_GoodsReceiptPO";
static pmdt_GoodsReturn = "pmdt_GoodsReturn";
static pmdt_APDownPaymentRequest = "pmdt_APDownPaymentRequest";
static pmdt_APDownPaymentInvoice = "pmdt_APDownPaymentInvoice";
static pmdt_APInvoice = "pmdt_APInvoice";
static pmdt_APCreditMemo = "pmdt_APCreditMemo";
static pmdt_APReserveInvoice = "pmdt_APReserveInvoice";
static pmdt_ServiceCall = "pmdt_ServiceCall";
static pmdt_GoodsReceipt = "pmdt_GoodsReceipt";
static pmdt_GoodsIssue = "pmdt_GoodsIssue";
static pmdt_ARCorrectionInvoice = "pmdt_ARCorrectionInvoice";
static pmdt_ARCorrectionInvoiceReversal = "pmdt_ARCorrectionInvoiceReversal";
static pmdt_APCorrectionInvoice = "pmdt_APCorrectionInvoice";
static pmdt_APCorrectionInvoiceReversal = "pmdt_APCorrectionInvoiceReversal";
}

export class PaymentInvoiceTypeEnum {
static itARInvoice = "itARInvoice";
static itARDownPaymentInvoice = "itARDownPaymentInvoice";
}

export class PaymentMeansTypeEnum {
static pmtNotAssigned = "pmtNotAssigned";
static pmtChecks = "pmtChecks";
static pmtBankTransfer = "pmtBankTransfer";
static pmtCash = "pmtCash";
static pmtCreditCard = "pmtCreditCard";
}

export class PaymentRunExportRowTypeEnum {
static prtGeneral = "prtGeneral";
static prtPayOnAccount = "prtPayOnAccount";
static prtPayToAccount = "prtPayToAccount";
}

export class PaymentsAuthorizationStatusEnum {
static pasWithout = "pasWithout";
static pasPending = "pasPending";
static pasApproved = "pasApproved";
static pasRejected = "pasRejected";
static pasGenerated = "pasGenerated";
static pasGeneratedbyAuthorizer = "pasGeneratedbyAuthorizer";
static pasCancelled = "pasCancelled";
}

export class PeriodStatusEnum {
static ltUnlocked = "ltUnlocked";
static ltUnlockedExceptSales = "ltUnlockedExceptSales";
static ltPeriodClosing = "ltPeriodClosing";
static ltLocked = "ltLocked";
}

export class PostingMethodEnum {
static pmGLAccountBankAccount = "pmGLAccountBankAccount";
static pmBussinessPartnerBankAccount = "pmBussinessPartnerBankAccount";
static pmInterimAccountBankAccount = "pmInterimAccountBankAccount";
static pmExternalReconciliation = "pmExternalReconciliation";
static pmIgnore = "pmIgnore";
}

export class PostingOfDepreciationEnum {
static podDirectPosting = "podDirectPosting";
static podIndirectPosting = "podIndirectPosting";
}

export class PriceProceedMethodEnum {
static ppmRemove = "ppmRemove";
static ppmUpdate = "ppmUpdate";
static ppmKeepCorresponding = "ppmKeepCorresponding";
static ppmKeepAll = "ppmKeepAll";
}

export class PrintOnEnum {
static poBlankPaper = "poBlankPaper";
static poDefault = "poDefault";
static poOverflowBlankPaper = "poOverflowBlankPaper";
static poOverflowCheckStock = "poOverflowCheckStock";
}

export class PrintStatusEnum {
static psNo = "psNo";
static psYes = "psYes";
static psAmended = "psAmended";
}

export class ProductionItemType {
static pit_Item = "pit_Item";
static pit_Resource = "pit_Resource";
static pit_Text = "pit_Text";
}

export class ProjectStatusTypeEnum {
static pst_Started = "pst_Started";
static pst_Paused = "pst_Paused";
static pst_Stopped = "pst_Stopped";
static pst_Finished = "pst_Finished";
static pst_Canceled = "pst_Canceled";
}

export class ProjectTypeEnum {
static pt_External = "pt_External";
static pt_Internal = "pt_Internal";
}

export class RclRecurringExecutionHandlingEnum {
static rehStopOnError = "rehStopOnError";
static rehSkipTransaction = "rehSkipTransaction";
}

export class RclRecurringTransactionStatusEnum {
static rtsNotExecuted = "rtsNotExecuted";
static rtsExecuted = "rtsExecuted";
static rtsRemoved = "rtsRemoved";
}

export class ReceivingBinLocationsMethodEnum {
static rblmBinLocationCodeOrder = "rblmBinLocationCodeOrder";
static rblmAlternativeSortCodeOrder = "rblmAlternativeSortCodeOrder";
}

export class ReceivingUpToMethodEnum {
static rutmBothMaxQtyAndWeight = "rutmBothMaxQtyAndWeight";
static rutmMaximumQty = "rutmMaximumQty";
static rutmMaximumWeight = "rutmMaximumWeight";
}

export class ReconciliationAccountTypeEnum {
static rat_GLAccount = "rat_GLAccount";
static rat_BusinessPartner = "rat_BusinessPartner";
}

export class RecurrenceDayOfWeekEnum {
static rdowDay = "rdowDay";
static rdowWeekDay = "rdowWeekDay";
static rdowWeekendDay = "rdowWeekendDay";
static rdowSun = "rdowSun";
static rdowMon = "rdowMon";
static rdowTue = "rdowTue";
static rdowWed = "rdowWed";
static rdowThu = "rdowThu";
static rdowFri = "rdowFri";
static rdowSat = "rdowSat";
}

export class RecurrencePatternEnum {
static rpNone = "rpNone";
static rpDaily = "rpDaily";
static rpWeekly = "rpWeekly";
static rpMonthly = "rpMonthly";
static rpAnnually = "rpAnnually";
}

export class RecurrenceSequenceEnum {
static rsFirst = "rsFirst";
static rsSecond = "rsSecond";
static rsThird = "rsThird";
static rsFourth = "rsFourth";
static rsLast = "rsLast";
}

export class RepeatOptionEnum {
static roByDate = "roByDate";
static roByWeekDay = "roByWeekDay";
}

export class Report349CodeListEnum {
static r349cA = "r349cA";
static r349cE = "r349cE";
static r349cEmpty = "r349cEmpty";
static r349cH = "r349cH";
static r349cI = "r349cI";
static r349cM = "r349cM";
static r349cS = "r349cS";
static r349cT = "r349cT";
}

export class ReportLayoutCategoryEnum {
static rlcPLD = "rlcPLD";
static rlcCrystal = "rlcCrystal";
static rlcLegalList = "rlcLegalList";
static rlcUserDefinedType = "rlcUserDefinedType";
}

export class ResidenceNumberTypeEnum {
static rntSpanishFiscalID = "rntSpanishFiscalID";
static rntVATRegistrationNumber = "rntVATRegistrationNumber";
static rntPassport = "rntPassport";
static rntFiscalIDIssuedbytheResidenceCountry = "rntFiscalIDIssuedbytheResidenceCountry";
static rntCertificateofFiscalResidence = "rntCertificateofFiscalResidence";
static rntOtherDocument = "rntOtherDocument";
}

export class ResourceAllocationEnum {
static raOnStartDate = "raOnStartDate";
static raOnEndDate = "raOnEndDate";
static raStartDateForwards = "raStartDateForwards";
static raEndDateBackwards = "raEndDateBackwards";
}

export class ResourceCapacityActionEnum {
static rcaUnknown = "rcaUnknown";
static rcaProductionOrderCreate = "rcaProductionOrderCreate";
static rcaProductionOrderClose = "rcaProductionOrderClose";
static rcaProductionOrderReschedule = "rcaProductionOrderReschedule";
static rcaProductionOrderAddLine = "rcaProductionOrderAddLine";
static rcaProductionOrderDeleteLine = "rcaProductionOrderDeleteLine";
static rcaProductionOrderUpdateLine = "rcaProductionOrderUpdateLine";
static rcaIssueForProductionCreate = "rcaIssueForProductionCreate";
static rcaReceiptFromProductionCreate = "rcaReceiptFromProductionCreate";
}

export class ResourceCapacityBaseTypeEnum {
static rcbtNone = "rcbtNone";
static rcbtProductionOrder = "rcbtProductionOrder";
}

export class ResourceCapacityMemoSourceEnum {
static rcmsUnknown = "rcmsUnknown";
static rcmsResourceCapacityForm = "rcmsResourceCapacityForm";
static rcmsSetDailyInternalCapacitiesForm = "rcmsSetDailyInternalCapacitiesForm";
}

export class ResourceCapacityOwningTypeEnum {
static rcotNone = "rcotNone";
static rcotProductionOrder = "rcotProductionOrder";
static rcotIssueForProduction = "rcotIssueForProduction";
static rcotReceiptFromProduction = "rcotReceiptFromProduction";
}

export class ResourceCapacityRevertedTypeEnum {
static rcrtNone = "rcrtNone";
static rcrtIssueForProduction = "rcrtIssueForProduction";
}

export class ResourceCapacitySourceTypeEnum {
static rcstNone = "rcstNone";
static rcstProductionOrder = "rcstProductionOrder";
static rcstIssueForProduction = "rcstIssueForProduction";
static rcstReceiptFromProduction = "rcstReceiptFromProduction";
}

export class ResourceCapacityTypeEnum {
static rctInternal = "rctInternal";
static rctOrdered = "rctOrdered";
static rctCommitted = "rctCommitted";
static rctConsumed = "rctConsumed";
}

export class ResourceDailyCapacityWeekdayEnum {
static rdcwFirst = "rdcwFirst";
static rdcwSecond = "rdcwSecond";
static rdcwThird = "rdcwThird";
static rdcwFourth = "rdcwFourth";
static rdcwFifth = "rdcwFifth";
static rdcwSixth = "rdcwSixth";
static rdcwSeventh = "rdcwSeventh";
}

export class ResourceIssueMethodEnum {
static rimBackflush = "rimBackflush";
static rimManual = "rimManual";
}

export class ResourceTypeEnum {
static rtMachine = "rtMachine";
static rtLabor = "rtLabor";
static rtOther = "rtOther";
}

export class RetirementMethodEnum {
static rmGross = "rmGross";
static rmNet = "rmNet";
}

export class RetirementPeriodControlEnum {
static rpcProRataTemporis = "rpcProRataTemporis";
static rpcHalfYearConvention = "rpcHalfYearConvention";
static rpcOnlyAfterEndOfUsefulLife = "rpcOnlyAfterEndOfUsefulLife";
}

export class RetirementProRataTypeEnum {
static rprtExactlyDailyBase = "rprtExactlyDailyBase";
static rprtLastDayOfPriorPeriod = "rprtLastDayOfPriorPeriod";
static rprtLastDayOfCurrentPeriod = "rprtLastDayOfCurrentPeriod";
}

export class ReturnTypeEnum {
static rt26Q = "rt26Q";
static rt27Q = "rt27Q";
}

export class RiskLevelTypeEnum {
static rlt_Low = "rlt_Low";
static rlt_Medium = "rlt_Medium";
static rlt_High = "rlt_High";
}

export class RoundingContextEnum {
static rcSum = "rcSum";
static rcPrice = "rcPrice";
static rcRate = "rcRate";
static rcQuantity = "rcQuantity";
static rcMeasure = "rcMeasure";
static rcPercent = "rcPercent";
static rcTax = "rcTax";
static rcTaxPerGroup = "rcTaxPerGroup";
static rcBudgetSum = "rcBudgetSum";
static rcPriceListSum = "rcPriceListSum";
static rcRealAmountInPayment = "rcRealAmountInPayment";
static rcStockSumRoundUp = "rcStockSumRoundUp";
static rcDocHeaderTotal = "rcDocHeaderTotal";
static rcVatReportAmount = "rcVatReportAmount";
static rcLineGrossTotal = "rcLineGrossTotal";
static rcExpenseTotal = "rcExpenseTotal";
static rcWTax = "rcWTax";
static rcBASCode = "rcBASCode";
static rcTaxForPrice = "rcTaxForPrice";
}

export class RoundingSysEnum {
static rsNoRounding = "rsNoRounding";
static rsRoundToFiveHundredth = "rsRoundToFiveHundredth";
static rsRoundToOne = "rsRoundToOne";
static rsRoundToTen = "rsRoundToTen";
static rsRoundToTenHundredth = "rsRoundToTenHundredth";
}

export class RoundingTypeEnum {
static rt_TruncatedAU = "rt_TruncatedAU";
static rt_CommercialValues = "rt_CommercialValues";
static rt_NoRounding = "rt_NoRounding";
}

export class SEPASequenceTypeEnum {
static sstOOFF = "sstOOFF";
static sstFRST = "sstFRST";
static sstRCUR = "sstRCUR";
static sstFNAL = "sstFNAL";
}

export class SPEDContabilAccountPurposeCode {
static spedContasDeAtivo = "spedContasDeAtivo";
static spedContasDePassivo = "spedContasDePassivo";
static spedPatrimonioLiquido = "spedPatrimonioLiquido";
static spedContasDeResultado = "spedContasDeResultado";
static spedContasDeCompensacao = "spedContasDeCompensacao";
static spedOutras = "spedOutras";
}

export class SPEDContabilQualificationCodeEnum {
static spedNA = "spedNA";
static spedDiretor = "spedDiretor";
static spedConselheiroDeAdministracao = "spedConselheiroDeAdministracao";
static spedAdministrador = "spedAdministrador";
static spedAdministradorDoGrupo = "spedAdministradorDoGrupo";
static spedAdministradorDeSociedadeFiliada = "spedAdministradorDeSociedadeFiliada";
static spedAdministradorJudicialPessoaFisica = "spedAdministradorJudicialPessoaFisica";
static spedAdministradorJudicialPessoaJuridicaProfissionalResponsavel = "spedAdministradorJudicialPessoaJuridicaProfissionalResponsavel";
static spedAdministradorJudicialGestor = "spedAdministradorJudicialGestor";
static spedGestorJudicial = "spedGestorJudicial";
static spedProcurador = "spedProcurador";
static spedInventariante = "spedInventariante";
static spedLiquidante = "spedLiquidante";
static spedInterventor = "spedInterventor";
static spedEmpresario = "spedEmpresario";
static spedContador = "spedContador";
static spedOutros = "spedOutros";
}

export class ServiceTypeEnum {
static srvcSales = "srvcSales";
static srvcPurchasing = "srvcPurchasing";
}

export class Services {
static MessagesService = "MessagesService";
static CompanyService = "CompanyService";
static SeriesService = "SeriesService";
static ReportLayoutsService = "ReportLayoutsService";
static FormPreferencesService = "FormPreferencesService";
static AccountsService = "AccountsService";
static BusinessPartnersService = "BusinessPartnersService";
}

export class ShaamGroupEnum {
static sgServicesAndAsset = "sgServicesAndAsset";
static sgAgriculturalProducts = "sgAgriculturalProducts";
static sgInsuranceCommissions = "sgInsuranceCommissions";
static sgWHTaxInstructions = "sgWHTaxInstructions";
static sgInterestExchangeRateDiffs = "sgInterestExchangeRateDiffs";
}

export class SortOrderEnum {
static soAscending = "soAscending";
static soDescending = "soDescending";
}

export class SourceCurrencyEnum {
static sc_PrimaryCurrency = "sc_PrimaryCurrency";
static sc_AdditionalCurrency1 = "sc_AdditionalCurrency1";
static sc_AdditionalCurrency2 = "sc_AdditionalCurrency2";
}

export class SpecialDepreciationCalculationMethodEnum {
static spcmAdditional = "spcmAdditional";
static spcmAlternative = "spcmAlternative";
}

export class SpecialDepreciationMaximumFlagEnum {
static spmfPercentage = "spmfPercentage";
static spmfAmount = "spmfAmount";
}

export class SpecialProductTypeEnum {
static sptMT = "sptMT";
static sptIO = "sptIO";
}

export class StageDepTypeEnum {
static sdt_Project = "sdt_Project";
static sdt_Subproject = "sdt_Subproject";
}

export class StockTransferAuthorizationStatusEnum {
static sasWithout = "sasWithout";
static sasPending = "sasPending";
static sasApproved = "sasApproved";
static sasRejected = "sasRejected";
static sasGenerated = "sasGenerated";
static sasGeneratedbyAuthorizer = "sasGeneratedbyAuthorizer";
static sasCancelled = "sasCancelled";
}

export class StraightLineCalculationMethodEnum {
static slcmAuquisitionValueDividedByTotalUsefulLife = "slcmAuquisitionValueDividedByTotalUsefulLife";
static slcmPercentageOfAcquisitionValue = "slcmPercentageOfAcquisitionValue";
static slcmNetBookValueDividedByRemainingLife = "slcmNetBookValueDividedByRemainingLife";
}

export class StraightLinePeriodControlDepreciationPeriodsEnum {
static slpcdpStandard = "slpcdpStandard";
static slpcdpIndividual = "slpcdpIndividual";
static slpcdpIndividualUsage = "slpcdpIndividualUsage";
}

export class SubprojectStatusTypeEnum {
static sst_Open = "sst_Open";
static sst_Closed = "sst_Closed";
}

export class SubsequentAcquisitionPeriodControlEnum {
static sapcProRataTemporis = "sapcProRataTemporis";
static sapcHalfYearConvention = "sapcHalfYearConvention";
static sapcFullYear = "sapcFullYear";
}

export class SubsequentAcquisitionProRataTypeEnum {
static saprtExactlyDailyBase = "saprtExactlyDailyBase";
static saprtFirstDayOfCurrentPeriod = "saprtFirstDayOfCurrentPeriod";
static saprtFirstDayOfNextPeriod = "saprtFirstDayOfNextPeriod";
}

export class TargetGroupTypeEnum {
static tgtCustomer = "tgtCustomer";
static tgtVendor = "tgtVendor";
}

export class TargetGroupsDetailStatusEnum {
static tdsActive = "tdsActive";
static tdsInactive = "tdsInactive";
}

export class TaxCalcSysEnum {
static PreconfiguredFormulaWithJurisdictionSupport = "PreconfiguredFormulaWithJurisdictionSupport";
static UserDefinedFormula = "UserDefinedFormula";
static PreconfiguredFormula = "PreconfiguredFormula";
}

export class TaxCodeDeterminationTCDByUsageTypeEnum {
static tcdbutDefaultSales = "tcdbutDefaultSales";
static tcdbutDefaultPurchase = "tcdbutDefaultPurchase";
static tcdbutLine = "tcdbutLine";
}

export class TaxCodeDeterminationTCDDefaultWTTypeEnum {
static tcddwttDefaultSales = "tcddwttDefaultSales";
static tcddwttDefaultPurchase = "tcddwttDefaultPurchase";
static tcddwttLine = "tcddwttLine";
}

export class TaxCodeDeterminationTCDTypeEnum {
static tcdtMaterialItem = "tcdtMaterialItem";
static tcdtServiceItem = "tcdtServiceItem";
static tcdtServiceDocument = "tcdtServiceDocument";
static tcdtWithholdingTax = "tcdtWithholdingTax";
}

export class TaxInvoiceReportLineTypeEnum {
static LineOfBusinessPlace = "LineOfBusinessPlace";
static LineOfBusinessPartner = "LineOfBusinessPartner";
static LineOfDocument = "LineOfDocument";
static LineOfItem = "LineOfItem";
}

export class TaxInvoiceReportNTSApprovedEnum {
static NotApproved = "NotApproved";
static Approved = "Approved";
}

export class TaxRateDeterminationEnum {
static trd_PostingDate = "trd_PostingDate";
static trd_DocumentDate = "trd_DocumentDate";
}

export class TaxReportFilterApArDocumentType {
static trfadt_APDocuments = "trfadt_APDocuments";
static trfadt_ARDocuments = "trfadt_ARDocuments";
}

export class TaxReportFilterDeclarationType {
static trfdt_Original = "trfdt_Original";
static trfdt_Substitute = "trfdt_Substitute";
static trfdt_Complementary = "trfdt_Complementary";
}

export class TaxReportFilterDocumentType {
static trfdt_ARInvoices = "trfdt_ARInvoices";
static trfdt_ARCreditMemos = "trfdt_ARCreditMemos";
static trfdt_APInvoices = "trfdt_APInvoices";
static trfdt_APCreditMemos = "trfdt_APCreditMemos";
static trfdt_IncomingPayments = "trfdt_IncomingPayments";
static trfdt_JournalEntries = "trfdt_JournalEntries";
static trfdt_OutgoingPayments = "trfdt_OutgoingPayments";
static trfdt_ChecksforPayment = "trfdt_ChecksforPayment";
static trfdt_InventoryTransfers = "trfdt_InventoryTransfers";
static trfdt_ARDownPayment = "trfdt_ARDownPayment";
static trfdt_APDownPayment = "trfdt_APDownPayment";
}

export class TaxReportFilterPeriod {
static trfP_Quarter = "trfP_Quarter";
static trfP_Year = "trfP_Year";
static trfP_Month = "trfP_Month";
static trfP_NULL = "trfP_NULL";
}

export class TaxReportFilterQuarterOrDates {
static trfqd_Interval = "trfqd_Interval";
static trfqd_Date = "trfqd_Date";
}

export class TaxReportFilterReportLayoutType {
static trfrlt_RegisterBookLayout = "trfrlt_RegisterBookLayout";
static trfrlt_DeclarationLayout = "trfrlt_DeclarationLayout";
}

export class TaxReportFilterType {
static trft_TaxReport = "trft_TaxReport";
static trft_WTReport = "trft_WTReport";
static trft_Report347 = "trft_Report347";
static trft_Report349 = "trft_Report349";
static trft_ReconciliationReport = "trft_ReconciliationReport";
static trft_StampTax = "trft_StampTax";
static trft_SalesReport = "trft_SalesReport";
static trft_None = "trft_None";
static trft_BoxReport = "trft_BoxReport";
static trft_AppendixOP = "trft_AppendixOP";
static trft_AnnualSalesReport = "trft_AnnualSalesReport";
static trft_VATRefundReport = "trft_VATRefundReport";
}

export class TaxTypeBlackListEnum {
static ttblExcluded = "ttblExcluded";
static ttblExempt = "ttblExempt";
static ttblNonSubject = "ttblNonSubject";
static ttblNotTaxable = "ttblNotTaxable";
static ttblTaxable = "ttblTaxable";
}

export class ThreatLevelEnum {
static tlLow = "tlLow";
static tlMedium = "tlMedium";
static tlHigh = "tlHigh";
}

export class TimeSheetTypeEnum {
static tsh_Employee = "tsh_Employee";
static tsh_User = "tsh_User";
static tsh_Other = "tsh_Other";
}

export class TransTypesEnum {
static ttAllTransactions = "ttAllTransactions";
static ttOpeningBalance = "ttOpeningBalance";
static ttClosingBalance = "ttClosingBalance";
static ttARInvoice = "ttARInvoice";
static ttARCredItnote = "ttARCredItnote";
static ttDelivery = "ttDelivery";
static ttReturn = "ttReturn";
static ttAPInvoice = "ttAPInvoice";
static ttAPCreditNote = "ttAPCreditNote";
static ttPurchaseDeliveryNote = "ttPurchaseDeliveryNote";
static ttPurchaseReturn = "ttPurchaseReturn";
static ttReceipt = "ttReceipt";
static ttDeposit = "ttDeposit";
static ttJournalEntry = "ttJournalEntry";
static ttVendorPayment = "ttVendorPayment";
static ttChequesForPayment = "ttChequesForPayment";
static ttStockList = "ttStockList";
static ttGeneralReceiptToStock = "ttGeneralReceiptToStock";
static ttGeneralReleaseFromStock = "ttGeneralReleaseFromStock";
static ttTransferBetweenWarehouses = "ttTransferBetweenWarehouses";
static ttWorkInstructions = "ttWorkInstructions";
static ttLandedCosts = "ttLandedCosts";
static ttDeferredDeposit = "ttDeferredDeposit";
static ttCorrectionInvoice = "ttCorrectionInvoice";
static ttInventoryValuation = "ttInventoryValuation";
static ttAPCorrectionInvoice = "ttAPCorrectionInvoice";
static ttAPCorrectionInvoiceReversal = "ttAPCorrectionInvoiceReversal";
static ttARCorrectionInvoice = "ttARCorrectionInvoice";
static ttARCorrectionInvoiceReversal = "ttARCorrectionInvoiceReversal";
static ttBoETransaction = "ttBoETransaction";
static ttProductionOrder = "ttProductionOrder";
static ttDownPayment = "ttDownPayment";
static ttPurchaseDownPayment = "ttPurchaseDownPayment";
static ttInternalReconciliation = "ttInternalReconciliation";
}

export class TransferSourcePeriodControlEnum {
static tspcProRataTemporis = "tspcProRataTemporis";
}

export class TransferSourceProRataTypeEnum {
static tsprtExactlyDailyBase = "tsprtExactlyDailyBase";
static tsprtLastDayOfPriorPeriod = "tsprtLastDayOfPriorPeriod";
static tsprtLastDayofCurrentPeriod = "tsprtLastDayofCurrentPeriod";
}

export class TransferTargetPeriodControlEnum {
static ttpcProRataTemporis = "ttpcProRataTemporis";
}

export class TransferTargetProRataTypeEnum {
static ttprtExactlyDailyBase = "ttprtExactlyDailyBase";
static ttprtFirstDayOfCurrentPeriod = "ttprtFirstDayOfCurrentPeriod";
static ttprtFirstDayOfNextPeriod = "ttprtFirstDayOfNextPeriod";
}

export class TranslationCategoryEnum {
static asCRReport = "asCRReport";
static asMenuItem = "asMenuItem";
static asEFMItem = "asEFMItem";
}

export class TypeOfAdvancedRulesEnum {
static toarGeneral = "toarGeneral";
static toarWarehouse = "toarWarehouse";
static toarItemGroup = "toarItemGroup";
}

export class TypeOfOperationEnum {
static tooProfessionalServices = "tooProfessionalServices";
static tooRentingAssets = "tooRentingAssets";
static tooOthers = "tooOthers";
}

export class UserActionTypeEnum {
static actionLogin = "actionLogin";
static actionLoginFail = "actionLoginFail";
static actionLogoff = "actionLogoff";
static actionCreateUser = "actionCreateUser";
static actionRemoveUser = "actionRemoveUser";
static actionSelectSU = "actionSelectSU";
static actionDeselectSU = "actionDeselectSU";
static actionLock = "actionLock";
static actionUnlock = "actionUnlock";
static actionChPasswd = "actionChPasswd";
static actionUnlockFail = "actionUnlockFail";
}

export class UserMenuItemTypeEnum {
static umitForm = "umitForm";
static umitQuery = "umitQuery";
static umitFolder = "umitFolder";
static umitReport = "umitReport";
static umitLink = "umitLink";
}

export class UserQueryTypeEnum {
static uqtRegular = "uqtRegular";
static uqtWizard = "uqtWizard";
static uqtGenerator = "uqtGenerator";
static uqtStoredProcedure = "uqtStoredProcedure";
}

export class VMCommunicationStatusEnum {
static vmcs_Pending = "vmcs_Pending";
static vmcs_Error = "vmcs_Error";
static vmcs_Successful = "vmcs_Successful";
static vmcs_New = "vmcs_New";
static vmcs_Rejected = "vmcs_Rejected";
}

export class VMCommunicationTypeEnum {
static vmct_MasterData = "vmct_MasterData";
static vmct_Transaction = "vmct_Transaction";
}

export class VatGroupsTaxRegionEnum {
static vgtrPT = "vgtrPT";
static vgtrPT_AC = "vgtrPT_AC";
static vgtrPT_MA = "vgtrPT_MA";
}

export class WTDDetailType {
static Allowed = "Allowed";
static SpecialRate = "SpecialRate";
static Exemption = "Exemption";
}

export class WithholdingTaxCodeBaseTypeEnum {
static wtcbt_Gross = "wtcbt_Gross";
static wtcbt_Net = "wtcbt_Net";
static wtcbt_VAT = "wtcbt_VAT";
static wtcbt_Gross_VAT = "wtcbt_Gross_VAT";
}

export class WithholdingTaxCodeCategoryEnum {
static wtcc_Invoice = "wtcc_Invoice";
static wtcc_Payment = "wtcc_Payment";
}

export class WithholdingTypeEnum {
static wt_VatWithholding = "wt_VatWithholding";
static wt_IncomeTaxWithholding = "wt_IncomeTaxWithholding";
}

export class ChartOfAccount {
  Code: string;
  Name: string;
  Balance: number;
  CashAccount: SAPB1.BoYesNoEnum;
  BudgetAccount: SAPB1.BoYesNoEnum;
  ActiveAccount: SAPB1.BoYesNoEnum;
  PrimaryAccount: SAPB1.BoYesNoEnum;
  AccountLevel: number;
  DataExportCode: string;
  FatherAccountKey: string;
  ExternalCode: string;
  RateConversion: SAPB1.BoYesNoEnum;
  TaxLiableAccount: SAPB1.BoYesNoEnum;
  TaxExemptAccount: SAPB1.BoYesNoEnum;
  ExternalReconNo: number;
  InternalReconNo: number;
  AccountType: SAPB1.BoAccountTypes;
  AcctCurrency: string;
  Balance_syscurr: number;
  Balance_FrgnCurr: number;
  Protected: SAPB1.BoYesNoEnum;
  ReconciledAccount: SAPB1.BoYesNoEnum;
  LiableForAdvances: SAPB1.BoYesNoEnum;
  ForeignName: string;
  Details: string;
  ProjectCode: string;
  RevaluationCoordinated: SAPB1.BoYesNoEnum;
  LockManualTransaction: SAPB1.BoYesNoEnum;
  FormatCode: string;
  AllowChangeVatGroup: SAPB1.BoYesNoEnum;
  DefaultVatGroup: string;
  Category: number;
  TransactionCode: string;
  LoadingType: SAPB1.BoYesNoEnum;
  LoadingFactorCode: string;
  LoadingFactorCode2: string;
  LoadingFactorCode3: string;
  LoadingFactorCode4: string;
  LoadingFactorCode5: string;
  PlanningLevel: string;
  DatevAccount: number;
  DatevAutoAccount: SAPB1.BoYesNoEnum;
  DatevFirstDataEntry: SAPB1.BoYesNoEnum;
  AllowMultipleLinking: SAPB1.BoYesNoEnum;
  ProjectRelevant: SAPB1.BoYesNoEnum;
  DistributionRuleRelevant: SAPB1.BoYesNoEnum;
  DistributionRule2Relevant: SAPB1.BoYesNoEnum;
  DistributionRule3Relevant: SAPB1.BoYesNoEnum;
  DistributionRule4Relevant: SAPB1.BoYesNoEnum;
  DistributionRule5Relevant: SAPB1.BoYesNoEnum;
  BPLID: number;
  BPLName: string;
  VATRegNum: string;
  AccountPurposeCode: SAPB1.SPEDContabilAccountPurposeCode;
  ReferentialAccountCode: string;
}

export class ChartOfAccountKey {
  Code: string;
}

export class BusinessPartnerGroup {
  Code: number;
  Name: string;
  Type: SAPB1.BoBusinessPartnerGroupTypes;
}

export class BusinessPartnerGroupKey {
  Code: number;
}

export class SalesOpportunitySourceSetup {
  SequenceNo: number;
  Description: string;
  Sort: number;
}

export class SalesOpportunitySourceSetupKey {
  SequenceNo: number;
}

export class SalesOpportunitySourceSetupParams {
  SequenceNo: number;
  Description: string;
}

export class BankStatement {
  InternalNumber: number;
  BankAccountKey: number;
  StatementNumber: string;
  StatementDate: Date;
  Status: SAPB1.BankStatementStatusEnum;
  Imported: SAPB1.BoYesNoEnum;
  StartingBalanceF: number;
  EndingBalanceF: number;
  Currency: string;
  StartingBalanceL: number;
  EndingBalanceL: number;
  BankStatementFileHash: string;
  BankStatementGUID: string;
  BankStatementRows: SAPB1.BankStatementRow[];
}

export class BankStatementKey {
  InternalNumber: number;
}

export class BankStatementRow {
  ExternalBankStatementNo: number;
  AccountNumber: string;
  SequenceNo: number;
  AccountName: string;
  Reference: string;
  DueDate: Date;
  Details: string;
  DebitAmountFC: number;
  CreditAmountFC: number;
  CreditCurrency: string;
  Balance: number;
  ReconciliationNo: number;
  ExternalCode: string;
  BPCode: string;
  BPName: string;
  StatementNumber: number;
  RowStatus: string;
  VisualOrder: number;
  DocNumType: SAPB1.BoBpsDocTypes;
  Details2: string;
  PaymentReferenceNo: string;
  CreateMethod: SAPB1.CreateMethodEnum;
  BankStmtLineDate: Date;
  BankStmtDueDate: Date;
  InternalBankOpCode: number;
  BPBankAccount: string;
  DebitAmountLC: number;
  CreditAmountLC: number;
  ExchangeRate: number;
  IBANofBPBankAccount: string;
  FeeOnTheLine: number;
  VATAmountLC: number;
  VATAmountFC: number;
  JournalEntryID: number;
  PaymentID: number;
  DocumentType: SAPB1.BankStatementDocTypeEnum;
  PostingMethod: SAPB1.PostingMethodEnum;
  GLAccountforFee: string;
  FeeProfitCenter: string;
  FeeProject: string;
  BPBankCode: string;
  FeeDistributionRule: string;
  FeeDistributionRule2: string;
  FeeDistributionRule3: string;
  FeeDistributionRule4: string;
  FeeDistributionRule5: string;
  BPBICSwiftCode: string;
  Source: SAPB1.BankStatementRowSourceEnum;
  FolioPrefixString: string;
  FolioNumber: number;
  MultiplePayments: SAPB1.MultiplePayment[];
}

export class MultiplePayment {
  BankStatmentLineID: number;
  ListLineID: number;
  DocumentIdentifier: string;
  AmountLC: number;
  AmountFC: number;
  IsDebit: SAPB1.BoYesNoEnum;
}

export class BankStatementParams {
  InternalNumber: number;
  BankAccountKey: number;
  StatementNumber: string;
  StatementDate: Date;
  Status: SAPB1.BankStatementStatusEnum;
  Imported: SAPB1.BoYesNoEnum;
  StartingBalanceF: number;
  EndingBalanceF: number;
  Currency: string;
  StartingBalanceL: number;
  EndingBalanceL: number;
}

export class BankStatementsFilter {
  Country: string;
  Bank: string;
  Account: string;
}

export class BatchNumberDetail {
  DocEntry: number;
  ItemCode: string;
  ItemDescription: string;
  Status: SAPB1.BatchDetailServiceStatusEnum;
  Batch: string;
  BatchAttribute1: string;
  BatchAttribute2: string;
  AdmissionDate: Date;
  ManufacturingDate: Date;
  ExpirationDate: Date;
  Details: string;
  SystemNumber: number;
  U_CON_CountCost: number;
}

export class BatchNumberDetailKey {
  DocEntry: number;
}

export class BatchNumberDetailParams {
  DocEntry: number;
}

export class SerialNumberDetail {
  DocEntry: number;
  ItemCode: string;
  ItemDescription: string;
  MfrSerialNo: string;
  SerialNumber: string;
  LotNumber: string;
  SystemNumber: number;
  AdmissionDate: Date;
  ManufacturingDate: Date;
  ExpirationDate: Date;
  MfrWarrantyStart: Date;
  MFrWarrantyEnd: Date;
  Location: string;
  Details: string;
  U_CON_CountCost: number;
}

export class SerialNumberDetailKey {
  DocEntry: number;
}

export class SerialNumberDetailParams {
  DocEntry: number;
}

export class InventoryPostingCopyOption {
  BaseEntry: number;
  CopyOption: SAPB1.InventoryPostingCopyOptionEnum;
}

export class InventoryPosting {
  DocumentEntry: number;
  DocumentNumber: number;
  Series: number;
  PostingDate: Date;
  CountDate: Date;
  CountTime: Date;
  Remarks: string;
  Reference2: string;
  BranchID: number;
  PriceSource: SAPB1.InventoryPostingPriceSourceEnum;
  PriceList: number;
  JournalRemark: string;
  DocObjectCodeEx: string;
  FinancialPeriod: number;
  PeriodIndicator: string;
  InventoryPostingLines: SAPB1.InventoryPostingLine[];
}

export class InventoryPostingKey {
  DocumentEntry: number;
}

export class InventoryPostingLine {
  DocumentEntry: number;
  LineNumber: number;
  ItemCode: string;
  ItemDescription: string;
  WarehouseCode: string;
  BinEntry: number;
  InWarehouseQuantity: number;
  BarCode: string;
  Variance: number;
  VariancePercentage: number;
  CountedQuantity: number;
  Price: number;
  Currency: string;
  Total: number;
  VisualOrder: number;
  CountDate: Date;
  CountTime: Date;
  BaseEntry: number;
  BaseLine: number;
  BaseType: number;
  BaseReference: string;
  Remarks: string;
  InventoryOffsetIncreaseAccount: string;
  InventoryOffsetDecreaseAccount: string;
  ProjectCode: string;
  Manufacturer: number;
  SupplierCatalogNo: string;
  PreferredVendor: string;
  CostingCode: string;
  CostingCode2: string;
  CostingCode3: string;
  CostingCode4: string;
  CostingCode5: string;
  UoMCode: string;
  UoMCountedQuantity: number;
  ItemsPerUnit: number;
  AllowBinNegativeQuantity: SAPB1.BoYesNoEnum;
  ActualPrice: number;
  PostedValueLC: number;
  PostedValueSC: number;
  InventoryPostingLineUoMs: SAPB1.InventoryPostingLineUoM[];
  InventoryPostingSerialNumbers: SAPB1.InventoryPostingSerialNumber[];
  InventoryPostingBatchNumbers: SAPB1.InventoryPostingBatchNumber[];
}

export class InventoryPostingLineUoM {
  DocumentEntry: number;
  LineNumber: number;
  ChildNumber: number;
  UoMCountedQuantity: number;
  ItemsPerUnit: number;
  CountedQuantity: number;
  UoMCode: string;
  BarCode: string;
}

export class InventoryPostingSerialNumber {
  DocumentEntry: number;
  ManufacturerSerialNumber: string;
  InternalSerialNumber: string;
  ExpiryDate: Date;
  ManufactureDate: Date;
  ReceptionDate: Date;
  WarrantyStart: Date;
  WarrantyEnd: Date;
  Location: string;
  Notes: string;
  BatchID: string;
  SystemSerialNumber: number;
  BaseLineNumber: number;
  Quantity: number;
  TrackingNote: number;
  TrackingNoteLine: number;
}

export class InventoryPostingBatchNumber {
  DocumentEntry: number;
  BatchNumber: string;
  ManufacturerSerialNumber: string;
  InternalSerialNumber: string;
  ExpiryDate: Date;
  ManufactureDate: Date;
  AddmisionDate: Date;
  Location: string;
  Notes: string;
  Quantity: number;
  BaseLineNumber: number;
  TrackingNote: number;
  TrackingNoteLine: number;
}

export class InventoryPostingParams {
  DocumentEntry: number;
  DocumentNumber: number;
}

export class FinancialYear {
  AbsEntry: number;
  Code: string;
  Description: string;
  StartDate: Date;
  EndDate: Date;
  AssessYear: string;
}

export class FinancialYearKey {
  AbsEntry: number;
}

export class FinancialYearParams {
  AbsEntry: number;
  Code: string;
  Description: string;
}

export class Section {
  AbsEntry: number;
  Code: string;
  Description: string;
  ECode: string;
}

export class SectionKey {
  AbsEntry: number;
}

export class SectionParams {
  AbsEntry: number;
  Code: string;
  Description: string;
}

export class CertificateSeries {
  AbsEntry: number;
  Code: string;
  Section: number;
  Location: number;
  DefaultSeries: number;
  SeriesLines: SAPB1.SeriesLine[];
}

export class CertificateSeriesKey {
  AbsEntry: number;
}

export class SeriesLine {
  Series: number;
  Prefix: string;
  FirstNum: number;
  NextNum: number;
  LastNum: number;
}

export class CertificateSeriesParams {
  AbsEntry: number;
  Code: string;
  Section: number;
  Location: number;
}

export class NatureOfAssessee {
  AbsEntry: number;
  Code: string;
  Description: string;
  AssesseeType: SAPB1.AssesseeTypeEnum;
}

export class NatureOfAssesseeKey {
  AbsEntry: number;
}

export class NatureOfAssesseeParams {
  AbsEntry: number;
  Code: string;
  Description: string;
}

export class ReportType {
  TypeCode: string;
  TypeName: string;
  DefaultReportLayout: string;
  AddonName: string;
  AddonFormType: string;
  MenuID: string;
}

export class ReportTypeKey {
  TypeCode: string;
}

export class ReportTypeParams {
  TypeCode: string;
  TypeName: string;
  AddonName: string;
  AddonFormType: string;
  MenuID: string;
}

export class UnitOfMeasurementGroup {
  AbsEntry: number;
  Code: string;
  Name: string;
  BaseUoM: number;
  UoMGroupDefinitionCollection: SAPB1.UoMGroupDefinition[];
}

export class UnitOfMeasurementGroupKey {
  AbsEntry: number;
}

export class UoMGroupDefinition {
  AlternateUoM: number;
  AlternateQuantity: number;
  BaseQuantity: number;
  WeightFactor: number;
  UdfFactor: number;
}

export class UnitOfMeasurementGroupParams {
  AbsEntry: number;
  Code: string;
}

export class UnitOfMeasurement {
  AbsEntry: number;
  Code: string;
  Name: string;
  Length1: number;
  Length1Unit: number;
  Length2: number;
  Length2Unit: number;
  Width1: number;
  Width1Unit: number;
  Width2: number;
  Width2Unit: number;
  Height1: number;
  Height1Unit: number;
  Height2: number;
  Height2Unit: number;
  Volume: number;
  VolumeUnit: number;
  Weight1: number;
  Weight1Unit: number;
  Weight2: number;
  Weight2Unit: number;
  InternationalSymbol: string;
}

export class UnitOfMeasurementKey {
  AbsEntry: number;
}

export class UnitOfMeasurementParams {
  AbsEntry: number;
  Code: string;
}

export class BinLocationField {
  AbsEntry: number;
  FieldType: SAPB1.BinLocationFieldTypeEnum;
  FieldNumber: number;
  Name: string;
  Activated: SAPB1.BoYesNoEnum;
  DefaultFieldName: string;
}

export class BinLocationFieldKey {
  AbsEntry: number;
}

export class BinLocationFieldParams {
  AbsEntry: number;
}

export class BinLocationAttribute {
  Attribute: number;
  Code: string;
  AbsEntry: number;
}

export class BinLocationAttributeKey {
  AbsEntry: number;
}

export class BinLocationAttributeParams {
  AbsEntry: number;
  Attribute: number;
  Code: string;
}

export class WarehouseSublevelCode {
  WarehouseSublevel: number;
  Code: string;
  Description: string;
  AbsEntry: number;
}

export class WarehouseSublevelCodeKey {
  AbsEntry: number;
}

export class WarehouseSublevelCodeParams {
  AbsEntry: number;
  WarehouseSublevel: number;
  Code: string;
}

export class BinLocation {
  AbsEntry: number;
  Warehouse: string;
  Sublevel1: string;
  Sublevel2: string;
  Sublevel3: string;
  Sublevel4: string;
  BinCode: string;
  Inactive: SAPB1.BoYesNoEnum;
  Description: string;
  AlternativeSortCode: string;
  BarCode: string;
  Attribute1: string;
  Attribute2: string;
  Attribute3: string;
  Attribute4: string;
  Attribute5: string;
  Attribute6: string;
  Attribute7: string;
  Attribute8: string;
  Attribute9: string;
  Attribute10: string;
  RestrictedItemType: SAPB1.BinRestrictItemEnum;
  SpecificItem: string;
  SpecificItemGroup: number;
  BatchRestrictions: SAPB1.BinRestrictionBatchEnum;
  RestrictedTransType: SAPB1.BinRestrictTransactionEnum;
  RestrictionReason: string;
  DateRestrictionChanged: Date;
  MinimumQty: number;
  MaximumQty: number;
  IsSystemBin: SAPB1.BoYesNoEnum;
  ReceivingBinLocation: SAPB1.BoYesNoEnum;
  ExcludeAutoAllocOnIssue: SAPB1.BoYesNoEnum;
  MaximumWeight: number;
  MaximumWeight1: number;
  MaximumWeightUnit: number;
  MaximumWeightUnit1: number;
  RestrictedUoMType: SAPB1.BinRestrictUoMEnum;
  SpecificUoM: number;
  SpecificUoMGroup: number;
}

export class BinLocationKey {
  AbsEntry: number;
}

export class BinLocationParams {
  AbsEntry: number;
  BinCode: string;
}

export class Activity {
  ActivityCode: number;
  CardCode: string;
  Notes: string;
  ActivityDate: Date;
  ActivityTime: Date;
  StartDate: Date;
  Closed: SAPB1.BoYesNoEnum;
  CloseDate: Date;
  Phone: string;
  Fax: string;
  Subject: number;
  DocType: string;
  DocNum: string;
  DocEntry: string;
  Priority: SAPB1.BoMsgPriorities;
  Details: string;
  Activity: SAPB1.BoActivities;
  ActivityType: number;
  Location: number;
  StartTime: Date;
  EndTime: Date;
  Duration: number;
  DurationType: SAPB1.BoDurations;
  SalesEmployee: number;
  ContactPersonCode: number;
  HandledBy: number;
  Reminder: SAPB1.BoYesNoEnum;
  ReminderPeriod: number;
  ReminderType: SAPB1.BoDurations;
  City: string;
  PersonalFlag: SAPB1.BoYesNoEnum;
  Street: string;
  ParentObjectId: number;
  ParentObjectType: string;
  Room: string;
  InactiveFlag: SAPB1.BoYesNoEnum;
  State: string;
  PreviousActivity: number;
  Country: string;
  Status: number;
  TentativeFlag: SAPB1.BoYesNoEnum;
  EndDueDate: Date;
  DocTypeEx: string;
  AttachmentEntry: number;
  RecurrencePattern: SAPB1.RecurrencePatternEnum;
  EndType: SAPB1.EndTypeEnum;
  SeriesStartDate: Date;
  SeriesEndDate: Date;
  MaxOccurrence: number;
  Interval: number;
  Sunday: SAPB1.BoYesNoEnum;
  Monday: SAPB1.BoYesNoEnum;
  Tuesday: SAPB1.BoYesNoEnum;
  Wednesday: SAPB1.BoYesNoEnum;
  Thursday: SAPB1.BoYesNoEnum;
  Friday: SAPB1.BoYesNoEnum;
  Saturday: SAPB1.BoYesNoEnum;
  RepeatOption: SAPB1.RepeatOptionEnum;
  BelongedSeriesNum: number;
  IsRemoved: SAPB1.BoYesNoEnum;
  AddressName: string;
  AddressType: SAPB1.BoAddressType;
  HandledByEmployee: number;
  RecurrenceSequenceSpecifier: SAPB1.RecurrenceSequenceEnum;
  RecurrenceDayInMonth: number;
  RecurrenceMonth: number;
  RecurrenceDayOfWeek: SAPB1.RecurrenceDayOfWeekEnum;
  SalesOpportunityId: number;
  SalesOpportunityLine: number;
  CheckInListParams: SAPB1.CheckInParams[];
}

export class ActivityKey {
  ActivityCode: number;
}

export class CheckInParams {
  LineNumber: number;
  Date: Date;
  Time: Date;
  Location: string;
  Latitude: string;
  Longitude: string;
  HandledBy: number;
  HandledByEmployee: number;
}

export class ActivityParams {
  ActivityCode: number;
}

export class ActivityInstanceParams {
  ActivityCode: number;
  InstanceDate: Date;
}

export class ActivityInstancesListParams {
  StartDate: Date;
  InstanceCount: number;
}

export class SalesStage {
  SequenceNo: number;
  Name: string;
  Stageno: number;
  ClosingPercentage: number;
  Cancelled: SAPB1.BoYesNoEnum;
}

export class SalesStageKey {
  SequenceNo: number;
}

export class SalesOpportunityReasonSetup {
  SequenceNo: number;
  Description: string;
  Sort: number;
}

export class SalesOpportunityReasonSetupKey {
  SequenceNo: number;
}

export class SalesOpportunityReasonSetupParams {
  SequenceNo: number;
  Description: string;
}

export class ActivityType {
  Code: number;
  Name: string;
}

export class ActivityTypeKey {
  Code: number;
}

export class ActivityLocation {
  Code: number;
  Name: string;
}

export class ActivityLocationKey {
  Code: number;
}

export class PartnersSetup {
  Name: string;
  DefaultRelationship: number;
  RelatedBP: string;
  Details: string;
}

export class PartnersSetupParams {
  PartnerID: number;
  Name: string;
  DefaultRelationship: number;
  RelatedBP: string;
  Details: string;
}

export class PartnersSetupParamsKey {
  PartnerID: number;
}

export class SalesOpportunityCompetitorSetup {
  SequenceNo: number;
  Name: string;
  ThreatLevel: SAPB1.ThreatLevelEnum;
  Details: string;
}

export class SalesOpportunityCompetitorSetupKey {
  SequenceNo: number;
}

export class SalesOpportunityCompetitorSetupParams {
  SequenceNo: number;
  Name: string;
  ThreatLevel: SAPB1.ThreatLevelEnum;
}

export class DocumentParams {
  DocEntry: number;
}

export class Document {
  DocEntry: number;
  DocNum: number;
  DocType: SAPB1.BoDocumentTypes;
  HandWritten: SAPB1.BoYesNoEnum;
  Printed: SAPB1.PrintStatusEnum;
  DocDate: Date;
  DocDueDate: Date;
  CardCode: string;
  CardName: string;
  Address: string;
  NumAtCard: string;
  DocTotal: number;
  AttachmentEntry: number;
  DocCurrency: string;
  DocRate: number;
  Reference1: string;
  Reference2: string;
  Comments: string;
  JournalMemo: string;
  PaymentGroupCode: number;
  DocTime: Date;
  SalesPersonCode: number;
  TransportationCode: number;
  Confirmed: SAPB1.BoYesNoEnum;
  ImportFileNum: number;
  SummeryType: SAPB1.BoDocSummaryTypes;
  ContactPersonCode: number;
  ShowSCN: SAPB1.BoYesNoEnum;
  Series: number;
  TaxDate: Date;
  PartialSupply: SAPB1.BoYesNoEnum;
  DocObjectCode: string;
  ShipToCode: string;
  Indicator: string;
  FederalTaxID: string;
  DiscountPercent: number;
  PaymentReference: string;
  CreationDate: Date;
  UpdateDate: Date;
  FinancialPeriod: number;
  TransNum: number;
  VatSum: number;
  VatSumSys: number;
  VatSumFc: number;
  NetProcedure: SAPB1.BoYesNoEnum;
  DocTotalFc: number;
  DocTotalSys: number;
  Form1099: number;
  Box1099: string;
  RevisionPo: SAPB1.BoYesNoEnum;
  RequriedDate: Date;
  CancelDate: Date;
  BlockDunning: SAPB1.BoYesNoEnum;
  Submitted: SAPB1.BoYesNoEnum;
  Segment: number;
  PickStatus: SAPB1.BoYesNoEnum;
  Pick: SAPB1.BoYesNoEnum;
  PaymentMethod: string;
  PaymentBlock: SAPB1.BoYesNoEnum;
  PaymentBlockEntry: number;
  CentralBankIndicator: string;
  MaximumCashDiscount: SAPB1.BoYesNoEnum;
  Reserve: SAPB1.BoYesNoEnum;
  Project: string;
  ExemptionValidityDateFrom: Date;
  ExemptionValidityDateTo: Date;
  WareHouseUpdateType: SAPB1.BoDocWhsUpdateTypes;
  Rounding: SAPB1.BoYesNoEnum;
  ExternalCorrectedDocNum: string;
  InternalCorrectedDocNum: number;
  NextCorrectingDocument: number;
  DeferredTax: SAPB1.BoYesNoEnum;
  TaxExemptionLetterNum: string;
  WTApplied: number;
  WTAppliedFC: number;
  BillOfExchangeReserved: SAPB1.BoYesNoEnum;
  AgentCode: string;
  WTAppliedSC: number;
  TotalEqualizationTax: number;
  TotalEqualizationTaxFC: number;
  TotalEqualizationTaxSC: number;
  NumberOfInstallments: number;
  ApplyTaxOnFirstInstallment: SAPB1.BoYesNoEnum;
  WTNonSubjectAmount: number;
  WTNonSubjectAmountSC: number;
  WTNonSubjectAmountFC: number;
  WTExemptedAmount: number;
  WTExemptedAmountSC: number;
  WTExemptedAmountFC: number;
  BaseAmount: number;
  BaseAmountSC: number;
  BaseAmountFC: number;
  WTAmount: number;
  WTAmountSC: number;
  WTAmountFC: number;
  VatDate: Date;
  DocumentsOwner: number;
  FolioPrefixString: string;
  FolioNumber: number;
  DocumentSubType: SAPB1.BoDocumentSubType;
  BPChannelCode: string;
  BPChannelContact: number;
  Address2: string;
  DocumentStatus: SAPB1.BoStatus;
  PeriodIndicator: string;
  PayToCode: string;
  ManualNumber: string;
  UseShpdGoodsAct: SAPB1.BoYesNoEnum;
  IsPayToBank: SAPB1.BoYesNoEnum;
  PayToBankCountry: string;
  PayToBankCode: string;
  PayToBankAccountNo: string;
  PayToBankBranch: string;
  BPL_IDAssignedToInvoice: number;
  DownPayment: number;
  ReserveInvoice: SAPB1.BoYesNoEnum;
  LanguageCode: number;
  TrackingNumber: string;
  PickRemark: string;
  ClosingDate: Date;
  SequenceCode: number;
  SequenceSerial: number;
  SeriesString: string;
  SubSeriesString: string;
  SequenceModel: string;
  UseCorrectionVATGroup: SAPB1.BoYesNoEnum;
  TotalDiscount: number;
  DownPaymentAmount: number;
  DownPaymentPercentage: number;
  DownPaymentType: SAPB1.DownPaymentTypeEnum;
  DownPaymentAmountSC: number;
  DownPaymentAmountFC: number;
  VatPercent: number;
  ServiceGrossProfitPercent: number;
  OpeningRemarks: string;
  ClosingRemarks: string;
  RoundingDiffAmount: number;
  RoundingDiffAmountFC: number;
  RoundingDiffAmountSC: number;
  Cancelled: SAPB1.BoYesNoEnum;
  SignatureInputMessage: string;
  SignatureDigest: string;
  CertificationNumber: string;
  PrivateKeyVersion: number;
  ControlAccount: string;
  InsuranceOperation347: SAPB1.BoYesNoEnum;
  ArchiveNonremovableSalesQuotation: SAPB1.BoYesNoEnum;
  GTSChecker: number;
  GTSPayee: number;
  ExtraMonth: number;
  ExtraDays: number;
  CashDiscountDateOffset: number;
  StartFrom: SAPB1.BoPayTermDueTypes;
  NTSApproved: SAPB1.BoYesNoEnum;
  ETaxWebSite: number;
  ETaxNumber: string;
  NTSApprovedNumber: string;
  EDocGenerationType: SAPB1.EDocGenerationTypeEnum;
  EDocSeries: number;
  EDocNum: string;
  EDocExportFormat: number;
  EDocStatus: SAPB1.EDocStatusEnum;
  EDocErrorCode: string;
  EDocErrorMessage: string;
  DownPaymentStatus: SAPB1.BoSoStatus;
  GroupSeries: number;
  GroupNumber: number;
  GroupHandWritten: SAPB1.BoYesNoEnum;
  ReopenOriginalDocument: SAPB1.BoYesNoEnum;
  ReopenManuallyClosedOrCanceledDocument: SAPB1.BoYesNoEnum;
  CreateOnlineQuotation: SAPB1.BoYesNoEnum;
  POSEquipmentNumber: string;
  POSManufacturerSerialNumber: string;
  POSCashierNumber: number;
  ApplyCurrentVATRatesForDownPaymentsToDraw: SAPB1.BoYesNoEnum;
  ClosingOption: SAPB1.ClosingOptionEnum;
  SpecifiedClosingDate: Date;
  OpenForLandedCosts: SAPB1.BoYesNoEnum;
  AuthorizationStatus: SAPB1.DocumentAuthorizationStatusEnum;
  TotalDiscountFC: number;
  TotalDiscountSC: number;
  RelevantToGTS: SAPB1.BoYesNoEnum;
  BPLName: string;
  VATRegNum: string;
  AnnualInvoiceDeclarationReference: number;
  Supplier: string;
  Releaser: number;
  Receiver: number;
  BlanketAgreementNumber: number;
  IsAlteration: SAPB1.BoYesNoEnum;
  CancelStatus: SAPB1.CancelStatusEnum;
  AssetValueDate: Date;
  Requester: string;
  RequesterName: string;
  RequesterBranch: number;
  RequesterDepartment: number;
  RequesterEmail: string;
  SendNotification: SAPB1.BoYesNoEnum;
  ReqType: number;
  DocumentDelivery: SAPB1.DocumentDeliveryTypeEnum;
  AuthorizationCode: string;
  StartDeliveryDate: Date;
  StartDeliveryTime: Date;
  EndDeliveryDate: Date;
  EndDeliveryTime: Date;
  VehiclePlate: string;
  ATDocumentType: string;
  ElecCommStatus: SAPB1.ElecCommStatusEnum;
  ElecCommMessage: string;
  ReuseDocumentNum: SAPB1.BoYesNoEnum;
  ReuseNotaFiscalNum: SAPB1.BoYesNoEnum;
  PrintSEPADirect: SAPB1.BoYesNoEnum;
  FiscalDocNum: string;
  POSDailySummaryNo: number;
  POSReceiptNo: number;
  PointOfIssueCode: string;
  Letter: SAPB1.FolioLetterEnum;
  FolioNumberFrom: number;
  FolioNumberTo: number;
  InterimType: SAPB1.BoInterimDocTypes;
  RelatedType: number;
  RelatedEntry: number;
  U_DotchiProcsFee: string;
  U_CON_Test_Doc: string;
  U_BXPEmpID: number;
  U_BXPTType: string;
  U_BXPDelNo: string;
  Document_ApprovalRequests: SAPB1.Document_ApprovalRequest[];
  DocumentLines: SAPB1.DocumentLine[];
  DocumentAdditionalExpenses: SAPB1.DocumentAdditionalExpense[];
  WithholdingTaxDataWTXCollection: SAPB1.WithholdingTaxDataWTX[];
  WithholdingTaxDataCollection: SAPB1.WithholdingTaxData[];
  DocumentPackages: SAPB1.DocumentPackage[];
  DocumentSpecialLines: SAPB1.DocumentSpecialLine[];
  DocumentInstallments: SAPB1.DocumentInstallment[];
  DownPaymentsToDraw: SAPB1.DownPaymentToDraw[];
  TaxExtension: SAPB1.TaxExtension;
  AddressExtension: SAPB1.AddressExtension;
}

export class DocumentKey {
  DocEntry: number;
}

export class Document_ApprovalRequest {
  ApprovalTemplatesID: number;
  Remarks: string;
}

export class DocumentLine {
  LineNum: number;
  ItemCode: string;
  ItemDescription: string;
  Quantity: number;
  ShipDate: Date;
  Price: number;
  PriceAfterVAT: number;
  Currency: string;
  Rate: number;
  DiscountPercent: number;
  VendorNum: string;
  SerialNum: string;
  WarehouseCode: string;
  SalesPersonCode: number;
  CommisionPercent: number;
  TreeType: SAPB1.BoItemTreeTypes;
  AccountCode: string;
  UseBaseUnits: SAPB1.BoYesNoEnum;
  SupplierCatNum: string;
  CostingCode: string;
  ProjectCode: string;
  BarCode: string;
  VatGroup: string;
  Height1: number;
  Hight1Unit: number;
  Height2: number;
  Height2Unit: number;
  Lengh1: number;
  Lengh1Unit: number;
  Lengh2: number;
  Lengh2Unit: number;
  Weight1: number;
  Weight1Unit: number;
  Weight2: number;
  Weight2Unit: number;
  Factor1: number;
  Factor2: number;
  Factor3: number;
  Factor4: number;
  BaseType: number;
  BaseEntry: number;
  BaseLine: number;
  Volume: number;
  VolumeUnit: number;
  Width1: number;
  Width1Unit: number;
  Width2: number;
  Width2Unit: number;
  Address: string;
  TaxCode: string;
  TaxType: SAPB1.BoTaxTypes;
  TaxLiable: SAPB1.BoYesNoEnum;
  PickStatus: SAPB1.BoYesNoEnum;
  PickQuantity: number;
  PickListIdNumber: number;
  OriginalItem: string;
  BackOrder: SAPB1.BoYesNoEnum;
  FreeText: string;
  ShippingMethod: number;
  POTargetNum: number;
  POTargetEntry: string;
  POTargetRowNum: number;
  CorrectionInvoiceItem: SAPB1.BoCorInvItemStatus;
  CorrInvAmountToStock: number;
  CorrInvAmountToDiffAcct: number;
  AppliedTax: number;
  AppliedTaxFC: number;
  AppliedTaxSC: number;
  WTLiable: SAPB1.BoYesNoEnum;
  DeferredTax: SAPB1.BoYesNoEnum;
  EqualizationTaxPercent: number;
  TotalEqualizationTax: number;
  TotalEqualizationTaxFC: number;
  TotalEqualizationTaxSC: number;
  NetTaxAmount: number;
  NetTaxAmountFC: number;
  NetTaxAmountSC: number;
  MeasureUnit: string;
  UnitsOfMeasurment: number;
  LineTotal: number;
  TaxPercentagePerRow: number;
  TaxTotal: number;
  ConsumerSalesForecast: SAPB1.BoYesNoEnum;
  ExciseAmount: number;
  TaxPerUnit: number;
  TotalInclTax: number;
  CountryOrg: string;
  SWW: string;
  TransactionType: SAPB1.BoTransactionTypeEnum;
  DistributeExpense: SAPB1.BoYesNoEnum;
  ShipToCode: string;
  RowTotalFC: number;
  RowTotalSC: number;
  LastBuyInmPrice: number;
  LastBuyDistributeSumFc: number;
  LastBuyDistributeSumSc: number;
  LastBuyDistributeSum: number;
  StockDistributesumForeign: number;
  StockDistributesumSystem: number;
  StockDistributesum: number;
  StockInmPrice: number;
  PickStatusEx: SAPB1.BoDocumentLinePickStatus;
  TaxBeforeDPM: number;
  TaxBeforeDPMFC: number;
  TaxBeforeDPMSC: number;
  CFOPCode: string;
  CSTCode: string;
  Usage: number;
  TaxOnly: SAPB1.BoYesNoEnum;
  VisualOrder: number;
  BaseOpenQuantity: number;
  UnitPrice: number;
  LineStatus: SAPB1.BoStatus;
  PackageQuantity: number;
  Text: string;
  LineType: SAPB1.BoDocLineType;
  COGSCostingCode: string;
  COGSAccountCode: string;
  ChangeAssemlyBoMWarehouse: string;
  GrossBuyPrice: number;
  GrossBase: number;
  GrossProfitTotalBasePrice: number;
  CostingCode2: string;
  CostingCode3: string;
  CostingCode4: string;
  CostingCode5: string;
  ItemDetails: string;
  LocationCode: number;
  ActualDeliveryDate: Date;
  RemainingOpenQuantity: number;
  OpenAmount: number;
  OpenAmountFC: number;
  OpenAmountSC: number;
  ExLineNo: string;
  RequiredDate: Date;
  RequiredQuantity: number;
  COGSCostingCode2: string;
  COGSCostingCode3: string;
  COGSCostingCode4: string;
  COGSCostingCode5: string;
  CSTforIPI: string;
  CSTforPIS: string;
  CSTforCOFINS: string;
  CreditOriginCode: string;
  WithoutInventoryMovement: SAPB1.BoYesNoEnum;
  AgreementNo: number;
  AgreementRowNumber: number;
  ShipToDescription: string;
  ActualBaseEntry: number;
  ActualBaseLine: number;
  DocEntry: number;
  Surpluses: number;
  DefectAndBreakup: number;
  Shortages: number;
  ConsiderQuantity: SAPB1.BoYesNoEnum;
  PartialRetirement: SAPB1.BoYesNoEnum;
  RetirementQuantity: number;
  RetirementAPC: number;
  ThirdParty: SAPB1.BoYesNoEnum;
  ExpenseType: string;
  ReceiptNumber: string;
  ExpenseOperationType: SAPB1.BoExpenseOperationTypeEnum;
  FederalTaxID: string;
  EnableReturnCost: SAPB1.BoYesNoEnum;
  ReturnCost: number;
  LineVendor: string;
  UoMEntry: number;
  UoMCode: string;
  InventoryQuantity: number;
  RemainingOpenInventoryQuantity: number;
  ParentLineNum: number;
  Incoterms: number;
  TransportMode: number;
  ItemType: SAPB1.BoDocItemType;
  ChangeInventoryQuantityIndependently: SAPB1.BoYesNoEnum;
  FreeOfChargeBP: SAPB1.BoYesNoEnum;
  U_TransfQty: number;
  U_CON_Consignment: string;
  U_CON_BaseSalesOrder: number;
  U_CON_BaseLineNum: number;
  U_CON_DestWhse: string;
  U_CON_LeadTime: string;
  LineTaxJurisdictions: SAPB1.LineTaxJurisdiction[];
  GeneratedAssets: SAPB1.GeneratedAsset[];
  DocumentLineAdditionalExpenses: SAPB1.DocumentLineAdditionalExpense[];
  WithholdingTaxLines: SAPB1.WithholdingTaxLine[];
  SerialNumbers: SAPB1.SerialNumber[];
  BatchNumbers: SAPB1.BatchNumber[];
  DocumentLinesBinAllocations: SAPB1.DocumentLinesBinAllocation[];
}

export class LineTaxJurisdiction {
  JurisdictionCode: string;
  JurisdictionType: number;
  TaxAmount: number;
  TaxAmountSC: number;
  TaxAmountFC: number;
  TaxRate: number;
  DocEntry: number;
  LineNumber: number;
  RowSequence: number;
}

export class GeneratedAsset {
  DocEntry: number;
  LineNumber: number;
  VisualOrder: number;
  AssetCode: string;
  Status: SAPB1.GeneratedAssetStatusEnum;
  Remarks: string;
  SerialNumber: string;
  amount: number;
  amountSC: number;
}

export class DocumentLineAdditionalExpense {
  LineNumber: number;
  GroupCode: number;
  ExpenseCode: number;
  LineTotal: number;
  LineTotalFC: number;
  LineTotalSys: number;
  PaidToDate: number;
  PaidToDateFC: number;
  PaidToDateSys: number;
  TaxLiable: SAPB1.BoYesNoEnum;
  VatGroup: string;
  TaxPercent: number;
  TaxSum: number;
  TaxSumFC: number;
  TaxSumSys: number;
  DeductibleTaxSum: number;
  DeductibleTaxSumFC: number;
  DeductibleTaxSumSys: number;
  AquisitionTax: SAPB1.BoYesNoEnum;
  TaxCode: string;
  TaxType: SAPB1.BoAdEpnsTaxTypes;
  TaxPaid: number;
  TaxPaidFC: number;
  TaxPaidSys: number;
  EqualizationTaxPercent: number;
  EqualizationTaxSum: number;
  EqualizationTaxFC: number;
  EqualizationTaxSys: number;
  TaxTotalSum: number;
  TaxTotalSumFC: number;
  TaxTotalSumSys: number;
  WTLiable: SAPB1.BoYesNoEnum;
  BaseGroup: number;
  DistributionRule: string;
  Project: string;
  DistributionRule2: string;
  DistributionRule3: string;
  DistributionRule4: string;
  DistributionRule5: string;
  LineExpenseTaxJurisdictions: SAPB1.LineExpenseTaxJurisdiction[];
}

export class LineExpenseTaxJurisdiction {
  JurisdictionCode: string;
  JurisdictionType: number;
  TaxAmount: number;
  TaxAmountSC: number;
  TaxAmountFC: number;
  TaxRate: number;
  DocEntry: number;
  LineNumber: number;
  RowSequence: number;
}

export class WithholdingTaxLine {
  WTCode: string;
  WTAmountSys: number;
  WTAmountFC: number;
  WTAmount: number;
  WithholdingType: string;
  TaxableAmountinSys: number;
  TaxableAmountFC: number;
  TaxableAmount: number;
  RoundingType: string;
  Rate: number;
  Criteria: string;
  Category: string;
  BaseType: string;
  AppliedWTAmountSys: number;
  AppliedWTAmountFC: number;
  AppliedWTAmount: number;
  GLAccount: string;
  LineNum: number;
  BaseDocEntry: number;
  BaseDocLine: number;
  BaseDocType: number;
  BaseDocumentReference: number;
  Status: SAPB1.BoStatus;
  TargetAbsEntry: number;
  TargetDocumentType: number;
  CSTCodeIncoming: string;
  CSTCodeOutgoing: string;
}

export class SerialNumber {
  ManufacturerSerialNumber: string;
  InternalSerialNumber: string;
  ExpiryDate: Date;
  ManufactureDate: Date;
  ReceptionDate: Date;
  WarrantyStart: Date;
  WarrantyEnd: Date;
  Location: string;
  Notes: string;
  BatchID: string;
  SystemSerialNumber: number;
  BaseLineNumber: number;
  Quantity: number;
  TrackingNote: number;
  TrackingNoteLine: number;
  U_CON_CountCost: number;
}

export class BatchNumber {
  BatchNumber: string;
  ManufacturerSerialNumber: string;
  InternalSerialNumber: string;
  ExpiryDate: Date;
  ManufacturingDate: Date;
  AddmisionDate: Date;
  Location: string;
  Notes: string;
  Quantity: number;
  BaseLineNumber: number;
  TrackingNote: number;
  TrackingNoteLine: number;
  U_CON_CountCost: number;
}

export class DocumentLinesBinAllocation {
  BinAbsEntry: number;
  Quantity: number;
  AllowNegativeQuantity: SAPB1.BoYesNoEnum;
  SerialAndBatchNumbersBaseLine: number;
  BaseLineNumber: number;
}

export class DocumentAdditionalExpense {
  ExpenseCode: number;
  LineTotal: number;
  LineTotalFC: number;
  LineTotalSys: number;
  PaidToDate: number;
  PaidToDateFC: number;
  PaidToDateSys: number;
  Remarks: string;
  DistributionMethod: SAPB1.BoAdEpnsDistribMethods;
  TaxLiable: SAPB1.BoYesNoEnum;
  VatGroup: string;
  TaxPercent: number;
  TaxSum: number;
  TaxSumFC: number;
  TaxSumSys: number;
  DeductibleTaxSum: number;
  DeductibleTaxSumFC: number;
  DeductibleTaxSumSys: number;
  AquisitionTax: SAPB1.BoYesNoEnum;
  TaxCode: string;
  TaxType: SAPB1.BoAdEpnsTaxTypes;
  TaxPaid: number;
  TaxPaidFC: number;
  TaxPaidSys: number;
  EqualizationTaxPercent: number;
  EqualizationTaxSum: number;
  EqualizationTaxFC: number;
  EqualizationTaxSys: number;
  TaxTotalSum: number;
  TaxTotalSumFC: number;
  TaxTotalSumSys: number;
  BaseDocEntry: number;
  BaseDocLine: number;
  BaseDocType: number;
  BaseDocumentReference: number;
  LineNum: number;
  LastPurchasePrice: SAPB1.BoYesNoEnum;
  Status: SAPB1.BoStatus;
  Stock: SAPB1.BoYesNoEnum;
  TargetAbsEntry: number;
  TargetType: number;
  WTLiable: SAPB1.BoYesNoEnum;
  DistributionRule: string;
  Project: string;
  DistributionRule2: string;
  DistributionRule3: string;
  DistributionRule4: string;
  DistributionRule5: string;
  LineGross: number;
  LineGrossSys: number;
  LineGrossFC: number;
  DocExpenseTaxJurisdictions: SAPB1.DocExpenseTaxJurisdiction[];
}

export class DocExpenseTaxJurisdiction {
  JurisdictionCode: string;
  JurisdictionType: number;
  TaxAmount: number;
  TaxAmountSC: number;
  TaxAmountFC: number;
  TaxRate: number;
  DocEntry: number;
  LineNumber: number;
  RowSequence: number;
}

export class WithholdingTaxDataWTX {
  WTAmountSys: number;
  WTAmountFC: number;
  WTAmount: number;
  WithholdingType: string;
  TaxableAmountinSys: number;
  TaxableAmountFC: number;
  TaxableAmount: number;
  Rate: number;
  Category: string;
  BaseType: string;
  AppliedWTAmountSys: number;
  AppliedWTAmountFC: number;
  AppliedWTAmount: number;
  GLAccount: string;
  LineNum: number;
  BaseDocEntry: number;
  BaseDocLine: number;
  BaseDocType: string;
  WTAbsId: string;
  ExemptRate: number;
  BaseNetAmountSys: number;
  BaseNetAmountFC: number;
  BaseNetAmount: number;
  BaseVatmountSys: number;
  BaseVatmountFC: number;
  BaseVatmount: number;
  AccumBaseAmountSys: number;
  AccumBaseAmountFC: number;
  AccumBaseAmount: number;
  AccumWTaxAmountSys: number;
  AccumWTaxAmountFC: number;
  AccumWTaxAmount: number;
}

export class WithholdingTaxData {
  WTCode: string;
  WTAmountSys: number;
  WTAmountFC: number;
  WTAmount: number;
  WithholdingType: string;
  TaxableAmountinSys: number;
  TaxableAmountFC: number;
  TaxableAmount: number;
  RoundingType: string;
  Rate: number;
  Criteria: string;
  Category: string;
  BaseType: string;
  AppliedWTAmountSys: number;
  AppliedWTAmountFC: number;
  AppliedWTAmount: number;
  GLAccount: string;
  LineNum: number;
  BaseDocEntry: number;
  BaseDocLine: number;
  BaseDocType: number;
  BaseDocumentReference: number;
  Status: SAPB1.BoStatus;
  TargetAbsEntry: number;
  TargetDocumentType: number;
}

export class DocumentPackage {
  Number: number;
  Type: string;
  TotalWeight: number;
  Units: number;
  DocumentPackageItems: SAPB1.DocumentPackageItem[];
}

export class DocumentPackageItem {
  PackageNumber: number;
  ItemCode: string;
  Quantity: number;
  UoMEntry: number;
  MeasureUnit: string;
  UnitsOfMeasurement: number;
}

export class DocumentSpecialLine {
  LineNum: number;
  AfterLineNumber: number;
  OrderNumber: number;
  LineType: SAPB1.BoDocSpecialLineType;
  Subtotal: number;
  LineText: string;
  SubtotalFC: number;
  SubtotalSC: number;
  TaxAmount: number;
  TaxAmountFC: number;
  TaxAmountSC: number;
  Freight1: number;
  Freight1FC: number;
  Freight1SC: number;
  Freight2: number;
  Freight2FC: number;
  Freight2SC: number;
  Freight3: number;
  Freight3FC: number;
  Freight3SC: number;
  GrossTotal: number;
  GrossTotalFC: number;
  GrossTotalSC: number;
}

export class DocumentInstallment {
  DueDate: Date;
  Percentage: number;
  Total: number;
  LastDunningDate: Date;
  DunningLevel: number;
  TotalFC: number;
  InstallmentId: number;
  PaymentOrdered: SAPB1.BoYesNoEnum;
}

export class DownPaymentToDraw {
  DocEntry: number;
  PostingDate: Date;
  DueDate: Date;
  Name: string;
  Details: string;
  AmountToDraw: number;
  DownPaymentType: SAPB1.DownPaymentTypeEnum;
  AmountToDrawFC: number;
  AmountToDrawSC: number;
  DocInternalID: number;
  RowNum: number;
  DocNumber: number;
  Tax: number;
  TaxFC: number;
  TaxSC: number;
  GrossAmountToDraw: number;
  GrossAmountToDrawFC: number;
  GrossAmountToDrawSC: number;
  IsGrossLine: SAPB1.BoYesNoEnum;
  DownPaymentsToDrawDetails: SAPB1.DownPaymentToDrawDetails[];
}

export class DownPaymentToDrawDetails {
  DocInternalID: number;
  RowNum: number;
  SeqNum: number;
  DocEntry: number;
  VatGroupCode: string;
  VatPercent: number;
  AmountToDraw: number;
  AmountToDrawFC: number;
  AmountToDrawSC: number;
  Tax: number;
  TaxFC: number;
  TaxSC: number;
  IsGrossLine: SAPB1.BoYesNoEnum;
  GrossAmountToDraw: number;
  GrossAmountToDrawFC: number;
  GrossAmountToDrawSC: number;
  LineType: SAPB1.LineTypeEnum;
  TaxAdjust: SAPB1.BoYesNoEnum;
}

export class TaxExtension {
  TaxId0: string;
  TaxId1: string;
  TaxId2: string;
  TaxId3: string;
  TaxId4: string;
  TaxId5: string;
  TaxId6: string;
  TaxId7: string;
  TaxId8: string;
  TaxId9: string;
  State: string;
  County: string;
  Incoterms: string;
  Vehicle: string;
  VehicleState: string;
  NFRef: string;
  Carrier: string;
  PackQuantity: number;
  PackDescription: string;
  Brand: string;
  ShipUnitNo: number;
  NetWeight: number;
  GrossWeight: number;
  StreetS: string;
  BlockS: string;
  BuildingS: string;
  CityS: string;
  ZipCodeS: string;
  CountyS: string;
  StateS: string;
  CountryS: string;
  StreetB: string;
  BlockB: string;
  BuildingB: string;
  CityB: string;
  ZipCodeB: string;
  CountyB: string;
  StateB: string;
  CountryB: string;
  ImportOrExport: SAPB1.BoYesNoEnum;
  MainUsage: number;
  GlobalLocationNumberS: string;
  GlobalLocationNumberB: string;
  TaxId12: string;
  TaxId13: string;
}

export class AddressExtension {
  ShipToStreet: string;
  ShipToStreetNo: string;
  ShipToBlock: string;
  ShipToBuilding: string;
  ShipToCity: string;
  ShipToZipCode: string;
  ShipToCounty: string;
  ShipToState: string;
  ShipToCountry: string;
  ShipToAddressType: string;
  BillToStreet: string;
  BillToStreetNo: string;
  BillToBlock: string;
  BillToBuilding: string;
  BillToCity: string;
  BillToZipCode: string;
  BillToCounty: string;
  BillToState: string;
  BillToCountry: string;
  BillToAddressType: string;
  ShipToGlobalLocationNumber: string;
  BillToGlobalLocationNumber: string;
  ShipToAddress2: string;
  ShipToAddress3: string;
  BillToAddress2: string;
  BillToAddress3: string;
}

export class DeductionTaxHierarchy {
  AbsEntry: number;
  BPCode: string;
  HierarchyCode: string;
  HierarchyName: string;
  ValidFrom: Date;
  ValidUntil: Date;
  DeductionPercent: number;
  MaximumTotal: number;
  LastUpdated: Date;
  DeductionTaxHierarchies_Lines: SAPB1.DeductionTaxHierarchies_Line[];
}

export class DeductionTaxHierarchyKey {
  AbsEntry: number;
}

export class DeductionTaxHierarchies_Line {
  RowNumber: number;
  DeductionPercent: number;
  MaximumTotal: number;
}

export class TaxWebSite {
  AbsEntry: number;
  WebSiteName: string;
  WebSiteURL: string;
  Description: string;
}

export class TaxWebSiteKey {
  AbsEntry: number;
}

export class TaxWebSiteParams {
  AbsEntry: number;
  WebSiteName: string;
}

export class DeductionTaxGroupParams {
  GroupKey: number;
}

export class DeductionTaxGroup {
  GroupKey: number;
  GroupCode: SAPB1.BoDeductionTaxGroupCodeEnum;
  GroupName: string;
  MaxRedin: number;
  GroupExtendedCode: string;
}

export class DeductionTaxGroupKey {
  GroupKey: number;
}

export class StockTransferParams {
  DocEntry: number;
}

export class StockTransfer {
  DocEntry: number;
  Series: number;
  Printed: SAPB1.BoYesNoEnum;
  DocDate: Date;
  DueDate: Date;
  CardCode: string;
  CardName: string;
  Address: string;
  Reference1: string;
  Reference2: string;
  Comments: string;
  JournalMemo: string;
  PriceList: number;
  SalesPersonCode: number;
  FromWarehouse: string;
  ToWarehouse: string;
  CreationDate: Date;
  UpdateDate: Date;
  FinancialPeriod: number;
  TransNum: number;
  DocNum: number;
  TaxDate: Date;
  ContactPerson: number;
  FolioPrefixString: string;
  FolioNumber: number;
  DocObjectCode: string;
  AuthorizationStatus: SAPB1.StockTransferAuthorizationStatusEnum;
  BPLID: number;
  BPLName: string;
  VATRegNum: string;
  AuthorizationCode: string;
  StartDeliveryDate: Date;
  StartDeliveryTime: Date;
  EndDeliveryDate: Date;
  EndDeliveryTime: Date;
  VehiclePlate: string;
  ATDocumentType: string;
  EDocExportFormat: number;
  ElecCommStatus: SAPB1.ElecCommStatusEnum;
  ElecCommMessage: string;
  PointOfIssueCode: string;
  Letter: SAPB1.FolioLetterEnum;
  FolioNumberFrom: number;
  FolioNumberTo: number;
  AttachmentEntry: number;
  DocumentStatus: SAPB1.BoStatus;
  U_DotchiProcsFee: string;
  U_CON_Test_Doc: string;
  U_BXPEmpID: number;
  U_BXPTType: string;
  U_BXPDelNo: string;
  StockTransfer_ApprovalRequests: SAPB1.StockTransfer_ApprovalRequest[];
  StockTransferLines: SAPB1.StockTransferLine[];
  StockTransferTaxExtension: SAPB1.StockTransferTaxExtension;
}

export class StockTransferKey {
  DocEntry: number;
}

export class StockTransfer_ApprovalRequest {
  ApprovalTemplatesID: number;
  Remarks: string;
}

export class StockTransferLine {
  LineNum: number;
  DocEntry: number;
  ItemCode: string;
  ItemDescription: string;
  Quantity: number;
  Price: number;
  Currency: string;
  Rate: number;
  DiscountPercent: number;
  VendorNum: string;
  SerialNumber: string;
  WarehouseCode: string;
  FromWarehouseCode: string;
  ProjectCode: string;
  Factor: number;
  Factor2: number;
  Factor3: number;
  Factor4: number;
  DistributionRule: string;
  DistributionRule2: string;
  DistributionRule3: string;
  DistributionRule4: string;
  DistributionRule5: string;
  UseBaseUnits: SAPB1.BoYesNoEnum;
  MeasureUnit: string;
  UnitsOfMeasurment: number;
  BaseType: SAPB1.InvBaseDocTypeEnum;
  BaseLine: number;
  BaseEntry: number;
  UnitPrice: number;
  UoMEntry: number;
  UoMCode: string;
  InventoryQuantity: number;
  RemainingOpenQuantity: number;
  RemainingOpenInventoryQuantity: number;
  LineStatus: SAPB1.BoStatus;
  U_TransfQty: number;
  U_CON_Consignment: string;
  U_CON_BaseSalesOrder: number;
  U_CON_BaseLineNum: number;
  U_CON_DestWhse: string;
  U_CON_LeadTime: string;
  SerialNumbers: SAPB1.SerialNumber[];
  BatchNumbers: SAPB1.BatchNumber[];
  StockTransferLinesBinAllocations: SAPB1.StockTransferLinesBinAllocation[];
}

export class StockTransferLinesBinAllocation {
  BinAbsEntry: number;
  Quantity: number;
  AllowNegativeQuantity: SAPB1.BoYesNoEnum;
  SerialAndBatchNumbersBaseLine: number;
  BinActionType: SAPB1.BinActionTypeEnum;
  BaseLineNumber: number;
}

export class StockTransferTaxExtension {
  SupportVAT: SAPB1.BoYesNoEnum;
  FormNumber: string;
  TransactionCategory: string;
}

export class Branch {
  Code: number;
  Name: string;
  Description: string;
}

export class BranchKey {
  Code: number;
}

export class BranchParams {
  Code: number;
  Name: string;
}

export class Department {
  Code: number;
  Name: string;
  Description: string;
}

export class DepartmentKey {
  Code: number;
}

export class DepartmentParams {
  Code: number;
  Name: string;
}

export class UserParams {
  InternalKey: number;
}

export class User {
  InternalKey: number;
  UserPassword: string;
  UserCode: string;
  UserName: string;
  Superuser: SAPB1.BoYesNoEnum;
  eMail: string;
  MobilePhoneNumber: string;
  Defaults: string;
  FaxNumber: string;
  Branch: number;
  Department: number;
  Locked: SAPB1.BoYesNoEnum;
  Group: SAPB1.BoUserGroup;
  MaxDiscountGeneral: number;
  MaxDiscountSales: number;
  MaxDiscountPurchase: number;
  CashLimit: SAPB1.BoYesNoEnum;
  MaxCashAmtForIncmngPayts: number;
  LastLogoutDate: Date;
  LastLoginTime: Date;
  LastLogoutTime: Date;
  LastPasswordChangeTime: Date;
  LastPasswordChangedBy: string;
  UserPermission: SAPB1.UserPermissionItem[];
  UserActionRecord: SAPB1.UserActionRecordItem[];
  UserBranchAssignment: SAPB1.UserBranchAssignmentItem[];
}

export class UserKey {
  InternalKey: number;
}

export class UserPermissionItem {
  UserCode: number;
  PermissionID: string;
  Permission: SAPB1.BoPermission;
}

export class UserActionRecordItem {
  UserCode: string;
  Action: SAPB1.UserActionTypeEnum;
  ActionBy: string;
  ClientIP: string;
  ClientName: string;
  ActionDate: Date;
  ActionTime: Date;
  WindowsSession: number;
  WindowsUser: string;
  ProcessName: string;
  ProcessID: number;
  AliveDuration: number;
}

export class UserBranchAssignmentItem {
  UserCode: string;
  BPLID: number;
}

export class ApprovalStage {
  Code: number;
  Name: string;
  NoOfApproversRequired: number;
  Remarks: string;
  ApprovalStageApprovers: SAPB1.ApprovalStageApprover[];
}

export class ApprovalStageKey {
  Code: number;
}

export class ApprovalStageApprover {
  UserID: number;
}

export class ApprovalStageParams {
  Code: number;
  Name: string;
}

export class ApprovalTemplate {
  Code: number;
  Name: string;
  Remarks: string;
  UseTerms: SAPB1.BoYesNoEnum;
  IsActive: SAPB1.BoYesNoEnum;
  IsActiveWhenUpdatingDocuments: SAPB1.BoYesNoEnum;
  ApprovalTemplateUsers: SAPB1.ApprovalTemplateUser[];
  ApprovalTemplateStages: SAPB1.ApprovalTemplateStage[];
  ApprovalTemplateDocuments: SAPB1.ApprovalTemplateDocument[];
  ApprovalTemplateTerms: SAPB1.ApprovalTemplateTerm[];
  ApprovalTemplateQueries: SAPB1.ApprovalTemplateQuery[];
}

export class ApprovalTemplateKey {
  Code: number;
}

export class ApprovalTemplateUser {
  UserID: number;
}

export class ApprovalTemplateStage {
  SortID: number;
  ApprovalStageCode: number;
  Remarks: string;
}

export class ApprovalTemplateDocument {
  DocumentType: SAPB1.ApprovalTemplatesDocumentTypeEnum;
}

export class ApprovalTemplateTerm {
  ConditionType: SAPB1.ApprovalTemplateConditionTypeEnum;
  OperationType: SAPB1.ApprovalTemplateOperationTypeEnum;
  Value: string;
}

export class ApprovalTemplateQuery {
  QueryID: number;
}

export class ApprovalTemplateParams {
  Code: number;
  Name: string;
}

export class Cockpit {
  AbsEntry: number;
  Code: number;
  Name: string;
  Description: string;
  UserSignature: number;
  Date: Date;
  Time: Date;
  Manufacturer: string;
  Publisher: string;
  CockpitType: SAPB1.BoCockpitTypeEnum;
}

export class CockpitKey {
  AbsEntry: number;
}

export class CockpitParams {
  AbsEntry: number;
  CockpitType: SAPB1.BoCockpitTypeEnum;
}

export class ApprovalRequest {
  Code: number;
  ObjectType: string;
  IsDraft: string;
  ObjectEntry: number;
  Status: SAPB1.BoApprovalRequestStatusEnum;
  Remarks: string;
  CurrentStage: number;
  OriginatorID: number;
  CreationDate: Date;
  CreationTime: Date;
  ApprovalRequestLines: SAPB1.ApprovalRequestLine[];
  ApprovalRequestDecisions: SAPB1.ApprovalRequestDecision[];
}

export class ApprovalRequestKey {
  Code: number;
}

export class ApprovalRequestLine {
  StageCode: number;
  UserID: number;
  Status: SAPB1.BoApprovalRequestDecisionEnum;
  Remarks: string;
  UpdateDate: Date;
  UpdateTime: Date;
  CreationDate: Date;
  CreationTime: Date;
}

export class ApprovalRequestDecision {
  ApproverUserName: string;
  ApproverPassword: string;
  Status: SAPB1.BoApprovalRequestDecisionEnum;
  Remarks: string;
}

export class ApprovalRequestParams {
  Code: number;
  Remarks: string;
  Status: SAPB1.BoApprovalRequestStatusEnum;
}

export class AdditionalExpense {
  Name: string;
  RevenuesAccount: string;
  ExpenseAccount: string;
  TaxLiable: SAPB1.BoYesNoEnum;
  FixedAmountRevenues: number;
  FixedAmountExpenses: number;
  OutputVATGroup: string;
  InputVATGroup: string;
  DistributionMethod: SAPB1.BoAeDistMthd;
  Includein1099: SAPB1.BoYesNoEnum;
  FreightOffsetAccount: string;
  WTLiable: string;
  ExpensCode: number;
  ExpenseExemptedAccount: string;
  RevenuesExemptedAccount: string;
  DistributionRule: string;
  DrawingMethod: SAPB1.DrawingMethodEnum;
  FreightType: SAPB1.FreightTypeEnum;
  Stock: SAPB1.BoYesNoEnum;
  LastPurchasePrice: SAPB1.BoYesNoEnum;
  Project: string;
  DistributionRule2: string;
  DistributionRule3: string;
  DistributionRule4: string;
  DistributionRule5: string;
}

export class AdditionalExpenseKey {
  ExpensCode: number;
}

export class BlanketAgreement {
  AgreementNo: number;
  BPCode: string;
  BPName: string;
  ContactPersonCode: number;
  StartDate: Date;
  EndDate: Date;
  TerminateDate: Date;
  Description: string;
  AgreementType: SAPB1.BlanketAgreementTypeEnum;
  Status: SAPB1.BlanketAgreementStatusEnum;
  Owner: number;
  IgnorePricesInAgreement: SAPB1.BoYesNoEnum;
  Renewal: SAPB1.BoYesNoEnum;
  RemindUnit: SAPB1.BoRemindUnits;
  RemindTime: number;
  Remarks: string;
  AttachmentEntry: number;
  SettlementProbability: number;
  AgreementMethod: SAPB1.BlanketAgreementMethodEnum;
  PaymentTerms: number;
  PriceList: number;
  SigningDate: Date;
  AmendmentTo: number;
  Series: number;
  DocNum: number;
  HandWritten: SAPB1.BoYesNoEnum;
  PeriodIndicator: string;
  PaymentMethod: string;
  BlanketAgreements_ItemsLines: SAPB1.BlanketAgreements_ItemsLine[];
}

export class BlanketAgreementKey {
  AgreementNo: number;
}

export class BlanketAgreements_ItemsLine {
  AgreementNo: number;
  AgreementRowNumber: number;
  ItemNo: string;
  ItemDescription: string;
  ItemGroup: number;
  PlannedQuantity: number;
  UnitPrice: number;
  PriceCurrency: string;
  CumulativeQuantity: number;
  CumulativeAmountLC: number;
  CumulativeAmountFC: number;
  FreeText: string;
  InventoryUoM: string;
  PortionOfReturns: number;
  EndOfWarranty: Date;
  PlannedAmountLC: number;
  PlannedAmountFC: number;
  LineDiscount: number;
  UoMEntry: number;
  UoMCode: string;
  UnitsOfMeasurement: number;
  BlanketAgreements_DetailsLines: SAPB1.BlanketAgreements_DetailsLine[];
}

export class BlanketAgreements_DetailsLine {
  AgreementNo: number;
  AgreementRowNumber: number;
  AgreementEffectiveRowNumber: number;
  Frequency: SAPB1.BlanketAgreementDatePeriodsEnum;
  From: Date;
  To: Date;
  ReleaseInformation: string;
  Quantity: number;
  Warehouse: string;
  FreeText: string;
  ConsumeSalesForecast: SAPB1.BoYesNoEnum;
  PlannedAmountLC: number;
  PlannedAmountFC: number;
}

export class BlanketAgreementsDocument {
  AgreementRowNumber: number;
  DocumentType: SAPB1.BlanketAgreementDocTypeEnum;
  DocumentNo: number;
  DocumentRowNumber: number;
  DocumentDate: Date;
  ItemNo: string;
  ItemDescription: string;
  UnitPrice: number;
  Quantity: number;
  Discount: number;
  UoM: string;
  RowStatus: SAPB1.BoStatus;
  UoMCode: string;
  UnitsOfMeasurement: number;
}

export class BlanketAgreementParams {
  AgreementNo: number;
}

export class SalesTaxAuthorityParams {
  Code: string;
  Type: number;
}

export class SalesTaxAuthority {
  UseTaxAccount: string;
  UserSignature: number;
  Type: number;
  AOrRTaxAccount: string;
  Rate: number;
  AOrPTaxAccount: string;
  NonDeductiblePrecent: number;
  NonDeductibleAccount: string;
  Name: string;
  DeferredTaxAccount: string;
  Code: string;
  MinTaxableAmount: number;
  MaxTaxableAmount: number;
  FlatTaxAmount: number;
  InclInPrice: SAPB1.BoYesNoEnum;
  Exempt: SAPB1.BoYesNoEnum;
  APExpAccount: string;
  ARExpAccount: string;
  InclInGrossRevenue: SAPB1.BoYesNoEnum;
  TextCode: number;
  TaxDefinitions: SAPB1.TaxDefinition[];
}

export class SalesTaxAuthorityKey {
  Type: number;
  Code: string;
}

export class TaxDefinition {
  Effectivefrom: Date;
  Rate: number;
}

export class SalesTaxAuthoritiesType {
  UserSignature: number;
  Name: string;
  VAT: SAPB1.BoYesNoEnum;
  Numerator: number;
  TaxCreditControl: SAPB1.BoYesNoEnum;
}

export class SalesTaxAuthoritiesTypeKey {
  Numerator: number;
}

export class SalesTaxCode {
  ValidForAR: SAPB1.BoYesNoEnum;
  ValidForAP: SAPB1.BoYesNoEnum;
  UserSignature: number;
  Rate: number;
  Name: string;
  Freight: SAPB1.BoYesNoEnum;
  Code: string;
  IsItemLevel: SAPB1.BoYesNoEnum;
  Inactive: SAPB1.BoYesNoEnum;
  FADebit: SAPB1.BoYesNoEnum;
  SalesTaxCodes_Lines: SAPB1.SalesTaxCodes_Line[];
}

export class SalesTaxCodeKey {
  Code: string;
}

export class SalesTaxCodes_Line {
  STATaxOnTaxType: number;
  STATaxonTaxCode: string;
  STCCode: string;
  STAType: number;
  STACode: string;
  RowNumber: number;
  EffectiveRate: number;
}

export class Country {
  Code: string;
  Name: string;
  CodeForReports: string;
  AddressFormat: number;
  EU: SAPB1.BoYesNoEnum;
  NumberOfDigitsForTaxID: number;
  BankCodeDigits: number;
  BankBranchDigits: number;
  BankAccountDigits: number;
  BankControlKeyDigits: number;
  DomesticAccountValidation: SAPB1.DomesticBankAccountValidationEnum;
  IbanValidation: SAPB1.BoYesNoEnum;
  Blacklisted: SAPB1.BoYesNoEnum;
  UICCountryCode: string;
}

export class CountryKey {
  Code: string;
}

export class CountryParams {
  Code: string;
  Name: string;
}

export class State {
  Code: string;
  Country: string;
  Name: string;
}

export class StateKey {
  Code: string;
  Country: string;
}

export class StateParams {
  Code: string;
  Country: string;
  Name: string;
}

export class GetChangeLogParams {
  PrimaryKey: string;
  UDOObjectCode: string;
  Object: SAPB1.BoChangeLogEnum;
}

export class ShowDifferenceParams {
  PrimaryKey: string;
  UDOObjectCode: string;
  Object: SAPB1.BoChangeLogEnum;
  LogInstance2: number;
  LogInstance: number;
}

export class ChangeLogParams {
  LogInstance: number;
  UpdatedDate: Date;
  UserName: string;
  ObjectCode: string;
}

export class ChangeLogDifferenceParams {
  Date: Date;
  ChangedField: string;
  OldValue: string;
  NewValue: string;
  UserName: string;
  ArrayOffset: number;
  LineNumber: string;
}

export class KPI {
  KPICode: string;
  KPIName: string;
  KPIType: SAPB1.KPITypeEnum;
  NumberOfColumns: number;
  KPI_ItemLines: SAPB1.KPI_ItemLine[];
}

export class KPIKey {
  KPICode: string;
}

export class KPI_ItemLine {
  KPICode: string;
  KPILineNumber: number;
  KPIName: string;
  KPIValue1: number;
  KPIValue2: number;
  KPIValue3: number;
  KPIValue4: number;
  KPIValue5: number;
  KPIValue6: number;
  KPIValue7: number;
  KPIValue8: number;
  KPIValue9: number;
  KPIValue10: number;
  KPIValue11: number;
  KPIValue12: number;
  KPIValue13: number;
  KPIValue14: number;
  KPIValue15: number;
  KPIValue16: number;
  KPIValue17: number;
  KPIValue18: number;
  KPIValue19: number;
  KPIValue20: number;
  KPIValue21: number;
  KPIValue22: number;
  KPIValue23: number;
  KPIValue24: number;
  KPIValue25: number;
  KPIValue26: number;
  KPIValue27: number;
  KPIValue28: number;
  KPIValue29: number;
  KPIValue30: number;
}

export class KPIParams {
  KPICode: string;
  KPIName: string;
}

export class TargetGroup {
  TargetGroupCode: string;
  TargetGroupName: string;
  TargetGroupType: SAPB1.TargetGroupTypeEnum;
  TargetGroupsDetails: SAPB1.TargetGroupsDetail[];
}

export class TargetGroupKey {
  TargetGroupCode: string;
}

export class TargetGroupsDetail {
  TargetGroupCode: string;
  BusinessPartnerCode: string;
  BusinessPartnerName: string;
  GroupCode: string;
  Industry: string;
  ActiveStatus: SAPB1.TargetGroupsDetailStatusEnum;
  ContactPerson: string;
  Title: string;
  Position: string;
  E_Mail: string;
  Telephone: string;
  MobilePhone: string;
  Fax: string;
  Address: string;
  Street: string;
  Block: string;
  City: string;
  ZipCode: string;
  County: string;
  State: string;
  Country: string;
  Building: string;
}

export class TargetGroupParams {
  TargetGroupCode: string;
  TargetGroupName: string;
}

export class ExtendedTranslation {
  DocEntry: number;
  Category: SAPB1.TranslationCategoryEnum;
  ID: string;
  SecondaryID: string;
  SourceLanguage: number;
  UpdateDate: Date;
  CreateDate: Date;
  ExtendedTranslation_ItemLines: SAPB1.ExtendedTranslation_ItemLine[];
}

export class ExtendedTranslationKey {
  DocEntry: number;
}

export class ExtendedTranslation_ItemLine {
  DocEntry: number;
  LineNumber: number;
  ItemCode: string;
  ItemType: string;
  SlimType: string;
  MaxLength: number;
  SourceText: string;
  Memo: string;
  ExtendedTranslation_ResultLines: SAPB1.ExtendedTranslation_ResultLine[];
}

export class ExtendedTranslation_ResultLine {
  DocEntry: number;
  LineNumber: number;
  SubLineNumber: number;
  LanguageCode: number;
  TranslatedText: string;
}

export class ExtendedTranslationParams {
  DocEntry: number;
  Category: SAPB1.TranslationCategoryEnum;
  ID: string;
  SecondaryID: string;
}

export class Campaign {
  CampaignNumber: number;
  CampaignName: string;
  CampaignType: SAPB1.CampaignTypeEnum;
  TargetGroup: string;
  Owner: number;
  Status: SAPB1.CampaignStatusEnum;
  StartDate: Date;
  FinishDate: Date;
  Remarks: string;
  GeneratedByWizard: SAPB1.BoYesNoEnum;
  AttachementsEntry: number;
  TargetGroupType: SAPB1.TargetGroupTypeEnum;
  CampaignBusinessPartners: SAPB1.CampaignBusinessPartner[];
  CampaignItems: SAPB1.CampaignItem[];
  CampaignPartners: SAPB1.CampaignPartner[];
}

export class CampaignKey {
  CampaignNumber: number;
}

export class CampaignBusinessPartner {
  CampaignNumber: number;
  CampaignLineNumber: number;
  BPCode: string;
  BPName: string;
  BPGroupName: string;
  BPIndustryName: string;
  BPStatus: string;
  ContactCode: string;
  ContactTitle: string;
  ContactPosition: string;
  ContactEmail: string;
  ContactTelephone: string;
  ContactMobile: string;
  ContactFax: string;
  ContactAddress: string;
  Response: SAPB1.BoYesNoEnum;
  RelatedSalesOpportunity: number;
  Street: string;
  Block: string;
  City: string;
  ZipCode: string;
  County: string;
  State: string;
  Country: string;
  Building: string;
  DocType: SAPB1.LinkedDocTypeEnum;
  IsShowLinkedDoc: SAPB1.BoYesNoEnum;
  DocNumber: number;
  DocEntry: number;
  FirstName: string;
  MiddleName: string;
  LastName: string;
  AddressID: string;
  AddressType: string;
  AddressName2: string;
  AddressName3: string;
  FederalTaxID: string;
  StreetNo: string;
  CreateActivity: SAPB1.BoYesNoEnum;
  AssignTo: SAPB1.CampaignAssignToEnum;
  AssignName: number;
  ResponseType: string;
}

export class CampaignItem {
  CampaignNumber: number;
  CampaignLineNumber: number;
  ItemCode: string;
  ItemName: string;
  ItemType: SAPB1.CampaignItemTypeEnum;
  ItemGroup: string;
}

export class CampaignPartner {
  CampaignNumber: number;
  CampaignLineNumber: number;
  PartnerID: number;
  RelationshipCode: number;
  RelatedBP: string;
  Details: string;
}

export class CampaignParams {
  CampaignNumber: number;
  CampaignName: string;
}

export class RetornoCode {
  AbsEntry: number;
  OccurenceCode: number;
  MovementCode: number;
  BoeStatus: SAPB1.BoBoeStatus;
  Description: string;
  Color: number;
  FileFormat: string;
  BankCode: string;
}

export class RetornoCodeKey {
  AbsEntry: number;
}

export class RetornoCodeParams {
  AbsEntry: number;
  OccurenceCode: number;
  MovementCode: number;
  BoeStatus: SAPB1.BoBoeStatus;
  Description: string;
  Color: number;
  FileFormat: string;
  BankCode: string;
}

export class OccurenceCode {
  AbsEntry: number;
  Code: string;
  Description: string;
  Note: string;
  RequestedBoeStatus: SAPB1.BoBoeStatus;
  IsMovement: SAPB1.BoYesNoEnum;
}

export class OccurenceCodeKey {
  AbsEntry: number;
}

export class OccurenceCodeParams {
  AbsEntry: number;
  Code: string;
  Description: string;
  Note: string;
  RequestedBoeStatus: SAPB1.BoBoeStatus;
  IsMovement: SAPB1.BoYesNoEnum;
}

export class CashDiscount {
  Code: string;
  Name: string;
  ByDate: SAPB1.BoYesNoEnum;
  Freight: SAPB1.BoYesNoEnum;
  Tax: SAPB1.BoYesNoEnum;
  DiscountLines: SAPB1.DiscountLine[];
}

export class CashDiscountKey {
  Code: string;
}

export class DiscountLine {
  DiscountCode: string;
  LineId: number;
  NumOfDays: number;
  Discount: number;
  Day: number;
  Month: number;
}

export class CashDiscountParams {
  Code: string;
  Name: string;
}

export class QueryCategory {
  Code: number;
  Name: string;
  Permissions: string;
}

export class QueryCategoryKey {
  Code: number;
}

export class ResourceCapacity {
  Id: number;
  Code: string;
  Warehouse: string;
  Date: Date;
  Type: SAPB1.ResourceCapacityTypeEnum;
  Capacity: number;
  SourceType: SAPB1.ResourceCapacitySourceTypeEnum;
  SourceEntry: number;
  SourceLineNum: number;
  BaseType: SAPB1.ResourceCapacityBaseTypeEnum;
  BaseEntry: number;
  BaseLineNum: number;
  Action: SAPB1.ResourceCapacityActionEnum;
  OwningType: SAPB1.ResourceCapacityOwningTypeEnum;
  OwningEntry: number;
  OwningLineNum: number;
  RevertedType: SAPB1.ResourceCapacityRevertedTypeEnum;
  RevertedEntry: number;
  RevertedLineNum: number;
  MemoSource: SAPB1.ResourceCapacityMemoSourceEnum;
  Memo: string;
}

export class ResourceCapacityKey {
  Id: number;
}

export class ResourceCapacityParams {
  Id: number;
  Code: string;
  Warehouse: string;
  Date: Date;
  Type: SAPB1.ResourceCapacityTypeEnum;
  Capacity: number;
  SourceType: SAPB1.ResourceCapacitySourceTypeEnum;
  SourceEntry: number;
  SourceLineNum: number;
  BaseType: SAPB1.ResourceCapacityBaseTypeEnum;
  BaseEntry: number;
  BaseLineNum: number;
  Action: SAPB1.ResourceCapacityActionEnum;
  OwningType: SAPB1.ResourceCapacityOwningTypeEnum;
  OwningEntry: number;
  OwningLineNum: number;
  RevertedType: SAPB1.ResourceCapacityRevertedTypeEnum;
  RevertedEntry: number;
  RevertedLineNum: number;
  MemoSource: SAPB1.ResourceCapacityMemoSourceEnum;
  Memo: string;
}

export class ResourceCapacityWithFilterParams {
  Code: string;
  Warehouse: string;
  Date: Date;
  Type: SAPB1.ResourceCapacityTypeEnum;
}

export class FactoringIndicator {
  IndicatorCode: string;
  IndicatorName: string;
}

export class FactoringIndicatorKey {
  IndicatorCode: string;
}

export class PaymentParams {
  DocEntry: number;
}

export class Payment {
  DocNum: number;
  DocType: SAPB1.BoRcptTypes;
  HandWritten: SAPB1.BoYesNoEnum;
  Printed: SAPB1.BoYesNoEnum;
  DocDate: Date;
  CardCode: string;
  CardName: string;
  Address: string;
  CashAccount: string;
  DocCurrency: string;
  CashSum: number;
  CheckAccount: string;
  TransferAccount: string;
  TransferSum: number;
  TransferDate: Date;
  TransferReference: string;
  LocalCurrency: SAPB1.BoYesNoEnum;
  DocRate: number;
  Reference1: string;
  Reference2: string;
  CounterReference: string;
  Remarks: string;
  JournalRemarks: string;
  SplitTransaction: SAPB1.BoYesNoEnum;
  ContactPersonCode: number;
  ApplyVAT: SAPB1.BoYesNoEnum;
  TaxDate: Date;
  Series: number;
  BankCode: string;
  BankAccount: string;
  DiscountPercent: number;
  ProjectCode: string;
  CurrencyIsLocal: SAPB1.BoYesNoEnum;
  DeductionPercent: number;
  DeductionSum: number;
  CashSumFC: number;
  CashSumSys: number;
  BoeAccount: string;
  BillOfExchangeAmount: number;
  BillofExchangeStatus: SAPB1.BoBoeStatus;
  BillOfExchangeAmountFC: number;
  BillOfExchangeAmountSC: number;
  BillOfExchangeAgent: string;
  WTCode: string;
  WTAmount: number;
  WTAmountFC: number;
  WTAmountSC: number;
  WTAccount: string;
  WTTaxableAmount: number;
  Proforma: SAPB1.BoYesNoEnum;
  PayToBankCode: string;
  PayToBankBranch: string;
  PayToBankAccountNo: string;
  PayToCode: string;
  PayToBankCountry: string;
  IsPayToBank: SAPB1.BoYesNoEnum;
  DocEntry: number;
  PaymentPriority: SAPB1.BoPaymentPriorities;
  TaxGroup: string;
  BankChargeAmount: number;
  BankChargeAmountInFC: number;
  BankChargeAmountInSC: number;
  UnderOverpaymentdifference: number;
  UnderOverpaymentdiffSC: number;
  WtBaseSum: number;
  WtBaseSumFC: number;
  WtBaseSumSC: number;
  VatDate: Date;
  TransactionCode: string;
  PaymentType: SAPB1.BoORCTPaymentTypeEnum;
  TransferRealAmount: number;
  DocObjectCode: SAPB1.BoPaymentsObjectType;
  DocTypte: SAPB1.BoRcptTypes;
  DueDate: Date;
  LocationCode: number;
  Cancelled: SAPB1.BoYesNoEnum;
  ControlAccount: string;
  UnderOverpaymentdiffFC: number;
  AuthorizationStatus: SAPB1.PaymentsAuthorizationStatusEnum;
  BPLID: number;
  BPLName: string;
  VATRegNum: string;
  PaymentChecks: SAPB1.PaymentCheck[];
  PaymentInvoices: SAPB1.PaymentInvoice[];
  PaymentCreditCards: SAPB1.PaymentCreditCard[];
  PaymentAccounts: SAPB1.PaymentAccount[];
  BillOfExchange: SAPB1.BillOfExchange;
  WithholdingTaxCertificatesCollection: SAPB1.WithholdingTaxCertificatesData[];
  CashFlowAssignments: SAPB1.CashFlowAssignment[];
  Payments_ApprovalRequests: SAPB1.Payments_ApprovalRequest[];
  WithholdingTaxDataWTXCollection: SAPB1.WithholdingTaxDataWTX[];
}

export class PaymentKey {
  DocEntry: number;
}

export class PaymentCheck {
  LineNum: number;
  DueDate: Date;
  CheckNumber: number;
  BankCode: string;
  Branch: string;
  AccounttNum: string;
  Details: string;
  Trnsfrable: SAPB1.BoYesNoEnum;
  CheckSum: number;
  Currency: string;
  CountryCode: string;
  CheckAbsEntry: number;
  CheckAccount: string;
  ManualCheck: SAPB1.BoYesNoEnum;
  FiscalID: string;
  OriginallyIssuedBy: string;
  Endorse: SAPB1.BoYesNoEnum;
  EndorsableCheckNo: number;
}

export class PaymentInvoice {
  LineNum: number;
  DocEntry: number;
  SumApplied: number;
  AppliedFC: number;
  AppliedSys: number;
  DocRate: number;
  DocLine: number;
  InvoiceType: SAPB1.BoRcptInvTypes;
  DiscountPercent: number;
  PaidSum: number;
  InstallmentId: number;
  WitholdingTaxApplied: number;
  WitholdingTaxAppliedFC: number;
  WitholdingTaxAppliedSC: number;
  LinkDate: Date;
  DistributionRule: string;
  DistributionRule2: string;
  DistributionRule3: string;
  DistributionRule4: string;
  DistributionRule5: string;
  TotalDiscount: number;
  TotalDiscountFC: number;
  TotalDiscountSC: number;
}

export class PaymentCreditCard {
  LineNum: number;
  CreditCard: number;
  CreditAcct: string;
  CreditCardNumber: string;
  CardValidUntil: Date;
  VoucherNum: string;
  OwnerIdNum: string;
  OwnerPhone: string;
  PaymentMethodCode: number;
  NumOfPayments: number;
  FirstPaymentDue: Date;
  FirstPaymentSum: number;
  AdditionalPaymentSum: number;
  CreditSum: number;
  CreditCur: string;
  CreditRate: number;
  ConfirmationNum: string;
  NumOfCreditPayments: number;
  CreditType: SAPB1.BoRcptCredTypes;
  SplitPayments: SAPB1.BoYesNoEnum;
}

export class PaymentAccount {
  LineNum: number;
  AccountCode: string;
  SumPaid: number;
  SumPaidFC: number;
  Decription: string;
  VatGroup: string;
  AccountName: string;
  GrossAmount: number;
  ProfitCenter: string;
  ProjectCode: string;
  VatAmount: number;
  ProfitCenter2: string;
  ProfitCenter3: string;
  ProfitCenter4: string;
  ProfitCenter5: string;
  LocationCode: number;
  EqualizationVatAmount: number;
}

export class BillOfExchange {
  BillOfExchangeNo: number;
  BillOfExchangeDueDate: Date;
  Details: string;
  ReferenceNo: string;
  Remarks: string;
  PaymentMethodCode: string;
  BPBankCode: string;
  BPBankAct: string;
  BPBankCountry: string;
  ControlKey: string;
  PaymentEngineStatus1: string;
  PaymentEngineStatus2: string;
  PaymentEngineStatus3: string;
  StampTaxCode: string;
  StampTaxAmount: number;
  FolioNumber: number;
  FolioPrefixString: string;
  InterestAmount: number;
  DiscountAmount: number;
  FineAmount: number;
  InterestDate: Date;
  DiscountDate: Date;
  FineDate: Date;
  IOFAmount: number;
  ServiceFeeAmount: number;
  OtherExpensesAmount: number;
  OtherIncomesAmount: number;
}

export class WithholdingTaxCertificatesData {
  POICodeRef: string;
  POICode: string;
  Certificate: string;
  WTaxType: string;
  PeriodIndicator: string;
  WhtAbsId: number;
  Series: number;
  Number: number;
  IssueDate: Date;
  SumVATAmount: number;
  SumDocTotal: number;
  SumBaseAmount: number;
  SumAccumAmount: number;
  SumPercAmount: number;
  WTGroupsCollection: SAPB1.WTGroups[];
}

export class WTGroups {
  WTAbsEntry: number;
  Percent: number;
  SumVATAmount: number;
  SumDocTotal: number;
  SumBaseAmount: number;
  SumAccumAmount: number;
  SumPerceptAmount: number;
  DocsInWTGroupsCollection: SAPB1.DocsInWTGroups[];
}

export class DocsInWTGroups {
  DocEntry: number;
  DocObjType: string;
  VATAmount: number;
  DocTotal: number;
  BaseAmount: number;
  AccumAmount: number;
  PerceptAmount: number;
  Percent: number;
}

export class CashFlowAssignment {
  CashFlowAssignmentsID: number;
  CashFlowLineItemID: number;
  Credit: number;
  PaymentMeans: SAPB1.PaymentMeansTypeEnum;
  CheckNumber: string;
  AmountLC: number;
  AmountFC: number;
  JDTLineId: number;
}

export class Payments_ApprovalRequest {
  ApprovalTemplatesID: number;
  Remarks: string;
}

export class DNFCodeSetup {
  AbsEntry: number;
  NCMCode: number;
  DNFCode: string;
  UoM: string;
  Factor: number;
}

export class DNFCodeSetupKey {
  AbsEntry: number;
}

export class DNFCodeSetupParams {
  AbsEntry: number;
  NCMCode: number;
  DNFCode: string;
}

export class AccountSegmentationParams {
  Numerator: number;
}

export class AccountSegmentation {
  Numerator: number;
  Name: string;
  Size: number;
  Type: SAPB1.AccountSegmentationTypeEnum;
  AccountSegmentationsCategories: SAPB1.AccountSegmentationsCategory[];
}

export class AccountSegmentationKey {
  Numerator: number;
}

export class AccountSegmentationsCategory {
  SegmentID: number;
  Code: string;
  Name: string;
  ShortName: string;
}

export class AccountSegmentationCategory {
  SegmentID: number;
  Code: string;
  Name: string;
  ShortName: string;
}

export class AccountSegmentationCategoryKey {
  SegmentID: number;
  Code: string;
}

export class WarehouseLocation {
  Code: number;
  Name: string;
  LSTVATNumber: string;
  CSTNumber: string;
  ExemptionNumber: string;
  TANNumber: string;
  ServiceTaxNumber: string;
  AssesseeType: string;
  CompanyType: string;
  NatureOfBusiness: string;
  TINNumber: string;
  RegistrationType: string;
  EccNumber: string;
  CERange: string;
  CEDivision: string;
  CECommissionerate: string;
  ManufacturerCode: string;
  Jurisdiction: string;
  Street: string;
  Block: string;
  ZipCode: string;
  City: string;
  County: string;
  Country: string;
  State: string;
  PANNumber: string;
  CERegisterNumber: string;
  BuildingFloorRoom: string;
}

export class WarehouseLocationKey {
  Code: number;
}

export class Forms1099 {
  FormCode: number;
  Form1099: string;
  Boxes1099: SAPB1.Boxes1099[];
}

export class Forms1099Key {
  FormCode: number;
}

export class Boxes1099 {
  FormCode: number;
  Box1099: string;
  BoxDescription: string;
  Minimum1099Amount: number;
}

export class InventoryCycles {
  CycleCode: number;
  CycleName: string;
  Frequency: SAPB1.BoFrequency;
  Day: number;
  Hour: Date;
  NextCountingDate: Date;
  Interval: number;
  Sunday: SAPB1.BoYesNoEnum;
  Monday: SAPB1.BoYesNoEnum;
  Tuesday: SAPB1.BoYesNoEnum;
  Wednesday: SAPB1.BoYesNoEnum;
  Thursday: SAPB1.BoYesNoEnum;
  Friday: SAPB1.BoYesNoEnum;
  Saturday: SAPB1.BoYesNoEnum;
  RepeatOption: SAPB1.RepeatOptionEnum;
  RecurrenceSequenceSpecifier: SAPB1.RecurrenceSequenceEnum;
  RecurrenceDayInMonth: number;
  RecurrenceMonth: number;
  RecurrenceDayOfWeek: SAPB1.RecurrenceDayOfWeekEnum;
  endType: SAPB1.EndTypeEnum;
  MaxOccurrence: number;
  SeriesEndDate: Date;
}

export class InventoryCyclesKey {
  CycleCode: number;
}

export class InventoryCyclesParams {
  CycleCode: number;
}

export class WizardPaymentMethodParams {
  PaymentMethodCode: string;
}

export class WizardPaymentMethod {
  PaymentMethodCode: string;
  Description: string;
  Type: SAPB1.BoPaymentTypeEnum;
  PaymentMeans: SAPB1.BoPaymentMeansEnum;
  CheckAddress: SAPB1.BoYesNoEnum;
  CheckBankDetails: SAPB1.BoYesNoEnum;
  CollectionAuthorizationCheck: SAPB1.BoYesNoEnum;
  BlockForeignPayment: SAPB1.BoYesNoEnum;
  BlockForeignBank: SAPB1.BoYesNoEnum;
  CurrencyRestriction: SAPB1.BoYesNoEnum;
  PostOfficeBank: SAPB1.BoYesNoEnum;
  MinimumAmount: number;
  MaximumAmount: number;
  DefaultBank: string;
  UserSignature: number;
  CreationDate: Date;
  BankCountry: string;
  DefaultAccount: string;
  GLAccount: string;
  Branch: string;
  KeyCode: string;
  TransactionType: string;
  Format: string;
  AgentCollection: SAPB1.BoYesNoEnum;
  SendforAcceptance: SAPB1.BoYesNoEnum;
  GroupByDate: SAPB1.BoYesNoEnum;
  DepositNorm: string;
  DebitMemo: SAPB1.BoYesNoEnum;
  GroupByPaymentReference: SAPB1.BoYesNoEnum;
  GroupInvoicesbyPay: SAPB1.BoYesNoEnum;
  DueDateSelection: SAPB1.BoDueDateEnum;
  PaymentTermsCode: number;
  PosttoGLInterimAccount: SAPB1.BoYesNoEnum;
  BankAccountKey: number;
  DocType: string;
  Accepted: string;
  PortfolioID: string;
  CurCode: string;
  Instruction1: string;
  Instruction2: string;
  PaymentPlace: string;
  BarcodeDll: string;
  Active: SAPB1.BoYesNoEnum;
  GroupInvoicesByPayToBank: SAPB1.BoYesNoEnum;
  GroupInvoicesByCurrency: SAPB1.BoYesNoEnum;
  BankChargeRate: number;
  ReportCode: string;
  CancelInstruction: string;
  OccurenceCode: string;
  MovementCode: string;
  DirectDebit: string;
  CurrencyRestrictions: SAPB1.CurrencyRestriction[];
}

export class WizardPaymentMethodKey {
  PaymentMethodCode: string;
}

export class CurrencyRestriction {
  PaymentMethodCode: string;
  CurrencyCode: string;
  CurrencyName: string;
  Choose: SAPB1.BoYesNoEnum;
}

export class DepreciationType {
  Code: string;
  Description: string;
  DepreciationMethod: SAPB1.DepreciationMethodEnum;
  MinimumDepreciatedValue: number;
  RoundYearEndBookValue: SAPB1.BoYesNoEnum;
  IncludeSalvageInDepreciation: SAPB1.BoYesNoEnum;
  SalvagePercentage: number;
  AcquisitionPeriodControl: SAPB1.AcquisitionPeriodControlEnum;
  SubsequentAcquisitionPeriodControl: SAPB1.SubsequentAcquisitionPeriodControlEnum;
  RetirementPeriodControl: SAPB1.RetirementPeriodControlEnum;
  AcquisitionProRataType: SAPB1.AcquisitionProRataTypeEnum;
  SubsequentAcquisitionProRataType: SAPB1.SubsequentAcquisitionProRataTypeEnum;
  RetirementProRataType: SAPB1.RetirementProRataTypeEnum;
  PercentageOfDepreciationReversedInRetirementYear: number;
  ValidFrom: Date;
  ValidTo: Date;
  StraightLineCalculationMethod: SAPB1.StraightLineCalculationMethodEnum;
  StraightLinePercentage: number;
  StraightLinePeriodControlDepreciationPeriods: SAPB1.StraightLinePeriodControlDepreciationPeriodsEnum;
  StraightLinePeriodControlFactor: number;
  DecliningPercentage: number;
  DecliningFactor: number;
  DecliningChangeTo: string;
  SpecialDepreciationCalculationMethod: SAPB1.SpecialDepreciationCalculationMethodEnum;
  SpecialDepreciationConcessionPeriodYears: number;
  SpecialDepreciationMaximumPercentage: number;
  SpecialDepreciationNormalDepreciation: string;
  SpecialDepreciationAlternativeDepreciation: string;
  DepreciationTypePool: string;
  ManualDepreciationReduceDepreciationBase: SAPB1.BoYesNoEnum;
  SpecialDepreciationMaximumAmount: number;
  SpecialDepreciationMaximumFlag: SAPB1.SpecialDepreciationMaximumFlagEnum;
  CalculationBase: SAPB1.CalculationBaseEnum;
  DepreciationEndAtLastFullYear: SAPB1.BoYesNoEnum;
  IncludePreviousDepreciationInCapitalizationPeriod: SAPB1.BoYesNoEnum;
  DeltaCoefficient: number;
  MaximumDepreciableValue: number;
  FactorOnlyRelevantToFirstFiscalYear: SAPB1.BoYesNoEnum;
  TransferSourcePeriodControl: SAPB1.TransferSourcePeriodControlEnum;
  TransferTargetPeriodControl: SAPB1.TransferTargetPeriodControlEnum;
  TransferSourceProRataType: SAPB1.TransferSourceProRataTypeEnum;
  TransferTargetProRataType: SAPB1.TransferTargetProRataTypeEnum;
  DepreciationLevelCollection: SAPB1.DepreciationLevel[];
}

export class DepreciationTypeKey {
  Code: string;
}

export class DepreciationLevel {
  Level: number;
  DepreciationCalculationBase: SAPB1.DepreciationCalculationBaseEnum;
  NumberOfYears: number;
  Percentage: number;
  Amount: number;
}

export class DepreciationTypeParams {
  Code: string;
  Description: string;
}

export class FAAccountDetermination {
  Code: string;
  Description: string;
  AssetBalanceSheetAccount: string;
  ClearingAccountAcquisition: string;
  RevaluationReserveAccount: string;
  RevaluationReserveClearing: string;
  OrdinaryDepreciation: string;
  AccumulatedOrdinaryDepr: string;
  UnplannedDepreciation: string;
  AccumulatedUnplannedDepr: string;
  SpecialDepreciation: string;
  AccumulatedSpecialDepr: string;
  RevenuefromAssetSalesNet: string;
  RetirementwithExpenseNet: string;
  RetirementwithRevenueNet: string;
  LeavewithExpenseNBVGross: string;
  LeavewithRevenueNBVGross: string;
  RevenueAccountforRetirement: string;
  RevenueClearingAccount: string;
}

export class FAAccountDeterminationKey {
  Code: string;
}

export class FAAccountDeterminationParams {
  Code: string;
  Description: string;
}

export class DepreciationArea {
  Code: string;
  Description: string;
  PostingOfDepreciation: SAPB1.PostingOfDepreciationEnum;
  RetirementMethod: SAPB1.RetirementMethodEnum;
  AreaType: SAPB1.AreaTypeEnum;
  DerivedArea: string;
  MainBookingArea: SAPB1.BoYesNoEnum;
  DirectRevenuePosting: SAPB1.BoYesNoEnum;
  TaxCreditControl: SAPB1.BoYesNoEnum;
  TaxType: number;
  BPForTaxCorrection: string;
  ItemForTaxCorrection: string;
  UsageForTaxCorrection: number;
}

export class DepreciationAreaKey {
  Code: string;
}

export class DepreciationAreaParams {
  Code: string;
  Description: string;
}

export class DepreciationTypePool {
  Code: string;
  Description: string;
}

export class DepreciationTypePoolKey {
  Code: string;
}

export class DepreciationTypePoolParams {
  Code: string;
  Description: string;
}

export class AssetClass {
  Code: string;
  Description: string;
  AssetType: SAPB1.AssetTypeEnum;
  ValueLimitFrom: number;
  ValueLimitTo: number;
  BPLID: number;
  AttributeGroup: number;
  AssetClassCollection: SAPB1.AssetClassLine[];
}

export class AssetClassKey {
  Code: string;
}

export class AssetClassLine {
  Code: string;
  LineNumber: number;
  DepreciationAreaID: string;
  ActiveStatus: SAPB1.BoYesNoEnum;
  AccountDetermination: string;
  DepreciationTypeID: string;
  UseLife: number;
}

export class AssetClassParams {
  Code: string;
  Description: string;
}

export class IntrastatConfiguration {
  AbsEntry: number;
  ConfType: SAPB1.IntrastatConfigurationEnum;
  Code: string;
  Descr: string;
  PrcstVal: number;
  SuppUnit: number;
  Export: SAPB1.BoYesNoEnum;
  Import: SAPB1.BoYesNoEnum;
  StatCode: string;
  DateFrom: Date;
  DateTo: Date;
  Country: string;
  ConfID: string;
}

export class IntrastatConfigurationKey {
  AbsEntry: number;
}

export class IntrastatConfigurationParams {
  AbsEntry: number;
  ConfType: SAPB1.IntrastatConfigurationEnum;
  Code: string;
  StatCode: string;
  DateFrom: Date;
  DateTo: Date;
  Country: string;
}

export class AssetGroup {
  Code: string;
  Description: string;
}

export class AssetGroupKey {
  Code: string;
}

export class AssetGroupParams {
  Code: string;
  Description: string;
}

export class DeterminationCriteria {
  DmcId: number;
  DeterminationCriteria: string;
  IsActive: SAPB1.BoYesNoEnum;
  Priority: number;
}

export class DeterminationCriteriaKey {
  DmcId: number;
}

export class DeterminationCriteriaParams {
  DmcId: number;
}

export class AssetDocument {
  DocEntry: number;
  DocNum: number;
  Series: number;
  PostingDate: Date;
  DocumentDate: Date;
  Status: SAPB1.AssetDocumentStatusEnum;
  Remarks: string;
  Reference: string;
  Currency: string;
  DocumentRate: number;
  DocumentTotal: number;
  DocumentTotalFC: number;
  DocumentTotalSC: number;
  AssetValueDate: Date;
  DocumentType: SAPB1.AssetDocumentTypeEnum;
  SummerizeByProjects: SAPB1.BoYesNoEnum;
  SummerizeByDistributionRules: SAPB1.BoYesNoEnum;
  ManualDepreciationType: string;
  HandWritten: SAPB1.BoYesNoEnum;
  CancellationDate: Date;
  DepreciationArea: string;
  BPLId: number;
  Origin: number;
  LowValueAssetRetirement: SAPB1.BoYesNoEnum;
  CancellationOption: SAPB1.ClosingOptionEnum;
  OriginalType: SAPB1.AssetOriginalTypeEnum;
  BaseReference: string;
  BPLName: string;
  VATRegNum: string;
  AssetDocumentLineCollection: SAPB1.AssetDocumentLine[];
  AssetDocumentAreaJournalCollection: SAPB1.AssetDocumentAreaJournal[];
}

export class AssetDocumentKey {
  DocEntry: number;
}

export class AssetDocumentLine {
  DocEntry: number;
  LineNumber: number;
  AssetNumber: string;
  GLAccount: string;
  Quantity: number;
  TotalLC: number;
  TotalFC: number;
  TotalSC: number;
  DepreciationArea: string;
  Remarks: string;
  NewAssetNumber: string;
  Partial: SAPB1.BoYesNoEnum;
  APC: number;
  NewAssetClass: string;
  DistributionRule: string;
  DistributionRule2: string;
  DistributionRule3: string;
  DistributionRule4: string;
  DistributionRule5: string;
  Project: string;
}

export class AssetDocumentAreaJournal {
  DocEntry: number;
  LineNumber: number;
  DepreciationArea: string;
  JournalRemarks: string;
  TransactionNumber: number;
  CancellationJournalRemarks: string;
  CancellationTransactionNumber: number;
}

export class AssetDocumentParams {
  Code: number;
  CancellationOption: SAPB1.ClosingOptionEnum;
  CancellationDate: Date;
}

export class GLAccountAdvancedRule {
  AbsoluteEntry: number;
  Period: string;
  BeginningofFinancialYear: Date;
  FinancialYear: number;
  PeriodName: string;
  SubPeriodType: SAPB1.BoSubPeriodTypeEnum;
  NumberOfPeriods: number;
  FromPostingDate: Date;
  ToPostingDate: Date;
  FromDueDate: Date;
  ToDueDate: Date;
  FromDocumentDate: Date;
  ToDocumentDate: Date;
  ItemCode: string;
  ItemGroup: number;
  Warehouse: string;
  BPGroup: number;
  FederalTaxID: string;
  ShipToCountry: string;
  ShipToState: string;
  Description: string;
  Code: string;
  GetGLAccountBy: SAPB1.GetGLAccountByEnum;
  FromDate: Date;
  ToDate: Date;
  ExpensesAccount: string;
  RevenuesAccount: string;
  ExemptIncomeAcc: string;
  InventoryAccount: string;
  CostAccount: string;
  TransferAccount: string;
  VarienceAccount: string;
  PriceDifferenceAcc: string;
  NegativeInventoryAdjustmentAccount: string;
  DecreasingAccount: string;
  IncreasingAccount: string;
  ReturningAccount: string;
  EURevenuesAccount: string;
  EUExpensesAccount: string;
  ForeignRevenueAcc: string;
  ForeignExpensAcc: string;
  PurchaseAcct: string;
  PAReturnAcct: string;
  PurchaseOffsetAcct: string;
  ExchangeRateDifferencesAcct: string;
  GoodsClearingAcct: string;
  GLDecreaseAcct: string;
  GLIncreaseAcct: string;
  WipAccount: string;
  WipVarianceAccount: string;
  WipOffsetProfitAndLossAccount: string;
  InventoryOffsetProfitAndLossAccount: string;
  StockInflationAdjustAccount: string;
  StockInflationOffsetAccount: string;
  CostInflationAccount: string;
  CostInflationOffsetAccount: string;
  ExpenseClearingAct: string;
  ExpenseOffsettingAccount: string;
  StockInTransitAccount: string;
  ShippedGoodsAccount: string;
  VATInRevenueAccount: string;
  SalesCreditAcc: string;
  PurchaseCreditAcc: string;
  ExemptedCredits: string;
  SalesCreditForeignAcc: string;
  ForeignPurchaseCreditAcc: string;
  SalesCreditEUAcc: string;
  EUPurchaseCreditAcc: string;
  PurchaseBalanceAccount: string;
  WHIncomingCenvatAccount: string;
  WHOutgoingCenvatAccount: string;
  IsActive: SAPB1.BoYesNoEnum;
  BusinessPartnerType: SAPB1.BoBusinessPartnerTypes;
  VATGroup: string;
  BPCode: string;
  Usage: number;
}

export class GLAccountAdvancedRuleKey {
  AbsoluteEntry: number;
}

export class GLAccountAdvancedRuleParams {
  AbsoluteEntry: number;
  Period: string;
  Code: string;
  ItemCode: string;
  ItemGroup: number;
  Warehouse: string;
  BPGroup: number;
  FederalTaxID: string;
  ShipToCountry: string;
  ShipToState: string;
}

export class BarCode {
  AbsEntry: number;
  ItemNo: string;
  UoMEntry: number;
  Barcode: string;
  FreeText: string;
}

export class BarCodeKey {
  AbsEntry: number;
}

export class BarCodeParams {
  AbsEntry: number;
  ItemNo: string;
  UoMEntry: number;
  Barcode: string;
}

export class InventoryCounting {
  DocumentEntry: number;
  DocumentNumber: number;
  Series: number;
  CountDate: Date;
  CountTime: Date;
  SingleCounterType: SAPB1.CounterTypeEnum;
  SingleCounterID: number;
  DocumentStatus: SAPB1.CountingDocumentStatusEnum;
  Remarks: string;
  Reference2: string;
  BranchID: number;
  DocObjectCodeEx: string;
  FinancialPeriod: number;
  PeriodIndicator: string;
  CountingType: SAPB1.CountingTypeEnum;
  TeamCounters: SAPB1.TeamCounter[];
  IndividualCounters: SAPB1.IndividualCounter[];
  InventoryCountingLines: SAPB1.InventoryCountingLine[];
}

export class InventoryCountingKey {
  DocumentEntry: number;
}

export class TeamCounter {
  DocumentEntry: number;
  CounterID: number;
  CounterType: SAPB1.CounterTypeEnum;
  CounterName: string;
  CounterNumber: number;
  CounterVisualOrder: number;
}

export class IndividualCounter {
  DocumentEntry: number;
  CounterID: number;
  CounterType: SAPB1.CounterTypeEnum;
  CounterName: string;
  CounterNumber: number;
  CounterVisualOrder: number;
}

export class InventoryCountingLine {
  DocumentEntry: number;
  LineNumber: number;
  ItemCode: string;
  ItemDescription: string;
  Freeze: SAPB1.BoYesNoEnum;
  WarehouseCode: string;
  BinEntry: number;
  InWarehouseQuantity: number;
  Counted: SAPB1.BoYesNoEnum;
  UoMCode: string;
  BarCode: string;
  UoMCountedQuantity: number;
  ItemsPerUnit: number;
  CountedQuantity: number;
  Variance: number;
  VariancePercentage: number;
  VisualOrder: number;
  TargetEntry: number;
  TargetLine: number;
  TargetType: number;
  TargetReference: string;
  ProjectCode: string;
  Manufacturer: number;
  SupplierCatalogNo: string;
  PreferredVendor: string;
  CostingCode: string;
  CostingCode2: string;
  CostingCode3: string;
  CostingCode4: string;
  CostingCode5: string;
  Remarks: string;
  LineStatus: SAPB1.CountingLineStatusEnum;
  CounterType: SAPB1.CounterTypeEnum;
  CounterID: number;
  MultipleCounterRole: SAPB1.MultipleCounterRoleEnum;
  InventoryCountingLineUoMs: SAPB1.InventoryCountingLineUoM[];
  InventoryCountingSerialNumbers: SAPB1.InventoryCountingSerialNumber[];
  InventoryCountingBatchNumbers: SAPB1.InventoryCountingBatchNumber[];
}

export class InventoryCountingLineUoM {
  DocumentEntry: number;
  LineNumber: number;
  ChildNumber: number;
  UoMCountedQuantity: number;
  ItemsPerUnit: number;
  CountedQuantity: number;
  UoMCode: string;
  BarCode: string;
  CounterType: SAPB1.CounterTypeEnum;
  CounterID: number;
  MultipleCounterRole: SAPB1.MultipleCounterRoleEnum;
}

export class InventoryCountingSerialNumber {
  ManufacturerSerialNumber: string;
  InternalSerialNumber: string;
  ExpiryDate: Date;
  ManufactureDate: Date;
  ReceptionDate: Date;
  WarrantyStart: Date;
  WarrantyEnd: Date;
  Location: string;
  Notes: string;
  BatchID: string;
  SystemSerialNumber: number;
  BaseLineNumber: number;
  Quantity: number;
  DocumentEntry: number;
  CounterType: SAPB1.CounterTypeEnum;
  CounterID: number;
  MultipleCounterRole: SAPB1.MultipleCounterRoleEnum;
  TrackingNote: number;
  TrackingNoteLine: number;
}

export class InventoryCountingBatchNumber {
  BatchNumber: string;
  ManufacturerSerialNumber: string;
  InternalSerialNumber: string;
  ExpiryDate: Date;
  ManufactureDate: Date;
  AddmisionDate: Date;
  Location: string;
  Notes: string;
  Quantity: number;
  BaseLineNumber: number;
  DocumentEntry: number;
  CounterType: SAPB1.CounterTypeEnum;
  CounterID: number;
  MultipleCounterRole: SAPB1.MultipleCounterRoleEnum;
  TrackingNote: number;
  TrackingNoteLine: number;
}

export class InventoryCountingParams {
  DocumentEntry: number;
  DocumentNumber: number;
}

export class EnhancedDiscountGroup {
  AbsEntry: number;
  Type: SAPB1.DiscountGroupTypeEnum;
  ObjectCode: string;
  DiscountRelations: SAPB1.DiscountGroupRelationsEnum;
  Active: SAPB1.BoYesNoEnum;
  ValidFrom: Date;
  ValidTo: Date;
  DiscountGroupLineCollection: SAPB1.DiscountGroupLine[];
}

export class EnhancedDiscountGroupKey {
  AbsEntry: number;
}

export class DiscountGroupLine {
  AbsEntry: number;
  ObjectType: SAPB1.DiscountGroupBaseObjectEnum;
  ObjectCode: string;
  DiscountType: SAPB1.DiscountGroupDiscountTypeEnum;
  Discount: number;
  PaidQuantity: number;
  FreeQuantity: number;
  MaximumFreeQuantity: number;
}

export class EnhancedDiscountGroupParams {
  AbsEntry: number;
  Type: SAPB1.DiscountGroupTypeEnum;
  ObjectCode: string;
}

export class CycleCountDetermination {
  WarehouseCode: string;
  CycleBy: SAPB1.CycleCountDeterminationCycleByEnum;
  CycleCountDeterminationSetupCollection: SAPB1.CycleCountDeterminationSetup[];
}

export class CycleCountDeterminationKey {
  WarehouseCode: string;
}

export class CycleCountDeterminationSetup {
  WarehouseCode: string;
  Entry: number;
  CycleCode: number;
  Alert: SAPB1.BoYesNoEnum;
  DestinationUser: number;
  NextCountingDate: Date;
  Time: Date;
  ExcludeItemsWithZeroQuantity: SAPB1.BoYesNoEnum;
  ChangeExistingItems: SAPB1.BoYesNoEnum;
}

export class CycleCountDeterminationParams {
  WarehouseCode: string;
  CycleBy: number;
}

export class AssetDepreciationGroup {
  Code: string;
  Description: string;
  Group: string;
}

export class AssetDepreciationGroupKey {
  Code: string;
}

export class AssetDepreciationGroupParams {
  Code: string;
  Description: string;
}

export class AttributeGroup {
  Code: number;
  Name: string;
  Locked: SAPB1.BoYesNoEnum;
  AttributeGroupCollection: SAPB1.AttributeGroupLine[];
}

export class AttributeGroupKey {
  Code: number;
}

export class AttributeGroupLine {
  Code: number;
  SortNumber: number;
  AttributeID: number;
  AttributeName: string;
  FieldType: SAPB1.AttributeGroupFieldTypeEnum;
  DefaultValue: string;
}

export class AttributeGroupParams {
  Code: number;
  Name: string;
}

export class IntegrationPackageConfigure {
  AbsEntry: number;
  Code: string;
  Name: string;
  IsEnable: SAPB1.BoYesNoEnum;
}

export class IntegrationPackageConfigureKey {
  AbsEntry: number;
}

export class IntegrationPackageParams {
  AbsEntry: number;
}

export class BPPriority {
  Priority: number;
  PriorityDescription: string;
}

export class BPPriorityKey {
  Priority: number;
}

export class DunningLetter {
  FeeCurrency: string;
  RowNumber: number;
  LetterFormat: string;
  Effectiveafter: string;
  MinimumBalanceCurrency: string;
  Feeperletter: number;
  CalcInterest: SAPB1.BoYesNoEnum;
  MinimumBalance: number;
}

export class DunningLetterKey {
  RowNumber: number;
}

export class UserFieldMD {
  Name: string;
  Type: SAPB1.BoFieldTypes;
  Size: number;
  Description: string;
  SubType: SAPB1.BoFldSubTypes;
  LinkedTable: string;
  DefaultValue: string;
  TableName: string;
  FieldID: number;
  EditSize: number;
  Mandatory: SAPB1.BoYesNoEnum;
  LinkedUDO: string;
  LinkedSystemObject: SAPB1.BoObjectTypes;
  ValidValuesMD: SAPB1.ValidValueMD[];
}

export class UserFieldMDKey {
  TableName: string;
  FieldID: number;
}

export class ValidValueMD {
  Value: string;
  Description: string;
}

export class UserFieldMDParams {
  TableName: string;
  FieldID: number;
}

export class UserTablesMD {
  TableName: string;
  TableDescription: string;
  TableType: SAPB1.BoUTBTableType;
  Archivable: SAPB1.BoYesNoEnum;
  ArchiveDateField: string;
}

export class UserTablesMDKey {
  TableName: string;
}

export class PickListParams {
  Absoluteentry: number;
}

export class PickList {
  Absoluteentry: number;
  Name: string;
  OwnerCode: number;
  OwnerName: string;
  PickDate: Date;
  Remarks: string;
  Status: SAPB1.BoPickStatus;
  ObjectType: string;
  UseBaseUnits: SAPB1.BoYesNoEnum;
  U_CON_PickListId: number;
  U_CON_ShipTo: string;
  U_BXPEmpID: number;
  PickListsLines: SAPB1.PickListsLine[];
}

export class PickListKey {
  Absoluteentry: number;
}

export class PickListsLine {
  AbsoluteEntry: number;
  LineNumber: number;
  OrderEntry: number;
  OrderRowID: number;
  PickedQuantity: number;
  PickStatus: SAPB1.BoPickStatus;
  ReleasedQuantity: number;
  PreviouslyReleasedQuantity: number;
  BaseObjectType: number;
  U_BXPMSerB: string;
  SerialNumbers: SAPB1.SerialNumber[];
  BatchNumbers: SAPB1.BatchNumber[];
  DocumentLinesBinAllocations: SAPB1.DocumentLinesBinAllocation[];
}

export class EmployeeIDType {
  IDType: string;
}

export class EmployeeIDTypeKey {
  IDType: string;
}

export class EmployeeIDTypeParams {
  IDType: string;
}

export class JournalEntryDocumentType {
  JournalEntryType: string;
  DocTypeDescription: string;
  ShortName: string;
}

export class JournalEntryDocumentTypeKey {
  JournalEntryType: string;
}

export class JournalEntryDocumentTypeParams {
  JournalEntryType: string;
  DocTypeDescription: string;
  ShortName: string;
}

export class PaymentRunExport {
  AbsoluteEntry: number;
  RunDate: Date;
  VendorNum: string;
  CustomerNum: string;
  PaymentMethod: string;
  DocNum: number;
  FiscalYear: Date;
  Countery: string;
  CompanyTaxNum: string;
  PayeeName: string;
  PayeePostalCode: string;
  PayeeCity: string;
  PayeeStreet: string;
  PayeeCountry: string;
  PayeeState: string;
  PayeeBankName: string;
  PayeeBankZip: string;
  PayeeBankCity: string;
  PayeeBankStreet: string;
  PayeeBankCountry: string;
  PayeeBankAccount: string;
  PayeeBankCode: string;
  PayeeBankCtrlKey: string;
  PayeeBankSwiftNum: string;
  PayeeBankIBAN: string;
  PostingDate: Date;
  BankAccount: string;
  BankCountry: string;
  BankCode: string;
  BankIBAN: string;
  GLAccount: string;
  Currency: string;
  DocAmountLocal: number;
  DocCurrnecy: string;
  DocAmountForign: number;
  DocCashDiscount: number;
  DocCashDiscountForign: number;
  DocNumOffieldPaid: number;
  DocRate: number;
  WizCode: number;
  CollectionAuthorization: SAPB1.BoYesNoEnum;
  PayeeBankPostOffice: SAPB1.BoYesNoEnum;
  PayeeBankNextCheckNumber: number;
  PayeeBankHouseBank: SAPB1.BoYesNoEnum;
  PayeeBankBlock: string;
  PayeeBankCounty: string;
  PayeeBankState: string;
  PayeeBankBISR: SAPB1.BoYesNoEnum;
  PayeeBankUserNum1: string;
  PayeeBankUserNum2: string;
  PayeeBankUserNum3: string;
  PayeeBankUserNum4: string;
  InstructionKey: string;
  PaymentFormat: string;
  CompanyName: string;
  CompanyAddress: string;
  Status: SAPB1.BoOpexStatus;
  CompIsrBillerID: string;
  VendorIsrBillerID: string;
  AdditionalIdNumber: string;
  OrganizationNumber: string;
  PayeeBankBranch: string;
  PaymentBankBranch: string;
  UserName: string;
  UserEMail: string;
  UserMobilePhoneNumber: string;
  UserFaxNumber: string;
  UserDepartment: number;
  DebitMemo: SAPB1.BoYesNoEnum;
  EUInternalTransfer: SAPB1.BoYesNoEnum;
  FilePath: string;
  OrderingParty: string;
  PaymentBankControlKey: string;
  PayeeTaxNumber: string;
  PaymentKeyCode: string;
  PayeeReferenceDetails: string;
  FormatName: string;
  PaymentDonewithCheck: SAPB1.BoYesNoEnum;
  CompanyBlock: string;
  CompanyCity: string;
  CompanyCounty: string;
  CompanyState: string;
  CompanyStreet: string;
  CompanyZipCode: string;
  PaymentBankCharges: string;
  PaymentBankUserNo1: string;
  PaymentBankUserNo2: string;
  PaymentBankUserNo3: string;
  PaymentBankUserNo4: string;
  PaymentBankChargesAllocationCode: string;
  PaymentOrderNum: number;
  FreeText1: string;
  FreeText2: string;
  FreeText3: string;
  RowType: SAPB1.PaymentRunExportRowTypeEnum;
  PaymentRunExport_Lines: SAPB1.PaymentRunExport_Line[];
}

export class PaymentRunExportKey {
  AbsoluteEntry: number;
}

export class PaymentRunExport_Line {
  RowNumber: number;
  DateOfPaymentRun: Date;
  PaymentWizardCode: number;
  VendorNumber: string;
  CustomerNumber: string;
  PaymentMeans: string;
  PaymentDocNum: number;
  FiscalYear: Date;
  VendorRefNum: string;
  DocumentObjectType: string;
  DocumentPostingDate: Date;
  DocumentTaxDate: Date;
  BPDebitPayableAccount: string;
  DocumentCurrency: string;
  DocumentRate: number;
  DocumentTotal: number;
  DocumentTotalFC: number;
  DocumentTaxAmount: number;
  DocumentTaxAmountFC: number;
  DocumentRemarks: string;
  DocumentPaymentTerms: number;
  PaymentDocReference: string;
  DocumentLocalCurrency: string;
  PaymentTermsPeriod: number;
  DocumentObjectTypeEx: string;
  DocumentNumber: number;
  PaymentNumber: number;
  PaymentOrderNum: number;
  FreeText1: string;
  FreeText2: string;
  FreeText3: string;
}

export class PaymentBlock {
  AbsEntry: number;
  PaymentBlockCode: string;
}

export class PaymentBlockKey {
  AbsEntry: number;
}

export class PaymentBlockParams {
  AbsEntry: number;
  PaymentBlockCode: string;
}

export class UserQuery {
  InternalKey: number;
  QueryCategory: number;
  QueryDescription: string;
  Query: string;
  ProcedureAlias: string;
  ProcedureName: string;
  QueryType: SAPB1.UserQueryTypeEnum;
}

export class UserQueryKey {
  InternalKey: number;
  QueryCategory: number;
}

export class MaterialRevaluationParams {
  DocEntry: number;
}

export class MaterialRevaluation {
  DocNum: number;
  DocDate: Date;
  Reference1: string;
  Reference2: string;
  Comments: string;
  JournalMemo: string;
  DocTime: Date;
  Series: number;
  TaxDate: Date;
  DocEntry: number;
  CreationDate: Date;
  UpdateDate: Date;
  TransNum: number;
  RevalType: string;
  RevaluationIncomeAccount: string;
  RevaluationExpenseAccount: string;
  DataSource: string;
  UserSignature: number;
  InflationRevaluation: SAPB1.BoYesNoEnum;
  CardCode: string;
  CardName: string;
  MaterialRevaluationLines: SAPB1.MaterialRevaluationLine[];
}

export class MaterialRevaluationKey {
  DocEntry: number;
}

export class MaterialRevaluationLine {
  LineNum: number;
  ItemCode: string;
  ItemDescription: string;
  Quantity: number;
  Price: number;
  WarehouseCode: string;
  ActualPrice: number;
  OnHand: number;
  DebitCredit: number;
  DocEntry: number;
  RevaluationDecrementAccount: string;
  RevaluationIncrementAccount: string;
  RevalAmountToStock: number;
  Project: string;
  DistributionRule: string;
  DistributionRule2: string;
  DistributionRule3: string;
  DistributionRule4: string;
  DistributionRule5: string;
  FIFOLayers: SAPB1.FIFOLayer[];
  SNBLinesCollection: SAPB1.SNBLines[];
}

export class FIFOLayer {
  TransactionSequenceNum: number;
  LayerID: number;
  Quantity: number;
  Price: number;
  LineTotal: number;
  BaseLine: number;
}

export class SNBLines {
  SnbAbsEntry: number;
  NewCost: number;
  DebitCredit: number;
  SystemNumber: number;
  LotNumber: string;
  ManufactureNumber: string;
  AdmissionDate: Date;
  ExpirationDate: Date;
  BaseLine: number;
}

export class ServiceCallStatus {
  StatusId: number;
  Name: string;
  Description: string;
}

export class ServiceCallStatusKey {
  StatusId: number;
}

export class ServiceCallStatusParams {
  StatusId: number;
  Name: string;
}

export class ServiceCallType {
  CallTypeID: number;
  Name: string;
  Description: string;
}

export class ServiceCallTypeKey {
  CallTypeID: number;
}

export class ServiceCallTypeParams {
  CallTypeID: number;
  Name: string;
}

export class ServiceCallProblemType {
  ProblemTypeID: number;
  Name: string;
  Description: string;
}

export class ServiceCallProblemTypeKey {
  ProblemTypeID: number;
}

export class ServiceCallProblemTypeParams {
  ProblemTypeID: number;
  Name: string;
}

export class ContractTemplate {
  TemplateName: string;
  TemplateIsDeleted: SAPB1.BoYesNoEnum;
  TemplateIsRenewal: SAPB1.BoYesNoEnum;
  RemindBeforeRenewal: number;
  RemindUnit: SAPB1.BoRemindUnits;
  DurationOfCoverage: number;
  ResponseValue: number;
  ResolutionUnit: SAPB1.BoResolutionUnits;
  Description: string;
  ContractType: SAPB1.BoContractTypes;
  MondayEnabled: SAPB1.BoYesNoEnum;
  TuesdayEnabled: SAPB1.BoYesNoEnum;
  WednesdayEnabled: SAPB1.BoYesNoEnum;
  ThursdayEnabled: SAPB1.BoYesNoEnum;
  FridayEnabled: SAPB1.BoYesNoEnum;
  SaturdayEnabled: SAPB1.BoYesNoEnum;
  SundayEnabled: SAPB1.BoYesNoEnum;
  MondayStart: Date;
  MondayEnd: Date;
  TuesdayStart: Date;
  TuesdayEnd: Date;
  WednesdayStart: Date;
  WednesdayEnd: Date;
  ThursdayStart: Date;
  ThursdayEnd: Date;
  FridayStart: Date;
  FridayEnd: Date;
  SaturdayStart: Date;
  SaturdayEnd: Date;
  SundayStart: Date;
  SundayEnd: Date;
  IncludeParts: SAPB1.BoYesNoEnum;
  IncludeLabor: SAPB1.BoYesNoEnum;
  IncludeTravel: SAPB1.BoYesNoEnum;
  Remarks: string;
  IncludeHolidays: SAPB1.BoYesNoEnum;
  ResponseUnit: SAPB1.BoResponseUnit;
  ResolutionTime: number;
  AttachmentEntry: number;
}

export class ContractTemplateKey {
  TemplateName: string;
}

export class EmployeeInfoParams {
  EmployeeID: number;
}

export class EmployeeInfo {
  EmployeeID: number;
  LastName: string;
  FirstName: string;
  MiddleName: string;
  Gender: SAPB1.BoGenderTypes;
  JobTitle: string;
  EmployeeType: number;
  Department: number;
  Branch: number;
  WorkStreet: string;
  WorkBlock: string;
  WorkZipCode: string;
  WorkCity: string;
  WorkCounty: string;
  WorkCountryCode: string;
  WorkStateCode: string;
  Manager: number;
  ApplicationUserID: number;
  SalesPersonCode: number;
  OfficePhone: string;
  OfficeExtension: string;
  MobilePhone: string;
  Pager: string;
  HomePhone: string;
  Fax: string;
  eMail: string;
  StartDate: Date;
  StatusCode: number;
  Salary: number;
  SalaryUnit: SAPB1.BoSalaryCostUnits;
  EmployeeCosts: number;
  EmployeeCostUnit: SAPB1.BoSalaryCostUnits;
  TerminationDate: Date;
  TreminationReason: number;
  BankCode: string;
  BankBranch: string;
  BankBranchNum: string;
  BankAccount: string;
  HomeStreet: string;
  HomeBlock: string;
  HomeZipCode: string;
  HomeCity: string;
  HomeCounty: string;
  HomeCountry: string;
  HomeState: string;
  DateOfBirth: Date;
  CountryOfBirth: string;
  MartialStatus: SAPB1.BoMeritalStatuses;
  NumOfChildren: number;
  IdNumber: string;
  CitizenshipCountryCode: string;
  PassportNumber: string;
  PassportExpirationDate: Date;
  Picture: string;
  Remarks: string;
  SalaryCurrency: string;
  EmployeeCostsCurrency: string;
  WorkBuildingFloorRoom: string;
  HomeBuildingFloorRoom: string;
  Position: number;
  AttachmentEntry: number;
  CostCenterCode: string;
  CompanyNumber: string;
  VacationPreviousYear: number;
  VacationCurrentYear: number;
  MunicipalityKey: string;
  TaxClass: string;
  IncomeTaxLiability: string;
  Religion: string;
  PartnerReligion: string;
  ExemptionAmount: number;
  ExemptionUnit: SAPB1.EmployeeExemptionUnitEnum;
  ExemptionCurrency: string;
  AdditionalAmount: number;
  AdditionalUnit: SAPB1.EmployeeExemptionUnitEnum;
  AdditionalCurrency: string;
  TaxOfficeName: string;
  TaxOfficeNumber: string;
  HealthInsuranceName: string;
  HealthInsuranceCode: string;
  HealthInsuranceType: string;
  SocialInsuranceNumber: string;
  ProfessionStatus: string;
  EducationStatus: string;
  PersonGroup: string;
  JobTitleCode: string;
  BankCodeForDATEV: string;
  DeviatingBankAccountOwner: SAPB1.BoYesNoEnum;
  SpouseFirstName: string;
  SpouseSurname: string;
  ExternalEmployeeNumber: string;
  BirthPlace: string;
  PaymentMethod: SAPB1.EmployeePaymentMethodEnum;
  STDCode: number;
  CPF: string;
  CRCNumber: string;
  AccountantResponsible: SAPB1.BoYesNoEnum;
  LegalRepresentative: SAPB1.BoYesNoEnum;
  DIRFResponsible: SAPB1.BoYesNoEnum;
  CRCState: string;
  Active: SAPB1.BoYesNoEnum;
  IDType: string;
  BPLID: number;
  PassportIssueDate: Date;
  PassportIssuer: string;
  QualificationCode: SAPB1.SPEDContabilQualificationCodeEnum;
  PRWebAccess: SAPB1.BoYesNoEnum;
  PreviousPRWebAccess: SAPB1.BoYesNoEnum;
  WorkStreetNumber: string;
  HomeStreetNumber: string;
  U_BXPAutBL: string;
  U_BXPAutDl: string;
  U_BXPAutCN: string;
  U_BXPAutGI: string;
  U_BXPAutGR: string;
  U_BXPAutGP: string;
  U_BXPAutIP: string;
  U_BXPAutPk: string;
  U_BXPAutPD: string;
  U_BXPAutQC: string;
  U_BXPAutRP: string;
  U_BXPAutRE: string;
  U_BXPAutSO: string;
  U_BXPAutOC: string;
  U_BXPAutOT: string;
  U_BXPAutSR: string;
  U_BXPAutCt: string;
  U_BXPAutST: string;
  U_BXPDfPrn: string;
  U_BXPMbPwd: string;
  U_BXPPinCd: string;
  U_BXPAutBD: string;
  U_BXPAutBT: string;
  U_BXPAutFR: string;
  U_BXPAutMT: string;
  U_BXPAutPa: string;
  U_BXPAutPL: string;
  U_BXPAutPR: string;
  U_BXPAutRB: string;
  U_BXPAutTR: string;
  EmployeeAbsenceInfoLines: SAPB1.EmployeeAbsenceInfo[];
  EmployeeEducationInfoLines: SAPB1.EmployeeEducationInfo[];
  EmployeeReviewsInfoLines: SAPB1.EmployeeReviewsInfo[];
  EmployeePreviousEmpoymentInfoLines: SAPB1.EmployeePreviousEmpoymentInfo[];
  EmployeeRolesInfoLines: SAPB1.EmployeeRolesInfo[];
  EmployeeSavingsPaymentInfoLines: SAPB1.EmployeeSavingsPaymentInfo[];
  EmployeeBranchAssignment: SAPB1.EmployeeBranchAssignmentItem[];
}

export class EmployeeInfoKey {
  EmployeeID: number;
}

export class EmployeeAbsenceInfo {
  EmployeeID: number;
  LineNum: number;
  FromDate: Date;
  ToDate: Date;
  Reason: string;
  ApprovedBy: string;
  ConfirmerNumber: number;
}

export class EmployeeEducationInfo {
  EmployeeNo: number;
  LineNum: number;
  FromDate: Date;
  ToDate: Date;
  EducationType: number;
  Institute: string;
  Major: string;
  Diploma: string;
}

export class EmployeeReviewsInfo {
  EmployeeNo: number;
  LineNum: number;
  Date: Date;
  ReviewDescription: string;
  Manager: number;
  Grade: string;
  Remarks: string;
}

export class EmployeePreviousEmpoymentInfo {
  EmployeeNo: number;
  LineNum: number;
  FromDtae: Date;
  ToDate: Date;
  Employer: string;
  Position: string;
  Remarks: string;
}

export class EmployeeRolesInfo {
  EmployeeID: number;
  LineNum: number;
  RoleID: number;
}

export class EmployeeSavingsPaymentInfo {
  EmployeeID: number;
  LineNum: number;
  ContractName: string;
  PaymentNotes: string;
  AN: number;
  ANcurrency: string;
  AG: number;
  AGcurrency: string;
  BankName: string;
  BankCode: string;
  BankAccount: string;
  Sequence: SAPB1.ContractSequenceEnum;
}

export class EmployeeBranchAssignmentItem {
  EmployeeID: number;
  BPLID: number;
}

export class EmployeeRoleSetup {
  TypeID: number;
  Name: string;
  Description: string;
}

export class EmployeeRoleSetupKey {
  TypeID: number;
}

export class EmployeeRoleSetupParams {
  TypeID: number;
  Name: string;
}

export class BrazilMultiIndexer {
  ID: number;
  IndexerType: SAPB1.BrazilMultiIndexerTypes;
  Code: string;
  Description: string;
  FirstRefIndexerCode: string;
  SecondRefIndexerCode: string;
  ThirdRefIndexerCode: string;
}

export class BrazilMultiIndexerKey {
  ID: number;
}

export class BrazilMultiIndexerParams {
  ID: number;
}

export class EmployeeStatus {
  StatusId: number;
  Name: string;
  Description: string;
}

export class EmployeeStatusKey {
  StatusId: number;
}

export class EmployeeStatusParams {
  StatusId: number;
  Name: string;
  Description: string;
}

export class TerminationReason {
  ReasonID: number;
  Name: string;
  Description: string;
}

export class TerminationReasonKey {
  ReasonID: number;
}

export class TerminationReasonParams {
  ReasonID: number;
  Name: string;
  Description: string;
}

export class CustomerEquipmentCard {
  EquipmentCardNum: number;
  CustomerCode: string;
  CustomerName: string;
  ContactEmployeeCode: number;
  DirectCustomerCode: string;
  DirectCustomerName: string;
  ManufacturerSerialNum: string;
  InternalSerialNum: string;
  ItemCode: string;
  ItemDescription: string;
  InvoiceCode: number;
  InvoiceNumber: number;
  DeliveryDate: Date;
  ContactPhone: string;
  Street: string;
  Block: string;
  ZipCode: string;
  City: string;
  County: string;
  CountryCode: string;
  StateCode: string;
  InstallLocation: string;
  DeliveryCode: number;
  DeliveryNumber: number;
  StatusOfSerialNumber: SAPB1.BoSerialNumberStatus;
  ReplaceSN: number;
  DefaultTechnician: number;
  ReplacedBySN: number;
  Defaultterritory: number;
  BuildingFloorRoom: string;
  AttachmentEntry: number;
}

export class CustomerEquipmentCardKey {
  EquipmentCardNum: number;
}

export class WithholdingTaxCodeParams {
  WTCode: string;
}

export class WithholdingTaxCode {
  WTCode: string;
  WTName: string;
  Category: SAPB1.WithholdingTaxCodeCategoryEnum;
  BaseType: SAPB1.WithholdingTaxCodeBaseTypeEnum;
  BaseAmount: number;
  OfficialCode: string;
  Account: string;
  WithholdingType: SAPB1.WithholdingTypeEnum;
  RoundingType: SAPB1.RoundingTypeEnum;
  Section: number;
  Threshold: number;
  Surcharge: number;
  Concessional: SAPB1.BoYesNoEnum;
  Assessee: number;
  APTDSAccount: string;
  APSurchargeAccount: string;
  APCessAccount: string;
  APHSCAccount: string;
  ARTDSAccount: string;
  ARSurchargeAccount: string;
  ARCessAccount: string;
  ARHSCAccount: string;
  Location: number;
  ReturnType: SAPB1.ReturnTypeEnum;
  Inactive: SAPB1.BoYesNoEnum;
  CSTCodeIncomingID: number;
  CSTCodeOutgoingID: number;
  NatureOfCalculationBaseCode: string;
  TypeID: number;
  Rate: number;
  EffectiveFrom: Date;
  MinimumTaxableAmount: number;
  IsProgressiveTax: SAPB1.BoYesNoEnum;
  Currency: string;
  WithholdingTaxCodes_Lines: SAPB1.WithholdingTaxCodes_Line[];
}

export class WithholdingTaxCodeKey {
  WTCode: string;
}

export class WithholdingTaxCodes_Line {
  Effectivefrom: Date;
  Rate: number;
  TDSRate: number;
  SurchargeRate: number;
  CessRate: number;
  HSCRate: number;
  LineNum: number;
  ProgressiveTax_Lines: SAPB1.ProgressiveTax_Line[];
  WithholdingTaxCodes_ValueRange_Lines: SAPB1.WithholdingTaxCodes_ValueRange_Line[];
}

export class ProgressiveTax_Line {
  TaxRate: number;
  MinAmount: number;
  MaxAmount: number;
}

export class WithholdingTaxCodes_ValueRange_Line {
  ValueFrom: number;
  WTaxToBeDeductible: number;
  Rate: number;
}

export class TaxReportFilter {
  Code: number;
  Name: string;
  ReportLayout: SAPB1.TaxReportFilterReportLayoutType;
  FirstPrintedNumber: number;
  FromDate: Date;
  ToDate: Date;
  TaxDate: SAPB1.BoYesNoEnum;
  RoundAmount: SAPB1.BoYesNoEnum;
  DeclarationType: SAPB1.TaxReportFilterDeclarationType;
  FilterType: SAPB1.TaxReportFilterType;
  ExcludeWT: SAPB1.BoYesNoEnum;
  IncludeCustomers: SAPB1.BoYesNoEnum;
  IncludeVendors: SAPB1.BoYesNoEnum;
  Period: SAPB1.TaxReportFilterPeriod;
  Quarter: number;
  Year: number;
  DocumentType: SAPB1.TaxReportFilterApArDocumentType;
  FirstRegisterNumber: number;
  IncludeGLAccounts: SAPB1.BoYesNoEnum;
  AppendixOorPSelection: SAPB1.BoYesNoEnum;
  OpeningAndClosingBalance: SAPB1.BoYesNoEnum;
  FromSeries: number;
  ToSeries: number;
  Cancellation: SAPB1.BoYesNoEnum;
  HideTaxWithoutTransaction: SAPB1.BoYesNoEnum;
  IncludeSeriesFilter: SAPB1.BoYesNoEnum;
  IncludeDocumentType: SAPB1.BoYesNoEnum;
  DiplayCreditMemosInSeparateColumn: SAPB1.BoYesNoEnum;
  ShowPaymentsWithDeferredTax: SAPB1.BoYesNoEnum;
  QuarterOrDates: SAPB1.TaxReportFilterQuarterOrDates;
  TaxReportGroups: SAPB1.TaxReportGroup[];
  TaxReportBusinessPartners: SAPB1.TaxReportBusinessPartner[];
  TaxReportDocuments: SAPB1.TaxReportDocument[];
  TaxReportSeriesCollection: SAPB1.TaxReportSeries[];
  TaxReportAccounts: SAPB1.TaxReportAccount[];
}

export class TaxReportFilterKey {
  Code: number;
}

export class TaxReportGroup {
  Code: string;
  Sum: SAPB1.BoYesNoEnum;
}

export class TaxReportBusinessPartner {
  Code: string;
}

export class TaxReportDocument {
  DocumentType: SAPB1.TaxReportFilterDocumentType;
  FromNumber: number;
  ToNumber: number;
}

export class TaxReportSeries {
  DocumentType: SAPB1.TaxReportFilterDocumentType;
  SeriesCode: number;
}

export class TaxReportAccount {
  Code: string;
}

export class TaxReportFilterParams {
  Code: number;
  Name: string;
  FilterType: SAPB1.TaxReportFilterType;
}

export class BillOfExchangeTransactionParams {
  BOETransactionkey: number;
}

export class BillOfExchangeTransaction {
  StatusFrom: SAPB1.BoBOTFromStatus;
  StatusTo: SAPB1.BoBOTToStatus;
  TransactionDate: Date;
  TransactionTime: Date;
  IsBoeReconciled: SAPB1.BoYesNoEnum;
  TransactionNumber: number;
  PostingDate: Date;
  TaxDate: Date;
  BOETransactionkey: number;
  BillOfExchangeTransactionLines: SAPB1.BillOfExchangeTransactionLine[];
  BillOfExchangeTransDeposits: SAPB1.BillOfExchangeTransDeposit[];
  BillOfExchangeTransBankPages: SAPB1.BillOfExchangeTransBankPage[];
}

export class BillOfExchangeTransactionKey {
  BOETransactionkey: number;
}

export class BillOfExchangeTransactionLine {
  BillOfExchangeNo: number;
  BillOfExchangeType: SAPB1.BoBOETypes;
  BillOfExchangeDueDate: Date;
}

export class BillOfExchangeTransDeposit {
  DepositNorm: string;
  PostingType: SAPB1.BoDepositPostingTypes;
  BankCountry: string;
  BankAccount: string;
  BankDepositAccount: string;
  BankBranch: string;
}

export class BillOfExchangeTransBankPage {
  AccountCode: string;
  Sequence: number;
}

export class ServiceCallSolutionStatus {
  StatusId: number;
  Name: string;
  Description: string;
}

export class ServiceCallSolutionStatusKey {
  StatusId: number;
}

export class ServiceCallSolutionStatusParams {
  StatusId: number;
  Name: string;
}

export class KnowledgeBaseSolution {
  ItemCode: string;
  Status: number;
  Owner: number;
  CreatedBy: number;
  CreationDate: Date;
  LastUpdatedBy: number;
  LastUpdateDate: Date;
  Solution: string;
  Symptom: string;
  Cause: string;
  Description: string;
  SolutionCode: number;
  AttachmentEntry: number;
}

export class KnowledgeBaseSolutionKey {
  SolutionCode: number;
}

export class ServiceContractParams {
  ContractID: number;
}

export class ServiceContract {
  ContractID: number;
  CustomerCode: string;
  CustomerName: string;
  ContactCode: number;
  Owner: number;
  Status: SAPB1.BoSvcContractStatus;
  ContractTemplate: string;
  ContractType: SAPB1.BoContractTypes;
  Renewal: SAPB1.BoYesNoEnum;
  ReminderTime: number;
  RemindUnit: SAPB1.BoRemindUnits;
  DurationOfCoverage: number;
  StartDate: Date;
  EndDate: Date;
  ResolutionTime: number;
  ResolutionUnit: SAPB1.BoResolutionUnits;
  Description: string;
  MondayEnabled: SAPB1.BoYesNoEnum;
  TuesdayEnabled: SAPB1.BoYesNoEnum;
  WednesdayEnabled: SAPB1.BoYesNoEnum;
  ThursdayEnabled: SAPB1.BoYesNoEnum;
  FridayEnabled: SAPB1.BoYesNoEnum;
  SaturdayEnabled: SAPB1.BoYesNoEnum;
  SundayEnabled: SAPB1.BoYesNoEnum;
  MondayStart: Date;
  MondayEnd: Date;
  TuesdayStart: Date;
  TuesdayEnd: Date;
  WednesdayStart: Date;
  WednesdayEnd: Date;
  ThursdayStart: Date;
  ThursdayEnd: Date;
  FridayStart: Date;
  FridayEnd: Date;
  SaturdayStart: Date;
  SaturdayEnd: Date;
  SundayStart: Date;
  SundayEnd: Date;
  IncludeParts: SAPB1.BoYesNoEnum;
  IncludeLabor: SAPB1.BoYesNoEnum;
  IncludeTravel: SAPB1.BoYesNoEnum;
  TemplateRemarks: string;
  Remarks: string;
  IncludeHolidays: SAPB1.BoYesNoEnum;
  ServiceType: SAPB1.BoServiceTypes;
  ResponseUnit: SAPB1.BoResponseUnit;
  ResponseTime: number;
  TerminationDate: Date;
  AttachmentEntry: number;
  ServiceBPType: SAPB1.ServiceTypeEnum;
  ServiceContract_Lines: SAPB1.ServiceContract_Line[];
}

export class ServiceContractKey {
  ContractID: number;
}

export class ServiceContract_Line {
  LineNum: number;
  ManufacturerSerialNum: string;
  InternalSerialNum: string;
  ItemCode: string;
  ItemName: string;
  ItemGroup: number;
  StartDate: Date;
  EndDate: Date;
  ItemGroupName: string;
  TerminationDate: Date;
}

export class ServiceCallParams {
  ServiceCallID: number;
}

export class ServiceCall {
  ServiceCallID: number;
  Subject: string;
  CustomerCode: string;
  CustomerName: string;
  ContactCode: number;
  ManufacturerSerialNum: string;
  InternalSerialNum: string;
  ContractID: number;
  ContractEndDate: Date;
  ResolutionDate: Date;
  ResolutionTime: Date;
  Origin: number;
  ItemCode: string;
  ItemDescription: string;
  ItemGroupCode: number;
  Status: number;
  Priority: SAPB1.BoSvcCallPriorities;
  CallType: number;
  ProblemType: number;
  AssigneeCode: number;
  Description: string;
  TechnicianCode: number;
  Resolution: string;
  CreationDate: Date;
  CreationTime: Date;
  Responder: number;
  UpdatedTime: Date;
  BelongsToAQueue: SAPB1.BoYesNoEnum;
  ResponseByTime: Date;
  ResponseByDate: Date;
  ResolutionOnDate: Date;
  ResponseOnTime: Date;
  ResponseOnDate: Date;
  ClosingTime: Date;
  AssignedDate: Date;
  Queue: string;
  ResponseAssignee: number;
  EntitledforService: SAPB1.BoYesNoEnum;
  ResolutionOnTime: Date;
  AssignedTime: Date;
  ClosingDate: Date;
  Series: number;
  DocNum: number;
  HandWritten: SAPB1.BoYesNoEnum;
  PeriodIndicator: string;
  StartDate: Date;
  StartTime: Date;
  EndDueDate: Date;
  EndTime: Date;
  Duration: number;
  DurationType: SAPB1.BoDurations;
  Reminder: SAPB1.BoYesNoEnum;
  ReminderPeriod: number;
  ReminderType: SAPB1.BoDurations;
  Location: number;
  AddressName: string;
  AddressType: SAPB1.BoAddressType;
  Street: string;
  City: string;
  Room: string;
  State: string;
  Country: string;
  DisplayInCalendar: SAPB1.BoYesNoEnum;
  CustomerRefNo: string;
  ProblemSubType: number;
  AttachmentEntry: number;
  ServiceBPType: SAPB1.ServiceTypeEnum;
  BPContactPerson: string;
  BPPhone1: string;
  BPPhone2: string;
  BPCellular: string;
  BPFax: string;
  BPeMail: string;
  BPProjectCode: string;
  BPTerritory: number;
  BPShipToCode: string;
  BPShipToAddress: string;
  BPBillToCode: string;
  BPBillToAddress: string;
  ServiceCallActivities: SAPB1.ServiceCallActivity[];
  ServiceCallInventoryExpenses: SAPB1.ServiceCallInventoryExpense[];
  ServiceCallSolutions: SAPB1.ServiceCallSolution[];
  ServiceCallSchedulings: SAPB1.ServiceCallScheduling[];
  ServiceCallBPAddressComponents: SAPB1.ServiceCallBPAddressComponent[];
}

export class ServiceCallKey {
  ServiceCallID: number;
}

export class ServiceCallActivity {
  LineNum: number;
  ActivityCode: number;
}

export class ServiceCallInventoryExpense {
  LineNum: number;
  PartType: SAPB1.BoSvcExpPartTypes;
  DocumentType: SAPB1.BoSvcEpxDocTypes;
  DocumentPostingDate: Date;
  DocumentNumber: number;
  StockTransferDirection: SAPB1.BoStckTrnDir;
  DocEntry: number;
}

export class ServiceCallSolution {
  LineNum: number;
  SolutionID: number;
}

export class ServiceCallScheduling {
  LineNum: number;
  Technician: number;
  HandledBy: number;
  StartDate: Date;
  StartTime: Date;
  EndDate: Date;
  EndTime: Date;
  Duration: number;
  ActualDuration: number;
  DurationType: SAPB1.BoDurations;
  Reminder: SAPB1.BoYesNoEnum;
  ReminderPeriod: number;
  ReminderType: SAPB1.BoDurations;
  ReminderSent: SAPB1.BoYesNoEnum;
  ReminderDate: Date;
  ReminderTime: Date;
  DisplayInCalendar: SAPB1.BoYesNoEnum;
  IsUnscheduled: SAPB1.BoYesNoEnum;
  Location: number;
  AddressName: string;
  AddressText: string;
  Street: string;
  City: string;
  Room: string;
  State: string;
  Country: string;
  Address2: string;
  Address3: string;
  AddressType: string;
  StreetNo: string;
  ZipCode: string;
  Block: string;
  County: string;
  TaxOffice: string;
  GlobalLocNum: string;
  IsClosed: SAPB1.BoYesNoEnum;
  Remark: string;
  AddressTypeBS: SAPB1.BoAddressType;
}

export class ServiceCallBPAddressComponent {
  ShipToStreet: string;
  ShipToStreetNo: string;
  ShipToBlock: string;
  ShipToBuilding: string;
  ShipToCity: string;
  ShipToZipCode: string;
  ShipToState: string;
  ShipToCounty: string;
  ShipToCountry: string;
  ShipToAddressType: string;
  ShipToAddress2: string;
  ShipToAddress3: string;
  ShipToGlobalLocationNumber: string;
  BillToStreet: string;
  BillToStreetNo: string;
  BillToBlock: string;
  BillToBuilding: string;
  BillToCity: string;
  BillToZipCode: string;
  BillToState: string;
  BillToCounty: string;
  BillToCountry: string;
  BillToAddressType: string;
  BillToAddress2: string;
  BillToAddress3: string;
  BillToGlobalLocationNumber: string;
}

export class ServiceCallOrigin {
  OriginID: number;
  Name: string;
  Description: string;
}

export class ServiceCallOriginKey {
  OriginID: number;
}

export class ServiceCallOriginParams {
  OriginID: number;
  Name: string;
}

export class UserKeysMD {
  TableName: string;
  KeyIndex: number;
  KeyName: string;
  Unique: SAPB1.BoYesNoEnum;
  UserKeysMD_Elements: SAPB1.UserKeysMD_Element[];
}

export class UserKeysMDKey {
  TableName: string;
  KeyIndex: number;
}

export class UserKeysMD_Element {
  SubKeyIndex: number;
  ColumnAlias: string;
}

export class Queue {
  QueueID: string;
  Description: string;
  Inactive: SAPB1.BoYesNoEnum;
  QueueManager: number;
  QueueEmail: string;
  QueueMembers: SAPB1.QueueMember[];
}

export class QueueKey {
  QueueID: string;
}

export class QueueMember {
  QueueID: string;
  MemberUserID: number;
}

export class DunningTerm {
  Code: string;
  Name: string;
  GroupingMethod: SAPB1.GroupingMethodEnum;
  DaysInYear: number;
  DaysInMonth: number;
  CalculateInterestMethod: SAPB1.CalculateInterestMethodEnum;
  ExchangeRateSelect: SAPB1.ExchangeRateSelectEnum;
  YearlyInterestRate: number;
  LetterFee: number;
  LetterFeeCurrency: string;
  MinimumBalance: number;
  MinimumBalanceCurrency: string;
  IncludeInterest: SAPB1.BoYesNoEnum;
  ApplyHighestLetterTemplate: SAPB1.BoYesNoEnum;
  AutomaticPosting: SAPB1.AutomaticPostingEnum;
  InterestAccount: string;
  FeeAccount: string;
  BaseDateSelect: SAPB1.BaseDateSelectEnum;
  DunningTermLines: SAPB1.DunningTermLine[];
}

export class DunningTermKey {
  Code: string;
}

export class DunningTermLine {
  LevelNum: number;
  LetterFormat: SAPB1.DunningLetterTypeEnum;
  Effectiveafter: string;
  LetterFee: number;
  LetterFeeCurrency: string;
  MininumBalance: number;
  MininumBalanceCurrency: string;
  CalculateInterest: SAPB1.BoYesNoEnum;
}

export class DunningTermParams {
  Code: string;
  Name: string;
}

export class SalesForecastParams {
  Numerator: number;
}

export class SalesForecast {
  ForecastStartDate: Date;
  ForecastEndDate: Date;
  ForecastCode: string;
  ForecastName: string;
  Numerator: number;
  View: SAPB1.BoForecastViewType;
  SalesForecastLines: SAPB1.SalesForecastLine[];
}

export class SalesForecastKey {
  Numerator: number;
}

export class SalesForecastLine {
  Quantity: number;
  ForecastedDay: Date;
  ItemNo: string;
  Warehouse: string;
}

export class MaterialRevaluationSNBParam {
  ItemCode: string;
}

export class MaterialRevaluationSNBParams {
  SnbAbsEntry: number;
  NewCost: number;
  DebitCredit: number;
  SystemNumber: number;
  LotNumber: string;
  ManufactureNumber: string;
  AdmissionDate: Date;
  ExpirationDate: Date;
}

export class TrackingNote {
  TrackingNoteNumber: number;
  CCDNumber: string;
  Date: Date;
  CustomsTerminal: string;
  CountryOfOrigin: string;
  TrackingNoteItemCollection: SAPB1.TrackingNoteItem[];
  TrackingNoteBrokerCollection: SAPB1.TrackingNoteBroker[];
}

export class TrackingNoteKey {
  TrackingNoteNumber: number;
}

export class TrackingNoteItem {
  TrackingNoteNumber: number;
  TrackingNoteLineNumber: number;
  ItemCCDNumber: string;
  ItemCode: string;
  Quantity: number;
}

export class TrackingNoteBroker {
  TrackingNoteNumber: number;
  TrackingNoteLineNumber: number;
  BPCode: string;
  AgreementNumber: number;
}

export class TrackingNoteParams {
  TrackingNoteNumber: number;
  CCDNumber: string;
}

export class BusinessPartnerParams {
  CardCode: string;
}

export class BusinessPartner {
  CardCode: string;
  CardName: string;
  CardType: SAPB1.BoCardTypes;
  GroupCode: number;
  Address: string;
  ZipCode: string;
  MailAddress: string;
  MailZipCode: string;
  Phone1: string;
  Phone2: string;
  Fax: string;
  ContactPerson: string;
  Notes: string;
  PayTermsGrpCode: number;
  CreditLimit: number;
  MaxCommitment: number;
  DiscountPercent: number;
  VatLiable: SAPB1.BoVatStatus;
  FederalTaxID: string;
  DeductibleAtSource: SAPB1.BoYesNoEnum;
  DeductionPercent: number;
  DeductionValidUntil: Date;
  PriceListNum: number;
  IntrestRatePercent: number;
  CommissionPercent: number;
  CommissionGroupCode: number;
  FreeText: string;
  SalesPersonCode: number;
  Currency: string;
  RateDiffAccount: string;
  Cellular: string;
  AvarageLate: number;
  City: string;
  County: string;
  Country: string;
  MailCity: string;
  MailCounty: string;
  MailCountry: string;
  EmailAddress: string;
  Picture: string;
  DefaultAccount: string;
  DefaultBranch: string;
  DefaultBankCode: string;
  AdditionalID: string;
  Pager: string;
  FatherCard: string;
  CardForeignName: string;
  FatherType: SAPB1.BoFatherCardTypes;
  DeductionOffice: string;
  ExportCode: string;
  MinIntrest: number;
  CurrentAccountBalance: number;
  OpenDeliveryNotesBalance: number;
  OpenOrdersBalance: number;
  VatGroup: string;
  ShippingType: number;
  Password: string;
  Indicator: string;
  IBAN: string;
  CreditCardCode: number;
  CreditCardNum: string;
  CreditCardExpiration: Date;
  DebitorAccount: string;
  OpenOpportunities: number;
  Valid: SAPB1.BoYesNoEnum;
  ValidFrom: Date;
  ValidTo: Date;
  ValidRemarks: string;
  Frozen: SAPB1.BoYesNoEnum;
  FrozenFrom: Date;
  FrozenTo: Date;
  FrozenRemarks: string;
  Block: string;
  BillToState: string;
  ExemptNum: string;
  Priority: number;
  FormCode1099: number;
  Box1099: string;
  PeymentMethodCode: string;
  BackOrder: SAPB1.BoYesNoEnum;
  PartialDelivery: SAPB1.BoYesNoEnum;
  BlockDunning: SAPB1.BoYesNoEnum;
  BankCountry: string;
  HouseBank: string;
  HouseBankCountry: string;
  HouseBankAccount: string;
  ShipToDefault: string;
  DunningLevel: number;
  DunningDate: Date;
  CollectionAuthorization: SAPB1.BoYesNoEnum;
  DME: string;
  InstructionKey: string;
  SinglePayment: SAPB1.BoYesNoEnum;
  ISRBillerID: string;
  PaymentBlock: SAPB1.BoYesNoEnum;
  ReferenceDetails: string;
  HouseBankBranch: string;
  OwnerIDNumber: string;
  PaymentBlockDescription: number;
  TaxExemptionLetterNum: string;
  MaxAmountOfExemption: number;
  ExemptionValidityDateFrom: Date;
  ExemptionValidityDateTo: Date;
  LinkedBusinessPartner: string;
  LastMultiReconciliationNum: number;
  DeferredTax: SAPB1.BoYesNoEnum;
  Equalization: SAPB1.BoYesNoEnum;
  SubjectToWithholdingTax: SAPB1.BoYesNoEnum;
  CertificateNumber: string;
  ExpirationDate: Date;
  NationalInsuranceNum: string;
  AccrualCriteria: SAPB1.BoYesNoEnum;
  WTCode: string;
  BillToBuildingFloorRoom: string;
  DownPaymentClearAct: string;
  ChannelBP: string;
  DefaultTechnician: number;
  BilltoDefault: string;
  CustomerBillofExchangDisc: string;
  Territory: number;
  ShipToBuildingFloorRoom: string;
  CustomerBillofExchangPres: string;
  ProjectCode: string;
  VatGroupLatinAmerica: string;
  DunningTerm: string;
  Website: string;
  OtherReceivablePayable: string;
  BillofExchangeonCollection: string;
  CompanyPrivate: SAPB1.BoCardCompanyTypes;
  LanguageCode: number;
  UnpaidBillofExchange: string;
  WithholdingTaxDeductionGroup: number;
  ClosingDateProcedureNumber: number;
  Profession: string;
  BankChargesAllocationCode: string;
  TaxRoundingRule: SAPB1.BoTaxRoundingRuleTypes;
  Properties1: SAPB1.BoYesNoEnum;
  Properties2: SAPB1.BoYesNoEnum;
  Properties3: SAPB1.BoYesNoEnum;
  Properties4: SAPB1.BoYesNoEnum;
  Properties5: SAPB1.BoYesNoEnum;
  Properties6: SAPB1.BoYesNoEnum;
  Properties7: SAPB1.BoYesNoEnum;
  Properties8: SAPB1.BoYesNoEnum;
  Properties9: SAPB1.BoYesNoEnum;
  Properties10: SAPB1.BoYesNoEnum;
  Properties11: SAPB1.BoYesNoEnum;
  Properties12: SAPB1.BoYesNoEnum;
  Properties13: SAPB1.BoYesNoEnum;
  Properties14: SAPB1.BoYesNoEnum;
  Properties15: SAPB1.BoYesNoEnum;
  Properties16: SAPB1.BoYesNoEnum;
  Properties17: SAPB1.BoYesNoEnum;
  Properties18: SAPB1.BoYesNoEnum;
  Properties19: SAPB1.BoYesNoEnum;
  Properties20: SAPB1.BoYesNoEnum;
  Properties21: SAPB1.BoYesNoEnum;
  Properties22: SAPB1.BoYesNoEnum;
  Properties23: SAPB1.BoYesNoEnum;
  Properties24: SAPB1.BoYesNoEnum;
  Properties25: SAPB1.BoYesNoEnum;
  Properties26: SAPB1.BoYesNoEnum;
  Properties27: SAPB1.BoYesNoEnum;
  Properties28: SAPB1.BoYesNoEnum;
  Properties29: SAPB1.BoYesNoEnum;
  Properties30: SAPB1.BoYesNoEnum;
  Properties31: SAPB1.BoYesNoEnum;
  Properties32: SAPB1.BoYesNoEnum;
  Properties33: SAPB1.BoYesNoEnum;
  Properties34: SAPB1.BoYesNoEnum;
  Properties35: SAPB1.BoYesNoEnum;
  Properties36: SAPB1.BoYesNoEnum;
  Properties37: SAPB1.BoYesNoEnum;
  Properties38: SAPB1.BoYesNoEnum;
  Properties39: SAPB1.BoYesNoEnum;
  Properties40: SAPB1.BoYesNoEnum;
  Properties41: SAPB1.BoYesNoEnum;
  Properties42: SAPB1.BoYesNoEnum;
  Properties43: SAPB1.BoYesNoEnum;
  Properties44: SAPB1.BoYesNoEnum;
  Properties45: SAPB1.BoYesNoEnum;
  Properties46: SAPB1.BoYesNoEnum;
  Properties47: SAPB1.BoYesNoEnum;
  Properties48: SAPB1.BoYesNoEnum;
  Properties49: SAPB1.BoYesNoEnum;
  Properties50: SAPB1.BoYesNoEnum;
  Properties51: SAPB1.BoYesNoEnum;
  Properties52: SAPB1.BoYesNoEnum;
  Properties53: SAPB1.BoYesNoEnum;
  Properties54: SAPB1.BoYesNoEnum;
  Properties55: SAPB1.BoYesNoEnum;
  Properties56: SAPB1.BoYesNoEnum;
  Properties57: SAPB1.BoYesNoEnum;
  Properties58: SAPB1.BoYesNoEnum;
  Properties59: SAPB1.BoYesNoEnum;
  Properties60: SAPB1.BoYesNoEnum;
  Properties61: SAPB1.BoYesNoEnum;
  Properties62: SAPB1.BoYesNoEnum;
  Properties63: SAPB1.BoYesNoEnum;
  Properties64: SAPB1.BoYesNoEnum;
  CompanyRegistrationNumber: string;
  VerificationNumber: string;
  DiscountBaseObject: SAPB1.DiscountGroupBaseObjectEnum;
  DiscountRelations: SAPB1.DiscountGroupRelationsEnum;
  TypeReport: SAPB1.AssesseeTypeEnum;
  ThresholdOverlook: SAPB1.BoYesNoEnum;
  SurchargeOverlook: SAPB1.BoYesNoEnum;
  DownPaymentInterimAccount: string;
  OperationCode347: SAPB1.OperationCode347Enum;
  InsuranceOperation347: SAPB1.BoYesNoEnum;
  HierarchicalDeduction: SAPB1.BoYesNoEnum;
  ShaamGroup: SAPB1.ShaamGroupEnum;
  WithholdingTaxCertified: SAPB1.BoYesNoEnum;
  BookkeepingCertified: SAPB1.BoYesNoEnum;
  PlanningGroup: string;
  Affiliate: SAPB1.BoYesNoEnum;
  Industry: number;
  VatIDNum: string;
  DatevAccount: number;
  DatevFirstDataEntry: SAPB1.BoYesNoEnum;
  GTSRegNo: string;
  GTSBankAccountNo: string;
  GTSBillingAddrTel: string;
  ETaxWebSite: number;
  HouseBankIBAN: string;
  VATRegistrationNumber: string;
  RepresentativeName: string;
  IndustryType: string;
  BusinessType: string;
  Series: number;
  AutomaticPosting: SAPB1.AutomaticPostingEnum;
  InterestAccount: string;
  FeeAccount: string;
  CampaignNumber: number;
  AliasName: string;
  DefaultBlanketAgreementNumber: number;
  EffectiveDiscount: SAPB1.DiscountGroupRelationsEnum;
  NoDiscounts: SAPB1.BoYesNoEnum;
  GlobalLocationNumber: string;
  EDISenderID: string;
  EDIRecipientID: string;
  ResidenNumber: SAPB1.ResidenceNumberTypeEnum;
  RelationshipCode: string;
  RelationshipDateFrom: Date;
  RelationshipDateTill: Date;
  UnifiedFederalTaxID: string;
  AttachmentEntry: number;
  TypeOfOperation: SAPB1.TypeOfOperationEnum;
  EndorsableChecksFromBP: SAPB1.BoYesNoEnum;
  AcceptsEndorsedChecks: SAPB1.BoYesNoEnum;
  OwnerCode: number;
  BlockSendingMarketingContent: SAPB1.BoYesNoEnum;
  AgentCode: string;
  U_Dochi_SalesEx: Date;
  U_CON_Test: string;
  U_MinimumPO: number;
  BPAddresses: SAPB1.BPAddress[];
  ContactEmployees: SAPB1.ContactEmployee[];
  BPAccountReceivablePaybleCollection: SAPB1.BPAccountReceivablePayble[];
  BPPaymentMethods: SAPB1.BPPaymentMethod[];
  BPWithholdingTaxCollection: SAPB1.BPWithholdingTax[];
  BPPaymentDates: SAPB1.BPPaymentDate[];
  BPBranchAssignment: SAPB1.BPBranchAssignmentItem[];
  BPBankAccounts: SAPB1.BPBankAccount[];
  BPFiscalTaxIDCollection: SAPB1.BPFiscalTaxID[];
  DiscountGroups: SAPB1.DiscountGroup[];
  BPIntrastatExtension: SAPB1.BPIntrastatExtension;
  BPBlockSendingMarketingContents: SAPB1.BPBlockSendingMarketingContent[];
}

export class BusinessPartnerKey {
  CardCode: string;
}

export class BPAddress {
  AddressName: string;
  Street: string;
  Block: string;
  ZipCode: string;
  City: string;
  County: string;
  Country: string;
  State: string;
  FederalTaxID: string;
  TaxCode: string;
  BuildingFloorRoom: string;
  AddressType: SAPB1.BoAddressType;
  AddressName2: string;
  AddressName3: string;
  TypeOfAddress: string;
  StreetNo: string;
  BPCode: string;
  RowNum: number;
  GlobalLocationNumber: string;
  Nationality: string;
  TaxOffice: string;
}

export class ContactEmployee {
  CardCode: string;
  Name: string;
  Position: string;
  Address: string;
  Phone1: string;
  Phone2: string;
  MobilePhone: string;
  Fax: string;
  E_Mail: string;
  Pager: string;
  Remarks1: string;
  Remarks2: string;
  Password: string;
  InternalCode: number;
  PlaceOfBirth: string;
  DateOfBirth: Date;
  Gender: SAPB1.BoGenderTypes;
  Profession: string;
  Title: string;
  CityOfBirth: string;
  Active: SAPB1.BoYesNoEnum;
  FirstName: string;
  MiddleName: string;
  LastName: string;
  EmailGroupCode: string;
  BlockSendingMarketingContent: SAPB1.BoYesNoEnum;
  ContactEmployeeBlockSendingMarketingContents: SAPB1.ContactEmployeeBlockSendingMarketingContent[];
}

export class ContactEmployeeBlockSendingMarketingContent {
  ContactEmployeeAbsEntry: number;
  CommunicationMediaId: number;
  Choose: SAPB1.BoYesNoEnum;
}

export class BPAccountReceivablePayble {
  AccountType: SAPB1.BoBpAccountTypes;
  AccountCode: string;
  BPCode: string;
}

export class BPPaymentMethod {
  PaymentMethodCode: string;
  RowNumber: number;
  BPCode: string;
}

export class BPWithholdingTax {
  WTCode: string;
  BPCode: string;
}

export class BPPaymentDate {
  PaymentDate: string;
  BPCode: string;
}

export class BPBranchAssignmentItem {
  BPCode: string;
  BPLID: number;
}

export class BPBankAccount {
  LogInstance: number;
  UserNo4: string;
  BPCode: string;
  County: string;
  State: string;
  UserNo2: string;
  IBAN: string;
  ZipCode: string;
  City: string;
  Block: string;
  Branch: string;
  Country: string;
  Street: string;
  ControlKey: string;
  UserNo3: string;
  BankCode: string;
  AccountNo: string;
  UserNo1: string;
  InternalKey: number;
  BuildingFloorRoom: string;
  BIK: string;
  AccountName: string;
  CorrespondentAccount: string;
  Phone: string;
  Fax: string;
  CustomerIdNumber: string;
  ISRBillerID: string;
  ISRType: number;
  BICSwiftCode: string;
  ABARoutingNumber: string;
  MandateID: string;
  SignatureDate: Date;
  MandateExpDate: Date;
  SEPASeqType: SAPB1.SEPASequenceTypeEnum;
}

export class BPFiscalTaxID {
  Address: string;
  CNAECode: number;
  TaxId0: string;
  TaxId1: string;
  TaxId2: string;
  TaxId3: string;
  TaxId4: string;
  TaxId5: string;
  TaxId6: string;
  TaxId7: string;
  TaxId8: string;
  TaxId9: string;
  TaxId10: string;
  TaxId11: string;
  BPCode: string;
  AddrType: SAPB1.BoAddressType;
  TaxId12: string;
  TaxId13: string;
}

export class DiscountGroup {
  ObjectEntry: string;
  DiscountPercentage: number;
  BPCode: string;
  BaseObjectType: SAPB1.DiscountGroupBaseObjectEnum;
}

export class BPIntrastatExtension {
  CardCode: string;
  TransportMode: number;
  Incoterms: number;
  NatureOfTransactions: number;
  StatisticalProcedure: number;
  CustomsProcedure: number;
  PortOfEntryOrExit: number;
  DomesticOrForeignID: string;
  IntrastatRelevant: SAPB1.BoYesNoEnum;
}

export class BPBlockSendingMarketingContent {
  CardCode: string;
  CommunicationMediaId: number;
  Choose: SAPB1.BoYesNoEnum;
}

export class OpenningBalanceAccount {
  OpenBalanceAccount: string;
  Date: Date;
  Ref1: string;
  Ref2: string;
  Details: string;
}

export class BPCode {
  Code: string;
  DueDate: Date;
  Debit: number;
  Credit: number;
  SystemDebit: number;
  SystemCredit: number;
  ForeignDebit: number;
  ForeignCredit: number;
  ForeignCurrency: string;
  BpCtrlAcct: string;
}

export class Territory {
  TerritoryID: number;
  Description: string;
  LocationIndex: number;
  Inactive: SAPB1.BoYesNoEnum;
  Parent: number;
}

export class TerritoryKey {
  TerritoryID: number;
}

export class UserMenuItem {
  Name: string;
  Position: number;
  Type: SAPB1.UserMenuItemTypeEnum;
  LinkedObjType: string;
  LinkedObjKey: string;
  LinkedFormMenuID: number;
  LinkedFormNum: number;
  ReportPath: string;
}

export class UserMenuParams {
  UserID: number;
}

export class Industry {
  IndustryDescription: string;
  IndustryName: string;
  IndustryCode: number;
}

export class IndustryKey {
  IndustryCode: number;
}

export class ProductionOrderParams {
  AbsoluteEntry: number;
}

export class ProductionOrder {
  AbsoluteEntry: number;
  DocumentNumber: number;
  Series: number;
  ItemNo: string;
  ProductionOrderStatus: SAPB1.BoProductionOrderStatusEnum;
  ProductionOrderType: SAPB1.BoProductionOrderTypeEnum;
  PlannedQuantity: number;
  CompletedQuantity: number;
  RejectedQuantity: number;
  PostingDate: Date;
  DueDate: Date;
  ProductionOrderOriginEntry: number;
  ProductionOrderOriginNumber: number;
  ProductionOrderOrigin: SAPB1.BoProductionOrderOriginEnum;
  UserSignature: number;
  Remarks: string;
  ClosingDate: Date;
  ReleaseDate: Date;
  CustomerCode: string;
  Warehouse: string;
  InventoryUOM: string;
  JournalRemarks: string;
  TransactionNumber: number;
  CreationDate: Date;
  Printed: SAPB1.BoYesNoEnum;
  DistributionRule: string;
  Project: string;
  DistributionRule2: string;
  DistributionRule3: string;
  DistributionRule4: string;
  DistributionRule5: string;
  UoMEntry: number;
  StartDate: Date;
  ProductionOrderLines: SAPB1.ProductionOrderLine[];
  ProductionOrdersSalesOrderLines: SAPB1.ProductionOrdersSalesOrderLine[];
}

export class ProductionOrderKey {
  AbsoluteEntry: number;
}

export class ProductionOrderLine {
  DocumentAbsoluteEntry: number;
  LineNumber: number;
  ItemNo: string;
  BaseQuantity: number;
  PlannedQuantity: number;
  IssuedQuantity: number;
  ProductionOrderIssueType: SAPB1.BoIssueMethod;
  Warehouse: string;
  VisualOrder: number;
  DistributionRule: string;
  LocationCode: number;
  Project: string;
  DistributionRule2: string;
  DistributionRule3: string;
  DistributionRule4: string;
  DistributionRule5: string;
  UoMEntry: number;
  UoMCode: number;
  WipAccount: string;
  ItemType: SAPB1.ProductionItemType;
  LineText: string;
  AdditionalQuantity: number;
  ResourceAllocation: SAPB1.ResourceAllocationEnum;
  StartDate: Date;
  EndDate: Date;
  SerialNumbers: SAPB1.SerialNumber[];
  BatchNumbers: SAPB1.BatchNumber[];
}

export class ProductionOrdersSalesOrderLine {
  DocEntry: number;
  BaseNumber: number;
  BaseAbsEntry: number;
  BaseLine: number;
}

export class PackagesType {
  Type: string;
  Code: number;
  Length1: number;
  Length1Unit: number;
  Length2: number;
  Length2Unit: number;
  Width1: number;
  Width1Unit: number;
  Width2: number;
  Width2Unit: number;
  Height1: number;
  Height1Unit: number;
  Height2: number;
  Height2Unit: number;
  Volume: number;
  VolumeUnit: number;
  Weight1: number;
  Weight1Unit: number;
  Weight2: number;
  Weight2Unit: number;
}

export class PackagesTypeKey {
  Code: number;
}

export class UserObjectsMD {
  TableName: string;
  Code: string;
  LogTableName: string;
  CanCreateDefaultForm: SAPB1.BoYesNoEnum;
  ObjectType: SAPB1.BoUDOObjType;
  ExtensionName: string;
  CanCancel: SAPB1.BoYesNoEnum;
  CanDelete: SAPB1.BoYesNoEnum;
  CanLog: SAPB1.BoYesNoEnum;
  ManageSeries: SAPB1.BoYesNoEnum;
  CanFind: SAPB1.BoYesNoEnum;
  CanYearTransfer: SAPB1.BoYesNoEnum;
  Name: string;
  CanClose: SAPB1.BoYesNoEnum;
  OverwriteDllfile: SAPB1.BoYesNoEnum;
  UseUniqueFormType: SAPB1.BoYesNoEnum;
  CanArchive: SAPB1.BoYesNoEnum;
  MenuItem: SAPB1.BoYesNoEnum;
  MenuCaption: string;
  FatherMenuID: number;
  Position: number;
  MenuUID: string;
  EnableEnhancedForm: SAPB1.BoYesNoEnum;
  RebuildEnhancedForm: SAPB1.BoYesNoEnum;
  FormSRF: string;
  UserObjectMD_ChildTables: SAPB1.UserObjectMD_ChildTable[];
  UserObjectMD_FindColumns: SAPB1.UserObjectMD_FindColumn[];
  UserObjectMD_FormColumns: SAPB1.UserObjectMD_FormColumn[];
  UserObjectMD_EnhancedFormColumns: SAPB1.UserObjectMD_EnhancedFormColumn[];
}

export class UserObjectsMDKey {
  Code: string;
}

export class UserObjectMD_ChildTable {
  SonNumber: number;
  TableName: string;
  LogTableName: string;
  Code: string;
  ObjectName: string;
}

export class UserObjectMD_FindColumn {
  ColumnNumber: number;
  ColumnAlias: string;
  ColumnDescription: string;
  Code: string;
}

export class UserObjectMD_FormColumn {
  FormColumnAlias: string;
  FormColumnDescription: string;
  FormColumnNumber: number;
  SonNumber: number;
  Code: string;
  Editable: SAPB1.BoYesNoEnum;
}

export class UserObjectMD_EnhancedFormColumn {
  Code: string;
  ColumnNumber: number;
  ChildNumber: number;
  ColumnAlias: string;
  ColumnDescription: string;
  ColumnIsUsed: SAPB1.BoYesNoEnum;
  Editable: SAPB1.BoYesNoEnum;
}

export class EmployeePosition {
  PositionID: number;
  Name: string;
  Description: string;
}

export class EmployeePositionKey {
  PositionID: number;
}

export class EmployeePositionParams {
  PositionID: number;
  Name: string;
  Description: string;
}

export class Team {
  TeamID: number;
  TeamName: string;
  Description: string;
  TeamMembers: SAPB1.TeamMember[];
}

export class TeamKey {
  TeamID: number;
}

export class TeamMember {
  TeamID: number;
  EmployeeID: number;
  RoleInTeam: SAPB1.BoRoleInTeam;
}

export class Relationship {
  RelationshipDescription: string;
  RelationshipCode: number;
}

export class RelationshipKey {
  RelationshipCode: number;
}

export class UserPermissionTree {
  UserSignature: number;
  DisplayOrder: number;
  PermissionID: string;
  Options: SAPB1.BoUPTOptions;
  Name: string;
  Levels: number;
  IsItem: SAPB1.BoYesNoEnum;
  ParentID: string;
  UserPermissionForms: SAPB1.UserPermissionForm[];
}

export class UserPermissionTreeKey {
  PermissionID: string;
}

export class UserPermissionForm {
  FormType: string;
  DisplayOrder: number;
  PermissionID: string;
}

export class PredefinedText {
  Numerator: number;
  TextCode: string;
  Text: string;
}

export class PredefinedTextKey {
  Numerator: number;
}

export class PredefinedTextParams {
  Numerator: number;
  TextCode: string;
}

export class ActivityStatus {
  StatusDescription: string;
  StatusId: number;
  StatusName: string;
}

export class ActivityStatusKey {
  StatusId: number;
}

export class ChooseFromList {
  ObjectName: string;
  ChooseFromList_Lines: SAPB1.ChooseFromList_Line[];
}

export class ChooseFromListKey {
  ObjectName: string;
}

export class ChooseFromList_Line {
  FieldNo: string;
  DisplayedName: string;
  GroupBy: SAPB1.BoYesNoEnum;
  Visible: SAPB1.BoYesNoEnum;
  ShowType: SAPB1.BoYesNoEnum;
  SortOrder: SAPB1.SortOrderEnum;
  VisualIndex: number;
}

export class FormattedSearche {
  FormID: string;
  ItemID: string;
  ColumnID: string;
  Action: SAPB1.BoFormattedSearchActionEnum;
  QueryID: number;
  Index: number;
  Refresh: SAPB1.BoYesNoEnum;
  FieldID: string;
  ForceRefresh: SAPB1.BoYesNoEnum;
  ByField: SAPB1.BoYesNoEnum;
}

export class FormattedSearcheKey {
  Index: number;
}

export class Attachments2 {
  AbsoluteEntry: number;
  Attachments2_Lines: SAPB1.Attachments2_Line[];
}

export class Attachments2Key {
  AbsoluteEntry: number;
}

export class Attachments2_Line {
  SourcePath: string;
  FileName: string;
  FileExtension: string;
  AttachmentDate: Date;
  UserID: number;
  Override: SAPB1.BoYesNoEnum;
}

export class UserLanguage {
  Code: number;
  LanguageShortName: string;
  LanguageFullName: string;
  RelatedSystemLanguage: number;
}

export class UserLanguageKey {
  Code: number;
}

export class MultiLanguageTranslation {
  Numerator: number;
  TableName: string;
  FieldAlias: string;
  PrimaryKeyofobject: string;
  TranslationsInUserLanguages: SAPB1.TranslationsInUserLanguage[];
}

export class MultiLanguageTranslationKey {
  Numerator: number;
}

export class TranslationsInUserLanguage {
  KeyFromHeaderTable: number;
  LanguageCodeOfUserLanguage: number;
  Translationscontent: string;
}

export class DynamicSystemStringParams {
  FormID: string;
  ItemID: string;
  ColumnID: string;
}

export class DynamicSystemString {
  FormID: string;
  ItemID: string;
  ColumnID: string;
  ItemString: string;
  IsBold: SAPB1.BoYesNoEnum;
  IsItalics: SAPB1.BoYesNoEnum;
}

export class DynamicSystemStringKey {
  FormID: string;
  ItemID: string;
  ColumnID: string;
}

export class HouseBankAccount {
  BankCode: string;
  AccNo: string;
  Branch: string;
  NextCheckNo: number;
  GLAccount: string;
  Street: string;
  Block: string;
  ZipCode: string;
  City: string;
  County: string;
  Country: string;
  State: string;
  BISR: SAPB1.BoYesNoEnum;
  ControlKey: string;
  UserNo1: string;
  UserNo2: string;
  UserNo3: string;
  UserNo4: string;
  IBAN: string;
  DebtofDiscountedBillofExc: string;
  ToleranceDays: number;
  MinAmountofBillofExchang: number;
  MaxAmountofBillofExchan: number;
  DiscountLimit: number;
  DaysInAdvance: number;
  BankonCollection: string;
  BankonDiscounted: string;
  GLInterimAccount: string;
  AbsoluteEntry: number;
  BankKey: number;
  LockChecksPrinting: SAPB1.BoYesNoEnum;
  TemplateName: string;
  MaximumLines: number;
  PrintOn: SAPB1.PrintOnEnum;
  CustomerIdNumber: string;
  ISRBillerID: string;
  ISRType: number;
  AccountCheckDigit: string;
  OurNumber: number;
  AgreementNumber: string;
  AddressType: string;
  StreetNo: string;
  Building: string;
  IncomingPaymentSeries: number;
  OutgoingPaymentSeries: number;
  JournalEntrySeries: number;
  ImportFileName: string;
  AccountName: string;
  BICSwiftCode: string;
  FineAccount: string;
  InterestAccount: string;
  DiscountAccount: string;
  ServiceFeeAccount: string;
  IOFTaxAccount: string;
  OtherExpensesAccount: string;
  OtherIncomesAccount: string;
  RetornoFileName: string;
  BranchCheckDigit: string;
  CollectionCode: string;
  FileSeqNextNumber: number;
}

export class HouseBankAccountKey {
  AbsoluteEntry: number;
}

export class POSDailySummary {
  AbsEntry: number;
  Date: Date;
  EquipmentNo: string;
  CounterPosition: number;
  ResetCounterPosition: number;
  OperationCounter: number;
  Total: number;
  GrossSales: number;
  PISTotal: number;
  COFINSTotal: number;
  POSTotalizerCollection: SAPB1.POSTotalizer[];
}

export class POSDailySummaryKey {
  AbsEntry: number;
}

export class POSTotalizer {
  LineNum: number;
  Code: string;
  Number: number;
  Total: number;
  Description: string;
}

export class POSDailySummaryParams {
  AbsEntry: number;
}

export class EmailGroup {
  EmailGroupCode: string;
  EmailGroupName: string;
}

export class EmailGroupKey {
  EmailGroupCode: string;
}

export class EmailGroupParams {
  EmailGroupCode: string;
  EmailGroupName: string;
}

export class ServiceCallProblemSubType {
  ProblemSubTypeID: number;
  Name: string;
  Description: string;
}

export class ServiceCallProblemSubTypeKey {
  ProblemSubTypeID: number;
}

export class ServiceCallProblemSubTypeParams {
  ProblemSubTypeID: number;
  Name: string;
}

export class WTDCode {
  AbsEntry: number;
  WTaxCode: string;
  WTaxName: string;
  FormulaID: number;
  Inactive: SAPB1.BoYesNoEnum;
  OfficialCode: string;
  Category: SAPB1.WithholdingTaxCodeCategoryEnum;
  BaseType: SAPB1.WithholdingTaxCodeBaseTypeEnum;
  Type: number;
  MinAmount: number;
  BaseAmountPrct: number;
  SlidingScaleProgressiveTax: SAPB1.BoYesNoEnum;
  WTDEffectiveDateCollection: SAPB1.WTDEffectiveDate[];
  WTDBPCollection: SAPB1.WTDBP[];
  WTDItemCollection: SAPB1.WTDItem[];
  WTDFreightCollection: SAPB1.WTDFreight[];
}

export class WTDCodeKey {
  AbsEntry: number;
}

export class WTDEffectiveDate {
  LineNumber: number;
  EffectiveFrom: Date;
  Rate: number;
  WTDValueRangeCollection: SAPB1.WTDValueRange[];
}

export class WTDValueRange {
  LineNumber: number;
  SeqNum: number;
  EffectiveFrom: Date;
  ValueFrom: number;
  Rate: number;
}

export class WTDBP {
  BPKeyPart1: string;
  BPKeyPart2: string;
  WTaxCode: string;
  EffectiveDateFrom: Date;
  EffectiveDateTo: Date;
  Rate: number;
  DetailType: SAPB1.WTDDetailType;
}

export class WTDItem {
  ItemCode: string;
  WTaxCode: string;
  EffectiveDateFrom: Date;
  EffectiveDateTo: Date;
}

export class WTDFreight {
  FreightCode: number;
  WTaxCode: string;
  EffectiveDateFrom: Date;
  EffectiveDateTo: Date;
}

export class WTDCodeParams {
  AbsEntry: number;
  WTaxCode: string;
  WTaxName: string;
}

export class PM_ProjectDocumentData {
  AbsEntry: number;
  Owner: number;
  ProjectName: string;
  StartDate: Date;
  FinishedPercent: number;
  DocNum: number;
  Series: number;
  ProjectType: SAPB1.ProjectTypeEnum;
  BusinessPartner: string;
  BusinessPartnerName: string;
  ContactPerson: number;
  Territory: number;
  SalesEmployee: number;
  AllowSubprojects: SAPB1.BoYesNoEnum;
  ProjectStatus: SAPB1.ProjectStatusTypeEnum;
  DueDate: Date;
  ClosingDate: Date;
  FinancialProject: string;
  RiskLevel: SAPB1.RiskLevelTypeEnum;
  Industry: number;
  Reason: string;
  AttachmentEntry: number;
  PM_StagesCollection: SAPB1.PM_StageData[];
  PM_OpenIssuesCollection: SAPB1.PM_OpenIssueData[];
  PM_DocumentsCollection: SAPB1.PM_DocumentData[];
  PM_ActivitiesCollection: SAPB1.PM_ActivityData[];
  PM_WorkOrdersCollection: SAPB1.PM_WorkOrderData[];
  PM_SummaryData: SAPB1.PM_SummaryData;
  PM_DocAttachements: SAPB1.PM_DocAttachement[];
  PM_StageAttachements: SAPB1.PM_StageAttachement[];
}

export class PM_ProjectDocumentDataKey {
  AbsEntry: number;
}

export class PM_StageData {
  LineID: number;
  StageID: number;
  StageType: number;
  StartDate: Date;
  CloseDate: Date;
  Task: number;
  Description: string;
  ExpectedCosts: number;
  InvoicedAmountSales: number;
  OpenAmountSales: number;
  InvoicedAmountPurchase: number;
  OpenAmountPurchase: number;
  PercentualCompletness: number;
  IsFinished: SAPB1.BoYesNoEnum;
  StageOwner: number;
  DependsOnStage1: number;
  DependsOnStage2: number;
  DependsOnStage3: number;
  DependsOnStage4: number;
  StageDependency1Type: SAPB1.StageDepTypeEnum;
  StageDependency2Type: SAPB1.StageDepTypeEnum;
  StageDependency3Type: SAPB1.StageDepTypeEnum;
  StageDependency4Type: SAPB1.StageDepTypeEnum;
  DependsOnStageID1: number;
  DependsOnStageID2: number;
  DependsOnStageID3: number;
  DependsOnStageID4: number;
  AttachmentEntry: number;
}

export class PM_OpenIssueData {
  LineID: number;
  StageID: number;
  Area: number;
  Priority: number;
  Remarks: string;
  Closed: SAPB1.BoYesNoEnum;
  SolutionID: number;
  Responsible: number;
  EnteredBy: number;
  EnteredDate: Date;
  Effort: number;
}

export class PM_DocumentData {
  LineID: number;
  StageID: number;
  DocType: SAPB1.PMDocumentTypeEnum;
  DocEntry: number;
  DocDate: Date;
  Total: number;
  LineNumber: number;
  Status: SAPB1.LineStatusTypeEnum;
  AmountCategory: SAPB1.AmountCatTypeEnum;
}

export class PM_ActivityData {
  LineID: number;
  StageID: number;
  ActivityID: number;
}

export class PM_WorkOrderData {
  LineID: number;
  StageID: number;
  DocNumber: number;
  DocEntry: number;
}

export class PM_SummaryData {
  LineID: number;
  SubprojectBudget: number;
  SumOpenAmountPurchase: number;
  SumInvoicedAmountPurchase: number;
  TotalAmountPurchase: number;
  TotalVariancePurchase: number;
  VariancePerceptionPurchase: number;
  AccumSubprojectBudget: number;
  AccumOpenAmountPurchase: number;
  AccumInvoicedAmountPurchase: number;
  AccumTotalPurchase: number;
  AccumTotalVariancePurchase: number;
  AccumVariancePerceptionPurchase: number;
  PotentialSubprojectAmount: number;
  SumOpenAmountSales: number;
  SumInvoicedAmountSales: number;
  TotalAmountSales: number;
  TotalVarianceSales: number;
  VariancePerceptionSales: number;
  AccumPotentialSubprojectAmount: number;
  AccumOpenAmountSales: number;
  AccumInvoicedAmountSales: number;
  AccumTotalSales: number;
  AccumTotalVarianceSales: number;
  AccumVariancePerceptionSales: number;
  ActualItemComponentCost: number;
  ActualResourceComponentCost: number;
  ActualAdditionalCost: number;
  ActualProductCost: number;
  ActualByProductCost: number;
  TotalVariance: number;
  DueDate: Date;
  ActualClosingDate: Date;
  Overdue: number;
}

export class PM_DocAttachement {
  AbsEntry: number;
  LineID: number;
  SourcePath: string;
  FileName: string;
  FileExtension: string;
  AttachementDate: Date;
}

export class PM_StageAttachement {
  AbsEntry: number;
  LineID: number;
  SourcePath: string;
  FileName: string;
  FileExtension: string;
  AttachementDate: Date;
}

export class PM_SubprojectDocumentData {
  AbsEntry: number;
  Owner: number;
  SubprojectName: string;
  StartDate: Date;
  FinishedPercent: number;
  ParentID: number;
  ProjectID: number;
  Order: number;
  SubprojectType: number;
  SubprojectContribution: number;
  SubprojectStatus: SAPB1.SubprojectStatusTypeEnum;
  SubprojectEndDate: Date;
  ActualCost: number;
  PlannedCost: number;
  SubprojectDepth: number;
  DueDate: Date;
  PMS_StagesCollection: SAPB1.PMS_StageData[];
  PMS_OpenIssuesCollection: SAPB1.PMS_OpenIssueData[];
  PMS_DocumentsCollection: SAPB1.PMS_DocumentData[];
  PMS_ActivitiesCollection: SAPB1.PMS_ActivityData[];
  PMS_WorkOrdersCollection: SAPB1.PMS_WorkOrderData[];
  PMS_SummaryData: SAPB1.PMS_SummaryData;
  PMS_DocAttachements: SAPB1.PMS_DocAttachement[];
  PMS_StageAttachements: SAPB1.PMS_StageAttachement[];
}

export class PMS_StageData {
  LineID: number;
  StageID: number;
  StageType: number;
  StartDate: Date;
  CloseDate: Date;
  Task: number;
  Description: string;
  ExpectedCosts: number;
  InvoicedAmountSales: number;
  OpenAmountSales: number;
  InvoicedAmountPurchase: number;
  OpenAmountPurchase: number;
  PercentualCompletness: number;
  IsFinished: SAPB1.BoYesNoEnum;
  StageOwner: number;
  DependsOnStage1: number;
  DependsOnStage2: number;
  DependsOnStage3: number;
  DependsOnStage4: number;
  StageDependency1Type: SAPB1.StageDepTypeEnum;
  StageDependency2Type: SAPB1.StageDepTypeEnum;
  StageDependency3Type: SAPB1.StageDepTypeEnum;
  StageDependency4Type: SAPB1.StageDepTypeEnum;
  DependsOnStageID1: number;
  DependsOnStageID2: number;
  DependsOnStageID3: number;
  DependsOnStageID4: number;
  AttachmentEntry: number;
}

export class PMS_OpenIssueData {
  LineID: number;
  StageID: number;
  Area: number;
  Priority: number;
  Remarks: string;
  Closed: SAPB1.BoYesNoEnum;
  SolutionID: number;
  Responsible: number;
  EnteredBy: number;
  EnteredDate: Date;
  Effort: number;
}

export class PMS_DocumentData {
  LineID: number;
  StageID: number;
  DocType: SAPB1.PMDocumentTypeEnum;
  DocEntry: number;
  DocDate: Date;
  Total: number;
  LineNumber: number;
  Status: SAPB1.LineStatusTypeEnum;
  AmountCategory: SAPB1.AmountCatTypeEnum;
}

export class PMS_ActivityData {
  LineID: number;
  StageID: number;
  ActivityID: number;
}

export class PMS_WorkOrderData {
  LineID: number;
  StageID: number;
  DocNumber: number;
  DocEntry: number;
}

export class PMS_SummaryData {
  LineID: number;
  SubprojectBudget: number;
  SumOpenAmountPurchase: number;
  SumInvoicedAmountPurchase: number;
  TotalAmountPurchase: number;
  TotalVariancePurchase: number;
  VariancePerceptionPurchase: number;
  AccumSubprojectBudget: number;
  AccumOpenAmountPurchase: number;
  AccumInvoicedAmountPurchase: number;
  AccumTotalPurchase: number;
  AccumTotalVariancePurchase: number;
  AccumVariancePerceptionPurchase: number;
  PotentialSubprojectAmount: number;
  SumOpenAmountSales: number;
  SumInvoicedAmountSales: number;
  TotalAmountSales: number;
  TotalVarianceSales: number;
  VariancePerceptionSales: number;
  AccumPotentialSubprojectAmount: number;
  AccumOpenAmountSales: number;
  AccumInvoicedAmountSales: number;
  AccumTotalSales: number;
  AccumTotalVarianceSales: number;
  AccumVariancePerceptionSales: number;
  ActualItemComponentCost: number;
  ActualResourceComponentCost: number;
  ActualAdditionalCost: number;
  ActualProductCost: number;
  ActualByProductCost: number;
  TotalVariance: number;
  DueDate: Date;
  ActualClosingDate: Date;
  Overdue: number;
}

export class PMS_DocAttachement {
  AbsEntry: number;
  LineID: number;
  SourcePath: string;
  FileName: string;
  FileExtension: string;
  AttachementDate: Date;
}

export class PMS_StageAttachement {
  AbsEntry: number;
  LineID: number;
  SourcePath: string;
  FileName: string;
  FileExtension: string;
  AttachementDate: Date;
}

export class PM_ProjectDocumentParams {
  AbsEntry: number;
}

export class PM_SubprojectDocumentParams {
  AbsEntry: number;
}

export class PM_SubprojectParams {
  AbsEntry: number;
  IsSubproject: SAPB1.BoYesNoEnum;
}

export class PM_TimeSheetData {
  AbsEntry: number;
  DocNumber: number;
  TimeSheetType: SAPB1.TimeSheetTypeEnum;
  UserID: number;
  LastName: string;
  FirstName: string;
  Department: number;
  DateFrom: Date;
  DateTo: Date;
  PM_TimeSheetLineDataCollection: SAPB1.PM_TimeSheetLineData[];
}

export class PM_TimeSheetDataKey {
  AbsEntry: number;
}

export class PM_TimeSheetLineData {
  LineID: number;
  Date: Date;
  ActivityType: number;
  LaborItem: string;
  StartTime: Date;
  EndTime: Date;
  Workorder: number;
  ServiceCall: number;
  CostCenter: string;
  FinancialProject: string;
  Location: number;
  GPSData: string;
  Branch: number;
  Break: Date;
  NonBillableTime: Date;
  EffectiveTime: Date;
  BillableTime: Date;
  FullDay: SAPB1.BoYesNoEnum;
}

export class PM_TimeSheetParams {
  AbsEntry: number;
}

export class AccountCategory {
  CategoryCode: number;
  CategoryName: string;
  CategorySource: SAPB1.AccountCategorySourceEnum;
}

export class AccountCategoryKey {
  CategoryCode: number;
}

export class AccountCategoryParams {
  CategoryCode: number;
  CategoryName: string;
}

export class BankChargesAllocationCode {
  Code: string;
  Description: string;
}

export class BankChargesAllocationCodeKey {
  Code: string;
}

export class BankChargesAllocationCodeParams {
  Code: string;
  Description: string;
}

export class CashFlowLineItem {
  LineItemID: number;
  LineItemName: string;
  ActiveLineItem: SAPB1.BoYesNoEnum;
  ParentArticle: number;
  Level: number;
  Drawer: number;
}

export class CashFlowLineItemKey {
  LineItemID: number;
}

export class CashFlowLineItemParams {
  LineItemID: number;
  LineItemName: string;
}

export class CampaignResponseType {
  ResponseTypeDescription: string;
  ResponseType: string;
  IsActive: SAPB1.BoYesNoEnum;
}

export class CampaignResponseTypeKey {
  ResponseType: string;
}

export class CampaignResponseTypeParams {
  ResponseType: string;
  ResponseTypeDescription: string;
  IsActive: SAPB1.BoYesNoEnum;
}

export class GovPayCode {
  AbsId: number;
  Code: string;
  Descr: string;
  StateTax: SAPB1.BoYesNoEnum;
  Prdcity: SAPB1.GovPayCodePeriodicityEnum;
  GovPayCodeAuthorities: SAPB1.GovPayCodeAuthority[];
}

export class GovPayCodeKey {
  AbsId: number;
}

export class GovPayCodeAuthority {
  AbsId: number;
  BPLId: number;
  State: string;
  CardCode: string;
}

export class GovPayCodeParams {
  AbsId: number;
  Code: string;
}

export class TaxInvoiceReport {
  NTSApproval: SAPB1.TaxInvoiceReportNTSApprovedEnum;
  ETaxWebSite: number;
  ETaxNo: string;
  NTSApprovalNo: string;
  OriginalNTSApprovalNo: string;
  Remarks: string;
  TaxInvoiceReportNumber: string;
  Date: Date;
  BusinessPlace: number;
  BPCode: string;
  BPName: string;
  BaseAmount: number;
  TaxAmount: number;
  Canceled: string;
  ReportType: number;
  TaxInvoiceReportLineCollection: SAPB1.TaxInvoiceReportLine[];
}

export class TaxInvoiceReportKey {
  TaxInvoiceReportNumber: string;
}

export class TaxInvoiceReportLine {
  DocumentType: number;
  DocumentEntry: number;
  LineType: SAPB1.TaxInvoiceReportLineTypeEnum;
  BaseAmount: number;
  TaxAmount: number;
  ItemQuantity: number;
  ItemNo: string;
  ItemDescription: string;
  TaxCode: string;
  DocumentDate: Date;
  ItemPrice: number;
  LineNumber: number;
  Currency: string;
  BusinessPlace: number;
  TaxInvoiceReportNumber: string;
  BPCode: string;
  BPName: string;
  Legacy: string;
}

export class TaxInvoiceReportParams {
  TaxInvoiceReportNumber: string;
}

export class BusinessPlaceParams {
  BPLID: number;
}

export class BusinessPlace {
  BPLID: number;
  BPLName: string;
  BPLNameForeign: string;
  VATRegNum: string;
  RepName: string;
  Industry: string;
  Business: string;
  Address: string;
  Addressforeign: string;
  MainBPL: SAPB1.BoYesNoEnum;
  TaxOfficeNo: string;
  Disabled: SAPB1.BoYesNoEnum;
  DefaultCustomerID: string;
  DefaultVendorID: string;
  DefaultWarehouseID: string;
  DefaultTaxCode: string;
  TaxOffice: string;
  FederalTaxID: string;
  FederalTaxID2: string;
  FederalTaxID3: string;
  AdditionalIdNumber: string;
  NatureOfCompanyCode: number;
  EconomicActivityTypeCode: number;
  CreditContributionOriginCode: string;
  IPIPeriodCode: string;
  CooperativeAssociationTypeCode: number;
  ProfitTaxationCode: number;
  CompanyQualificationCode: number;
  DeclarerTypeCode: number;
  PreferredStateCode: string;
  AddressType: string;
  Street: string;
  StreetNo: string;
  Building: string;
  ZipCode: string;
  Block: string;
  City: string;
  State: string;
  County: string;
  Country: string;
  AliasName: string;
  CommercialRegister: string;
  DateOfIncorporation: Date;
  SPEDProfile: string;
  EnvironmentType: number;
  Opting4ICMS: SAPB1.BoYesNoEnum;
  PaymentClearingAccount: string;
  GlobalLocationNumber: string;
  DefaultResourceWarehouseID: string;
  BusinessPlaceIENumbers: SAPB1.BusinessPlaceIENumber[];
  BusinessPlaceTributaryInfos: SAPB1.BusinessPlaceTributaryInfo[];
}

export class BusinessPlaceKey {
  BPLID: number;
}

export class BusinessPlaceIENumber {
  BPLID: number;
  State: string;
  IENumber: string;
}

export class BusinessPlaceTributaryInfo {
  BPLID: number;
  TributaryID: number;
  TributaryType: number;
  TTStartDate: Date;
  TTEndDate: Date;
  TributaryRegimeCode: number;
  TRCStartDate: Date;
  TRCEndDate: Date;
}

export class Deposit {
  DepositNumber: number;
  AbsEntry: number;
  DepositType: SAPB1.BoDepositTypeEnum;
  DepositDate: Date;
  DepositCurrency: string;
  DepositAccount: string;
  DepositorName: string;
  Bank: string;
  BankAccountNum: string;
  BankBranch: string;
  BankReference: string;
  JournalRemarks: string;
  TotalLC: number;
  TotalFC: number;
  TotalSC: number;
  AllocationAccount: string;
  DocRate: number;
  TaxAccount: string;
  TaxAmount: number;
  CommissionAccount: string;
  Commission: number;
  CommissionDate: Date;
  TaxCode: string;
  DepositAccountType: SAPB1.BoDepositAccountTypeEnum;
  ReconcileAfterDeposit: SAPB1.BoYesNoEnum;
  VoucherAccount: string;
  Series: number;
  Project: string;
  DistributionRule: string;
  DistributionRule2: string;
  DistributionRule3: string;
  DistributionRule4: string;
  DistributionRule5: string;
  CommissionCurrency: string;
  CommissionSC: number;
  CommissionFC: number;
  TaxAmountSC: number;
  TaxAmountFC: number;
  BPLID: number;
  CheckDepositType: SAPB1.BoCheckDepositTypeEnum;
  CheckLines: SAPB1.CheckLine[];
  CreditLines: SAPB1.CreditLine[];
  BOELines: SAPB1.BOELine[];
}

export class DepositKey {
  AbsEntry: number;
}

export class CheckLine {
  CheckKey: number;
  CheckNumber: number;
  Bank: string;
  Branch: string;
  CashCheck: string;
  CheckDate: Date;
  Customer: string;
  CheckAmount: number;
  Deposited: SAPB1.BoDepositCheckEnum;
  Transferred: SAPB1.BoYesNoEnum;
  AccountNumber: string;
  CheckCurrency: string;
}

export class CreditLine {
  AbsId: number;
  CreditCard: number;
  VoucherNumber: string;
  PaymentMethodCode: number;
  PayDate: Date;
  Deposited: SAPB1.BoYesNoEnum;
  NumOfPayments: number;
  Customer: string;
  Reference: string;
  Transferred: SAPB1.BoYesNoEnum;
  Total: number;
  CreditCurrency: string;
}

export class BOELine {
  BOEKey: number;
  BOENumber: number;
  DueDate: Date;
  Bank: string;
  Branch: string;
  AccountNumber: string;
  Amount: number;
  BOEStatus: SAPB1.BoBoeStatus;
  Transferred: SAPB1.BoYesNoEnum;
}

export class DepositParams {
  DepositNumber: number;
  AbsEntry: number;
  Series: number;
}

export class CancelCheckRowParams {
  DepositID: number;
  CheckID: number;
}

export class LocalEra {
  EraName: string;
  StartDate: Date;
  Code: string;
}

export class LocalEraKey {
  Code: string;
}

export class Dimension {
  DimensionCode: number;
  DimensionName: string;
  IsActive: SAPB1.BoYesNoEnum;
  DimensionDescription: string;
}

export class DimensionKey {
  DimensionCode: number;
}

export class DimensionParams {
  DimensionCode: number;
  DimensionName: string;
}

export class ServiceGroup {
  AbsEntry: number;
  ServiceGroupCode: string;
  Description: string;
}

export class ServiceGroupKey {
  AbsEntry: number;
}

export class ServiceGroupParams {
  AbsEntry: number;
  ServiceGroupCode: string;
}

export class MaterialGroup {
  AbsEntry: number;
  MaterialGroupCode: string;
  Description: string;
}

export class MaterialGroupKey {
  AbsEntry: number;
}

export class MaterialGroupParams {
  AbsEntry: number;
  MaterialGroupCode: string;
}

export class NCMCodeSetup {
  AbsEntry: number;
  NCMCode: string;
  Description: string;
}

export class NCMCodeSetupKey {
  AbsEntry: number;
}

export class NCMCodeSetupParams {
  AbsEntry: number;
  NCMCode: string;
  Description: string;
}

export class NFTaxCategory {
  AbsId: number;
  Code: string;
  Locked: SAPB1.BoYesNoEnum;
  GPCId: number;
}

export class NFTaxCategoryKey {
  AbsId: number;
}

export class NFTaxCategoryParams {
  AbsId: number;
  Code: string;
}

export class TaxCodeDeterminationTCD {
  AbsId: number;
  TcdType: SAPB1.TaxCodeDeterminationTCDTypeEnum;
  DftArCode: string;
  DftApCode: string;
  TaxCodeDeterminationTCDDefaultWTs: SAPB1.TaxCodeDeterminationTCDDefaultWT[];
  TaxCodeDeterminationTCDByUsages: SAPB1.TaxCodeDeterminationTCDByUsage[];
  TaxCodeDeterminationTCDKeyFields: SAPB1.TaxCodeDeterminationTCDKeyField[];
}

export class TaxCodeDeterminationTCDKey {
  AbsId: number;
}

export class TaxCodeDeterminationTCDDefaultWT {
  AbsId: number;
  WTCode: string;
  Type: SAPB1.TaxCodeDeterminationTCDDefaultWTTypeEnum;
}

export class TaxCodeDeterminationTCDByUsage {
  AbsId: number;
  UsageCode: number;
  TaxCode: string;
  ExpTaxCode: string;
  Type: SAPB1.TaxCodeDeterminationTCDByUsageTypeEnum;
}

export class TaxCodeDeterminationTCDKeyField {
  AbsId: number;
  Descr: string;
  Priority: number;
  KeyFld_1: number;
  UDFTable_1: string;
  UDFAlias_1: string;
  KeyFld_2: number;
  UDFTable_2: string;
  UDFAlias_2: string;
  KeyFld_3: number;
  UDFTable_3: string;
  UDFAlias_3: string;
  KeyFld_4: number;
  UDFTable_4: string;
  UDFAlias_4: string;
  TaxCodeDeterminationTCDKeyFieldValues: SAPB1.TaxCodeDeterminationTCDKeyFieldValue[];
}

export class TaxCodeDeterminationTCDKeyFieldValue {
  AbsId: number;
  DispOrder: number;
  KeyFld_1_V: string;
  KeyFld_2_V: string;
  KeyFld_3_V: string;
  KeyFld_4_V: string;
  TaxCodeDeterminationTCDKeyFieldValuePeriods: SAPB1.TaxCodeDeterminationTCDKeyFieldValuePeriod[];
  TaxCodeDeterminationTCDKeyFieldValueDefaultWTs: SAPB1.TaxCodeDeterminationTCDKeyFieldValueDefaultWT[];
}

export class TaxCodeDeterminationTCDKeyFieldValuePeriod {
  AbsId: number;
  EfctFrom: Date;
  EfctTo: Date;
  TaxCode: string;
  TaxCodeDeterminationTCDKeyFieldValuePeriodByUsages: SAPB1.TaxCodeDeterminationTCDKeyFieldValuePeriodByUsage[];
}

export class TaxCodeDeterminationTCDKeyFieldValuePeriodByUsage {
  AbsId: number;
  UsageCode: number;
  TaxCode: string;
  ExpTaxCode: string;
}

export class TaxCodeDeterminationTCDKeyFieldValueDefaultWT {
  AbsId: number;
  WTCode: string;
}

export class TaxCodeDeterminationTCDParams {
  AbsId: number;
}

export class BOEDocumentType {
  DocEntry: number;
  DocType: string;
  DocDescription: string;
}

export class BOEDocumentTypeKey {
  DocEntry: number;
}

export class BOEDocumentTypeParams {
  DocEntry: number;
  DocType: string;
}

export class BOEPortfolio {
  PortfolioEntry: number;
  PortfolioID: string;
  PortfolioCode: string;
  PortfolioNum: string;
  PortfolioDescription: string;
}

export class BOEPortfolioKey {
  PortfolioEntry: number;
}

export class BOEPortfolioParams {
  PortfolioEntry: number;
  PortfolioID: string;
  PortfolioCode: string;
}

export class BOEInstruction {
  InstructionEntry: number;
  InstructionCode: string;
  InstructionDesc: string;
  IsCancelInstruction: SAPB1.BoYesNoEnum;
}

export class BOEInstructionKey {
  InstructionEntry: number;
}

export class BOEInstructionParams {
  InstructionEntry: number;
  InstructionCode: string;
}

export class SalesTaxInvoice {
  DocEntry: number;
  DocNum: number;
  DocType: SAPB1.BoTaxInvoiceTypes;
  Printed: SAPB1.BoYesNoEnum;
  DocDate: Date;
  CardCode: string;
  CreationDate: Date;
  UpdateDate: Date;
  DocDueDate: Date;
  Series: number;
  Segment: number;
  ContactPersonCode: number;
  TaxDate: Date;
  Comments: string;
  ShipToCode: string;
  Address: string;
  Address2: string;
  CurrencySource: SAPB1.BoCurrencySources;
  DocCurrency: string;
  CustomerOrVendorRefNo: string;
  CustomerOrVendorName: string;
  CancelDate: Date;
  DocumentTotal: number;
  TaxTotal: number;
  PaymentRefNo: string;
  PaymentRefDate: Date;
  AlterationRevision: number;
  SalesTaxInvoiceLines: SAPB1.SalesTaxInvoiceLine[];
  SalesTaxInvoiceOperationCodes: SAPB1.SalesTaxInvoiceOperationCode[];
}

export class SalesTaxInvoiceKey {
  DocEntry: number;
}

export class SalesTaxInvoiceLine {
  RefEntry1: number;
  RefEntry2: number;
}

export class SalesTaxInvoiceOperationCode {
  OpCode: number;
}

export class PurchaseTaxInvoice {
  DocEntry: number;
  DocNum: number;
  DocType: SAPB1.BoTaxInvoiceTypes;
  Printed: SAPB1.BoYesNoEnum;
  DocDate: Date;
  CardCode: string;
  CreationDate: Date;
  UpdateDate: Date;
  DocDueDate: Date;
  Series: number;
  Segment: number;
  ContactPersonCode: number;
  TaxDate: Date;
  Comments: string;
  ShipToCode: string;
  Address: string;
  Address2: string;
  CurrencySource: SAPB1.BoCurrencySources;
  DocCurrency: string;
  CustomerOrVendorRefNo: string;
  CustomerOrVendorName: string;
  CancelDate: Date;
  DocumentTotal: number;
  TaxTotal: number;
  PaymentRefNo: string;
  PaymentRefDate: Date;
  AlterationRevision: number;
  PurchaseTaxInvoiceLines: SAPB1.PurchaseTaxInvoiceLine[];
  PurchaseTaxInvoiceOperationCodes: SAPB1.PurchaseTaxInvoiceOperationCode[];
}

export class PurchaseTaxInvoiceKey {
  DocEntry: number;
}

export class PurchaseTaxInvoiceLine {
  RefEntry1: number;
  RefEntry2: number;
}

export class PurchaseTaxInvoiceOperationCode {
  OpCode: number;
}

export class CustomsDeclaration {
  CCDNum: string;
  Date: Date;
  CustomsBroker: string;
  DocNum: string;
  DocDate: Date;
  SupplyNum: string;
  SupplyDate: Date;
  CustomsTerminal: string;
  PaymentKey: string;
}

export class CustomsDeclarationKey {
  CCDNum: string;
}

export class CustomsDeclarationParams {
  CCDNum: string;
}

export class Resource {
  Code: string;
  VisCode: string;
  Series: number;
  Number: number;
  CodeBar: string;
  Name: string;
  ForeignName: string;
  Type: SAPB1.ResourceTypeEnum;
  Group: number;
  UnitOfMeasure: string;
  IssueMethod: SAPB1.ResourceIssueMethodEnum;
  Cost1: number;
  Cost2: number;
  Cost3: number;
  Cost4: number;
  Cost5: number;
  Cost6: number;
  Cost7: number;
  Cost8: number;
  Cost9: number;
  Cost10: number;
  Active: SAPB1.BoYesNoEnum;
  ActiveFrom: Date;
  ActiveTo: Date;
  Inactive: SAPB1.BoYesNoEnum;
  InactiveFrom: Date;
  InactiveTo: Date;
  DefaultWarehouse: string;
  Picture: string;
  Remarks: string;
  Property1: SAPB1.BoYesNoEnum;
  Property2: SAPB1.BoYesNoEnum;
  Property3: SAPB1.BoYesNoEnum;
  Property4: SAPB1.BoYesNoEnum;
  Property5: SAPB1.BoYesNoEnum;
  Property6: SAPB1.BoYesNoEnum;
  Property7: SAPB1.BoYesNoEnum;
  Property8: SAPB1.BoYesNoEnum;
  Property9: SAPB1.BoYesNoEnum;
  Property10: SAPB1.BoYesNoEnum;
  Property11: SAPB1.BoYesNoEnum;
  Property12: SAPB1.BoYesNoEnum;
  Property13: SAPB1.BoYesNoEnum;
  Property14: SAPB1.BoYesNoEnum;
  Property15: SAPB1.BoYesNoEnum;
  Property16: SAPB1.BoYesNoEnum;
  Property17: SAPB1.BoYesNoEnum;
  Property18: SAPB1.BoYesNoEnum;
  Property19: SAPB1.BoYesNoEnum;
  Property20: SAPB1.BoYesNoEnum;
  Property21: SAPB1.BoYesNoEnum;
  Property22: SAPB1.BoYesNoEnum;
  Property23: SAPB1.BoYesNoEnum;
  Property24: SAPB1.BoYesNoEnum;
  Property25: SAPB1.BoYesNoEnum;
  Property26: SAPB1.BoYesNoEnum;
  Property27: SAPB1.BoYesNoEnum;
  Property28: SAPB1.BoYesNoEnum;
  Property29: SAPB1.BoYesNoEnum;
  Property30: SAPB1.BoYesNoEnum;
  Property31: SAPB1.BoYesNoEnum;
  Property32: SAPB1.BoYesNoEnum;
  Property33: SAPB1.BoYesNoEnum;
  Property34: SAPB1.BoYesNoEnum;
  Property35: SAPB1.BoYesNoEnum;
  Property36: SAPB1.BoYesNoEnum;
  Property37: SAPB1.BoYesNoEnum;
  Property38: SAPB1.BoYesNoEnum;
  Property39: SAPB1.BoYesNoEnum;
  Property40: SAPB1.BoYesNoEnum;
  Property41: SAPB1.BoYesNoEnum;
  Property42: SAPB1.BoYesNoEnum;
  Property43: SAPB1.BoYesNoEnum;
  Property44: SAPB1.BoYesNoEnum;
  Property45: SAPB1.BoYesNoEnum;
  Property46: SAPB1.BoYesNoEnum;
  Property47: SAPB1.BoYesNoEnum;
  Property48: SAPB1.BoYesNoEnum;
  Property49: SAPB1.BoYesNoEnum;
  Property50: SAPB1.BoYesNoEnum;
  Property51: SAPB1.BoYesNoEnum;
  Property52: SAPB1.BoYesNoEnum;
  Property53: SAPB1.BoYesNoEnum;
  Property54: SAPB1.BoYesNoEnum;
  Property55: SAPB1.BoYesNoEnum;
  Property56: SAPB1.BoYesNoEnum;
  Property57: SAPB1.BoYesNoEnum;
  Property58: SAPB1.BoYesNoEnum;
  Property59: SAPB1.BoYesNoEnum;
  Property60: SAPB1.BoYesNoEnum;
  Property61: SAPB1.BoYesNoEnum;
  Property62: SAPB1.BoYesNoEnum;
  Property63: SAPB1.BoYesNoEnum;
  Property64: SAPB1.BoYesNoEnum;
  ActiveRemarks: string;
  InactiveRemarks: string;
  AttachmentEntry: number;
  UnitsPerTime: number;
  TimePerUnits: number;
  Allocation: SAPB1.ResourceAllocationEnum;
  LinkedItem: string;
  ResourceWarehouses: SAPB1.ResourceWarehouse[];
  ResourceFixedAssets: SAPB1.ResourceFixedAsset[];
  ResourceEmployees: SAPB1.ResourceEmployee[];
  ResourceDailyCapacities: SAPB1.ResourceDailyCapacity[];
}

export class ResourceKey {
  Code: string;
}

export class ResourceWarehouse {
  Code: string;
  Warehouse: string;
  Locked: SAPB1.BoYesNoEnum;
}

export class ResourceFixedAsset {
  Code: string;
  ItemCode: string;
}

export class ResourceEmployee {
  Code: string;
  Employee: string;
}

export class ResourceDailyCapacity {
  Code: string;
  Weekday: SAPB1.ResourceDailyCapacityWeekdayEnum;
  Factor1: number;
  Factor2: number;
  Factor3: number;
  Factor4: number;
  Total: number;
  Remarks: string;
}

export class ResourceParams {
  Code: string;
}

export class ResourceProperty {
  Code: number;
  Name: string;
}

export class ResourcePropertyKey {
  Code: number;
}

export class ResourcePropertyParams {
  Code: number;
  Name: string;
}

export class ResourceGroup {
  Code: number;
  Name: string;
  Type: SAPB1.ResourceTypeEnum;
  CostName1: string;
  Cost1: number;
  CostName2: string;
  Cost2: number;
  CostName3: string;
  Cost3: number;
  CostName4: string;
  Cost4: number;
  CostName5: string;
  Cost5: number;
  CostName6: string;
  Cost6: number;
  CostName7: string;
  Cost7: number;
  CostName8: string;
  Cost8: number;
  CostName9: string;
  Cost9: number;
  CostName10: string;
  Cost10: number;
  NumOfUnitsText: string;
}

export class ResourceGroupKey {
  Code: number;
}

export class ResourceGroupParams {
  Code: number;
  Name: string;
}

export class Bank {
  BankCode: string;
  BankName: string;
  AccountforOutgoingChecks: string;
  BranchforOutgoingChecks: string;
  NextCheckNumber: number;
  SwiftNo: string;
  IBAN: string;
  CountryCode: string;
  PostOffice: SAPB1.BoYesNoEnum;
  AbsoluteEntry: number;
  DefaultBankAccountKey: number;
}

export class BankKey {
  AbsoluteEntry: number;
}

export class JournalEntryParams {
  JdtNum: number;
}

export class JournalEntry {
  ReferenceDate: Date;
  Memo: string;
  Reference: string;
  Reference2: string;
  TransactionCode: string;
  ProjectCode: string;
  TaxDate: Date;
  JdtNum: number;
  Indicator: string;
  UseAutoStorno: SAPB1.BoYesNoEnum;
  StornoDate: Date;
  VatDate: Date;
  Series: number;
  StampTax: SAPB1.BoYesNoEnum;
  DueDate: Date;
  AutoVAT: SAPB1.BoYesNoEnum;
  Number: number;
  FolioNumber: number;
  FolioPrefixString: string;
  ReportEU: SAPB1.BoYesNoEnum;
  Report347: SAPB1.BoYesNoEnum;
  Printed: SAPB1.PrintStatusEnum;
  LocationCode: number;
  OriginalJournal: SAPB1.TransTypesEnum;
  Original: number;
  BaseReference: string;
  BlockDunningLetter: SAPB1.BoYesNoEnum;
  AutomaticWT: SAPB1.BoYesNoEnum;
  WTSum: number;
  WTSumSC: number;
  WTSumFC: number;
  SignatureInputMessage: string;
  SignatureDigest: string;
  CertificationNumber: string;
  PrivateKeyVersion: number;
  Corisptivi: SAPB1.BoYesNoEnum;
  Reference3: string;
  DocumentType: string;
  DeferredTax: SAPB1.BoYesNoEnum;
  BlanketAgreementNumber: number;
  OperationCode: SAPB1.OperationCodeTypeEnum;
  ResidenceNumberType: SAPB1.ResidenceNumberTypeEnum;
  ECDPostingType: SAPB1.ECDPostingTypeEnum;
  ExposedTransNumber: number;
  PointOfIssueCode: string;
  Letter: SAPB1.FolioLetterEnum;
  FolioNumberFrom: number;
  FolioNumberTo: number;
  JournalEntryLines: SAPB1.JournalEntryLine[];
  WithholdingTaxDataCollection: SAPB1.WithholdingTaxData[];
}

export class JournalEntryKey {
  JdtNum: number;
}

export class JournalEntryLine {
  Line_ID: number;
  AccountCode: string;
  Debit: number;
  Credit: number;
  FCDebit: number;
  FCCredit: number;
  FCCurrency: string;
  DueDate: Date;
  ShortName: string;
  ContraAccount: string;
  LineMemo: string;
  ReferenceDate1: Date;
  ReferenceDate2: Date;
  Reference1: string;
  Reference2: string;
  ProjectCode: string;
  CostingCode: string;
  TaxDate: Date;
  BaseSum: number;
  TaxGroup: string;
  DebitSys: number;
  CreditSys: number;
  VatDate: Date;
  VatLine: SAPB1.BoYesNoEnum;
  SystemBaseAmount: number;
  VatAmount: number;
  SystemVatAmount: number;
  GrossValue: number;
  AdditionalReference: string;
  CheckAbs: number;
  CostingCode2: string;
  CostingCode3: string;
  CostingCode4: string;
  TaxCode: string;
  TaxPostAccount: SAPB1.BoTaxPostAccEnum;
  CostingCode5: string;
  LocationCode: number;
  ControlAccount: string;
  EqualizationTaxAmount: number;
  SystemEqualizationTaxAmount: number;
  TotalTax: number;
  SystemTotalTax: number;
  WTLiable: SAPB1.BoYesNoEnum;
  WTRow: SAPB1.BoYesNoEnum;
  PaymentBlock: SAPB1.BoYesNoEnum;
  BlockReason: number;
  FederalTaxID: string;
  BPLID: number;
  BPLName: string;
  VATRegNum: string;
  PaymentOrdered: SAPB1.BoYesNoEnum;
  ExposedTransNumber: number;
  DocumentArray: number;
  DocumentLine: number;
  CashFlowAssignments: SAPB1.CashFlowAssignment[];
}

export class StockTaking {
  ItemCode: string;
  WarehouseCode: string;
  Counted: number;
}

export class StockTakingKey {
  ItemCode: string;
  WarehouseCode: string;
}

export class InventoryOpeningBalance {
  DocumentEntry: number;
  PostingDate: Date;
  DocumentDate: Date;
  DocumentNumber: number;
  Series: number;
  Reference2: string;
  Remarks: string;
  BranchID: number;
  PriceSource: SAPB1.InventoryOpeningBalancePriceSourceEnum;
  PriceList: number;
  JournalRemark: string;
  DocObjectCodeEx: string;
  PeriodIndicator: string;
  FinancialPeriod: number;
  InventoryOpeningBalanceLines: SAPB1.InventoryOpeningBalanceLine[];
}

export class InventoryOpeningBalanceKey {
  DocumentEntry: number;
}

export class InventoryOpeningBalanceLine {
  DocumentEntry: number;
  LineNumber: number;
  ItemCode: string;
  ItemDescription: string;
  WarehouseCode: string;
  BinEntry: number;
  InWarehouseQuantity: number;
  OpeningBalance: number;
  Remarks: string;
  BarCode: string;
  VisualOrder: number;
  Price: number;
  Total: number;
  OpenInventoryAccount: string;
  ProjectCode: string;
  Manufacturer: number;
  SupplierCatalogNo: string;
  CostingCode: string;
  CostingCode2: string;
  CostingCode3: string;
  CostingCode4: string;
  CostingCode5: string;
  PreferredVendor: string;
  Currency: string;
  AllowBinNegativeQuantity: SAPB1.BoYesNoEnum;
  ActualPrice: number;
  PostedValueLC: number;
  PostedValueSC: number;
  InventoryOpeningBalanceSerialNumbers: SAPB1.InventoryOpeningBalanceSerialNumber[];
  InventoryOpeningBalanceBatchNumbers: SAPB1.InventoryOpeningBalanceBatchNumber[];
}

export class InventoryOpeningBalanceSerialNumber {
  DocumentEntry: number;
  ManufacturerSerialNumber: string;
  InternalSerialNumber: string;
  ExpiryDate: Date;
  ManufactureDate: Date;
  ReceptionDate: Date;
  WarrantyStart: Date;
  WarrantyEnd: Date;
  Location: string;
  Notes: string;
  BatchID: string;
  SystemSerialNumber: number;
  BaseLineNumber: number;
  Quantity: number;
  TrackingNote: number;
  TrackingNoteLine: number;
}

export class InventoryOpeningBalanceBatchNumber {
  DocumentEntry: number;
  BatchNumber: string;
  ManufacturerSerialNumber: string;
  InternalSerialNumber: string;
  ExpiryDate: Date;
  ManufactureDate: Date;
  AddmisionDate: Date;
  Location: string;
  Notes: string;
  Quantity: number;
  BaseLineNumber: number;
  TrackingNote: number;
  TrackingNoteLine: number;
}

export class InventoryOpeningBalanceParams {
  DocumentEntry: number;
  DocumentNumber: number;
}

export class Contact {
  CardCode: string;
  Notes: string;
  ContactDate: Date;
  ContactTime: Date;
  Recontact: Date;
  Closed: SAPB1.BoYesNoEnum;
  CloseDate: Date;
  Phone: string;
  Fax: string;
  Subject: number;
  DocType: string;
  DocNum: string;
  DocEntry: string;
  ContactCode: number;
  Priority: SAPB1.BoMsgPriorities;
  Details: string;
  Activity: SAPB1.BoActivities;
  ActivityType: number;
  Location: number;
  StartTime: Date;
  EndTime: Date;
  Duration: number;
  DurationType: SAPB1.BoDurations;
  SalesEmployee: number;
  ContactPersonCode: number;
  HandledBy: number;
  Reminder: SAPB1.BoYesNoEnum;
  ReminderPeriod: number;
  ReminderType: SAPB1.BoDurations;
  City: string;
  Personalflag: SAPB1.BoYesNoEnum;
  Street: string;
  ParentobjectId: number;
  Parentobjecttype: string;
  Room: string;
  Inactiveflag: SAPB1.BoYesNoEnum;
  State: string;
  PreviousActivity: number;
  Country: string;
  Status: number;
  Tentativeflag: SAPB1.BoYesNoEnum;
  EndDuedate: Date;
  DocTypeEx: string;
  AttachmentEntry: number;
  StartDate: Date;
}

export class ContactKey {
  ContactCode: number;
}

export class CreditCard {
  CreditCardCode: number;
  CreditCardName: string;
  GLAccount: string;
  Telephone: string;
  CompanyID: string;
  CountryCode: string;
}

export class CreditCardKey {
  CreditCardCode: number;
}

export class Currency {
  Code: string;
  Name: string;
  DocumentsCode: string;
  InternationalDescription: string;
  HundredthName: string;
  EnglishName: string;
  EnglishHundredthName: string;
  PluralInternationalDescription: string;
  PluralHundredthName: string;
  PluralEnglishName: string;
  PluralEnglishHundredthName: string;
  Decimals: SAPB1.CurrenciesDecimalsEnum;
  Rounding: SAPB1.RoundingSysEnum;
  RoundingInPayment: SAPB1.BoYesNoEnum;
  MaxIncomingAmtDiff: number;
  MaxOutgoingAmtDiff: number;
  MaxIncomingAmtDiffPercent: number;
  MaxOutgoingAmtDiffPercent: number;
}

export class CurrencyKey {
  Code: string;
}

export class ItemParams {
  ItemCode: string;
}

export class Item {
  ItemCode: string;
  ItemName: string;
  ForeignName: string;
  ItemsGroupCode: number;
  CustomsGroupCode: number;
  SalesVATGroup: string;
  BarCode: string;
  VatLiable: SAPB1.BoYesNoEnum;
  PurchaseItem: SAPB1.BoYesNoEnum;
  SalesItem: SAPB1.BoYesNoEnum;
  InventoryItem: SAPB1.BoYesNoEnum;
  IncomeAccount: string;
  ExemptIncomeAccount: string;
  ExpanseAccount: string;
  Mainsupplier: string;
  SupplierCatalogNo: string;
  DesiredInventory: number;
  MinInventory: number;
  Picture: string;
  User_Text: string;
  SerialNum: string;
  CommissionPercent: number;
  CommissionSum: number;
  CommissionGroup: number;
  TreeType: SAPB1.BoItemTreeTypes;
  AssetItem: SAPB1.BoYesNoEnum;
  DataExportCode: string;
  Manufacturer: number;
  QuantityOnStock: number;
  QuantityOrderedFromVendors: number;
  QuantityOrderedByCustomers: number;
  ManageSerialNumbers: SAPB1.BoYesNoEnum;
  ManageBatchNumbers: SAPB1.BoYesNoEnum;
  Valid: SAPB1.BoYesNoEnum;
  ValidFrom: Date;
  ValidTo: Date;
  ValidRemarks: string;
  Frozen: SAPB1.BoYesNoEnum;
  FrozenFrom: Date;
  FrozenTo: Date;
  FrozenRemarks: string;
  SalesUnit: string;
  SalesItemsPerUnit: number;
  SalesPackagingUnit: string;
  SalesQtyPerPackUnit: number;
  SalesUnitLength: number;
  SalesLengthUnit: number;
  SalesUnitWidth: number;
  SalesWidthUnit: number;
  SalesUnitHeight: number;
  SalesHeightUnit: number;
  SalesUnitVolume: number;
  SalesVolumeUnit: number;
  SalesUnitWeight: number;
  SalesWeightUnit: number;
  PurchaseUnit: string;
  PurchaseItemsPerUnit: number;
  PurchasePackagingUnit: string;
  PurchaseQtyPerPackUnit: number;
  PurchaseUnitLength: number;
  PurchaseLengthUnit: number;
  PurchaseUnitWidth: number;
  PurchaseWidthUnit: number;
  PurchaseUnitHeight: number;
  PurchaseHeightUnit: number;
  PurchaseUnitVolume: number;
  PurchaseVolumeUnit: number;
  PurchaseUnitWeight: number;
  PurchaseWeightUnit: number;
  PurchaseVATGroup: string;
  SalesFactor1: number;
  SalesFactor2: number;
  SalesFactor3: number;
  SalesFactor4: number;
  PurchaseFactor1: number;
  PurchaseFactor2: number;
  PurchaseFactor3: number;
  PurchaseFactor4: number;
  MovingAveragePrice: number;
  ForeignRevenuesAccount: string;
  ECRevenuesAccount: string;
  ForeignExpensesAccount: string;
  ECExpensesAccount: string;
  AvgStdPrice: number;
  DefaultWarehouse: string;
  ShipType: number;
  GLMethod: SAPB1.BoGLMethods;
  TaxType: SAPB1.BoTaxTypes;
  MaxInventory: number;
  ManageStockByWarehouse: SAPB1.BoYesNoEnum;
  PurchaseHeightUnit1: number;
  PurchaseUnitHeight1: number;
  PurchaseLengthUnit1: number;
  PurchaseUnitLength1: number;
  PurchaseWeightUnit1: number;
  PurchaseUnitWeight1: number;
  PurchaseWidthUnit1: number;
  PurchaseUnitWidth1: number;
  SalesHeightUnit1: number;
  SalesUnitHeight1: number;
  SalesLengthUnit1: number;
  SalesUnitLength1: number;
  SalesWeightUnit1: number;
  SalesUnitWeight1: number;
  SalesWidthUnit1: number;
  SalesUnitWidth1: number;
  ForceSelectionOfSerialNumber: SAPB1.BoYesNoEnum;
  ManageSerialNumbersOnReleaseOnly: SAPB1.BoYesNoEnum;
  WTLiable: SAPB1.BoYesNoEnum;
  CostAccountingMethod: SAPB1.BoInventorySystem;
  SWW: string;
  WarrantyTemplate: string;
  IndirectTax: SAPB1.BoYesNoEnum;
  ArTaxCode: string;
  ApTaxCode: string;
  BaseUnitName: string;
  ItemCountryOrg: string;
  IssueMethod: SAPB1.BoIssueMethod;
  SRIAndBatchManageMethod: SAPB1.BoManageMethod;
  IsPhantom: SAPB1.BoYesNoEnum;
  InventoryUOM: string;
  PlanningSystem: SAPB1.BoPlanningSystem;
  ProcurementMethod: SAPB1.BoProcurementMethod;
  ComponentWarehouse: SAPB1.BoMRPComponentWarehouse;
  OrderIntervals: number;
  OrderMultiple: number;
  LeadTime: number;
  MinOrderQuantity: number;
  ItemType: SAPB1.ItemTypeEnum;
  ItemClass: SAPB1.ItemClassEnum;
  OutgoingServiceCode: number;
  IncomingServiceCode: number;
  ServiceGroup: number;
  NCMCode: number;
  MaterialType: SAPB1.BoMaterialTypes;
  MaterialGroup: number;
  ProductSource: string;
  Properties1: SAPB1.BoYesNoEnum;
  Properties2: SAPB1.BoYesNoEnum;
  Properties3: SAPB1.BoYesNoEnum;
  Properties4: SAPB1.BoYesNoEnum;
  Properties5: SAPB1.BoYesNoEnum;
  Properties6: SAPB1.BoYesNoEnum;
  Properties7: SAPB1.BoYesNoEnum;
  Properties8: SAPB1.BoYesNoEnum;
  Properties9: SAPB1.BoYesNoEnum;
  Properties10: SAPB1.BoYesNoEnum;
  Properties11: SAPB1.BoYesNoEnum;
  Properties12: SAPB1.BoYesNoEnum;
  Properties13: SAPB1.BoYesNoEnum;
  Properties14: SAPB1.BoYesNoEnum;
  Properties15: SAPB1.BoYesNoEnum;
  Properties16: SAPB1.BoYesNoEnum;
  Properties17: SAPB1.BoYesNoEnum;
  Properties18: SAPB1.BoYesNoEnum;
  Properties19: SAPB1.BoYesNoEnum;
  Properties20: SAPB1.BoYesNoEnum;
  Properties21: SAPB1.BoYesNoEnum;
  Properties22: SAPB1.BoYesNoEnum;
  Properties23: SAPB1.BoYesNoEnum;
  Properties24: SAPB1.BoYesNoEnum;
  Properties25: SAPB1.BoYesNoEnum;
  Properties26: SAPB1.BoYesNoEnum;
  Properties27: SAPB1.BoYesNoEnum;
  Properties28: SAPB1.BoYesNoEnum;
  Properties29: SAPB1.BoYesNoEnum;
  Properties30: SAPB1.BoYesNoEnum;
  Properties31: SAPB1.BoYesNoEnum;
  Properties32: SAPB1.BoYesNoEnum;
  Properties33: SAPB1.BoYesNoEnum;
  Properties34: SAPB1.BoYesNoEnum;
  Properties35: SAPB1.BoYesNoEnum;
  Properties36: SAPB1.BoYesNoEnum;
  Properties37: SAPB1.BoYesNoEnum;
  Properties38: SAPB1.BoYesNoEnum;
  Properties39: SAPB1.BoYesNoEnum;
  Properties40: SAPB1.BoYesNoEnum;
  Properties41: SAPB1.BoYesNoEnum;
  Properties42: SAPB1.BoYesNoEnum;
  Properties43: SAPB1.BoYesNoEnum;
  Properties44: SAPB1.BoYesNoEnum;
  Properties45: SAPB1.BoYesNoEnum;
  Properties46: SAPB1.BoYesNoEnum;
  Properties47: SAPB1.BoYesNoEnum;
  Properties48: SAPB1.BoYesNoEnum;
  Properties49: SAPB1.BoYesNoEnum;
  Properties50: SAPB1.BoYesNoEnum;
  Properties51: SAPB1.BoYesNoEnum;
  Properties52: SAPB1.BoYesNoEnum;
  Properties53: SAPB1.BoYesNoEnum;
  Properties54: SAPB1.BoYesNoEnum;
  Properties55: SAPB1.BoYesNoEnum;
  Properties56: SAPB1.BoYesNoEnum;
  Properties57: SAPB1.BoYesNoEnum;
  Properties58: SAPB1.BoYesNoEnum;
  Properties59: SAPB1.BoYesNoEnum;
  Properties60: SAPB1.BoYesNoEnum;
  Properties61: SAPB1.BoYesNoEnum;
  Properties62: SAPB1.BoYesNoEnum;
  Properties63: SAPB1.BoYesNoEnum;
  Properties64: SAPB1.BoYesNoEnum;
  AutoCreateSerialNumbersOnRelease: SAPB1.BoYesNoEnum;
  DNFEntry: number;
  GTSItemSpec: string;
  GTSItemTaxCategory: string;
  FuelID: number;
  BeverageTableCode: string;
  BeverageGroupCode: string;
  BeverageCommercialBrandCode: number;
  Series: number;
  ToleranceDays: number;
  TypeOfAdvancedRules: SAPB1.TypeOfAdvancedRulesEnum;
  IssuePrimarilyBy: SAPB1.IssuePrimarilyByEnum;
  NoDiscounts: SAPB1.BoYesNoEnum;
  AssetClass: string;
  AssetGroup: string;
  InventoryNumber: string;
  Technician: number;
  Employee: number;
  Location: number;
  AssetStatus: SAPB1.AssetStatusEnum;
  CapitalizationDate: Date;
  StatisticalAsset: SAPB1.BoYesNoEnum;
  Cession: SAPB1.BoYesNoEnum;
  DeactivateAfterUsefulLife: SAPB1.BoYesNoEnum;
  ManageByQuantity: SAPB1.BoYesNoEnum;
  UoMGroupEntry: number;
  InventoryUoMEntry: number;
  DefaultSalesUoMEntry: number;
  DefaultPurchasingUoMEntry: number;
  DepreciationGroup: string;
  AssetSerialNumber: string;
  InventoryWeight: number;
  InventoryWeightUnit: number;
  InventoryWeight1: number;
  InventoryWeightUnit1: number;
  DefaultCountingUnit: string;
  CountingItemsPerUnit: number;
  DefaultCountingUoMEntry: number;
  Excisable: SAPB1.BoYesNoEnum;
  ChapterID: number;
  ScsCode: string;
  SpProdType: SAPB1.SpecialProductTypeEnum;
  ProdStdCost: number;
  InCostRollup: SAPB1.BoYesNoEnum;
  VirtualAssetItem: SAPB1.BoYesNoEnum;
  EnforceAssetSerialNumbers: SAPB1.BoYesNoEnum;
  AttachmentEntry: number;
  LinkedResource: string;
  ItemPrices: SAPB1.ItemPrice[];
  ItemWarehouseInfoCollection: SAPB1.ItemWarehouseInfo[];
  ItemPreferredVendors: SAPB1.ItemPreferredVendor[];
  ItemLocalizationInfos: SAPB1.ItemLocalizationInfo[];
  ItemProjects: SAPB1.ItemProject[];
  ItemDistributionRules: SAPB1.ItemDistributionRule[];
  ItemAttributeGroups: SAPB1.ItemAttributeGroups[];
  ItemDepreciationParameters: SAPB1.ItemDepreciationParameter[];
  ItemPeriodControls: SAPB1.ItemPeriodControl[];
  ItemUnitOfMeasurementCollection: SAPB1.ItemUnitOfMeasurement[];
  ItemBarCodeCollection: SAPB1.ItemBarCode[];
  ItemIntrastatExtension: SAPB1.ItemIntrastatExtension;
}

export class ItemKey {
  ItemCode: string;
}

export class ItemPrice {
  PriceList: number;
  Price: number;
  Currency: string;
  AdditionalPrice1: number;
  AdditionalCurrency1: string;
  AdditionalPrice2: number;
  AdditionalCurrency2: string;
  BasePriceList: number;
  Factor: number;
  UoMPrices: SAPB1.UoMPrice[];
}

export class UoMPrice {
  PriceList: number;
  UoMEntry: number;
  ReduceBy: number;
  Price: number;
  Currency: string;
  AdditionalReduceBy1: number;
  AdditionalPrice1: number;
  AdditionalCurrency1: string;
  AdditionalReduceBy2: number;
  AdditionalPrice2: number;
  AdditionalCurrency2: string;
  Auto: SAPB1.BoYesNoEnum;
}

export class ItemWarehouseInfo {
  MinimalStock: number;
  MaximalStock: number;
  MinimalOrder: number;
  StandardAveragePrice: number;
  Locked: SAPB1.BoYesNoEnum;
  InventoryAccount: string;
  CostAccount: string;
  TransferAccount: string;
  RevenuesAccount: string;
  VarienceAccount: string;
  DecreasingAccount: string;
  IncreasingAccount: string;
  ReturningAccount: string;
  ExpensesAccount: string;
  EURevenuesAccount: string;
  EUExpensesAccount: string;
  ForeignRevenueAcc: string;
  ForeignExpensAcc: string;
  ExemptIncomeAcc: string;
  PriceDifferenceAcc: string;
  WarehouseCode: string;
  InStock: number;
  Committed: number;
  Ordered: number;
  CountedQuantity: number;
  WasCounted: SAPB1.BoYesNoEnum;
  UserSignature: number;
  Counted: number;
  ExpenseClearingAct: string;
  PurchaseCreditAcc: string;
  EUPurchaseCreditAcc: string;
  ForeignPurchaseCreditAcc: string;
  SalesCreditAcc: string;
  SalesCreditEUAcc: string;
  ExemptedCredits: string;
  SalesCreditForeignAcc: string;
  ExpenseOffsettingAccount: string;
  WipAccount: string;
  ExchangeRateDifferencesAcct: string;
  GoodsClearingAcct: string;
  NegativeInventoryAdjustmentAccount: string;
  CostInflationOffsetAccount: string;
  GLDecreaseAcct: string;
  GLIncreaseAcct: string;
  PAReturnAcct: string;
  PurchaseAcct: string;
  PurchaseOffsetAcct: string;
  ShippedGoodsAccount: string;
  StockInflationOffsetAccount: string;
  StockInflationAdjustAccount: string;
  VATInRevenueAccount: string;
  WipVarianceAccount: string;
  CostInflationAccount: string;
  WHIncomingCenvatAccount: string;
  WHOutgoingCenvatAccount: string;
  StockInTransitAccount: string;
  WipOffsetProfitAndLossAccount: string;
  InventoryOffsetProfitAndLossAccount: string;
  DefaultBin: number;
  DefaultBinEnforced: SAPB1.BoYesNoEnum;
  PurchaseBalanceAccount: string;
  ItemCycleCounts: SAPB1.ItemCycleCount[];
}

export class ItemCycleCount {
  CycleCode: number;
  Alert: SAPB1.BoYesNoEnum;
  NextCountingDate: Date;
  AlertTime: Date;
  DestinationUser: number;
  WarehouseCode: string;
}

export class ItemPreferredVendor {
  BPCode: string;
}

export class ItemLocalizationInfo {
  ItemCode: string;
  IncomeNature: string;
}

export class ItemProject {
  LineNumber: number;
  ValidFrom: Date;
  ValidTo: Date;
  Project: string;
}

export class ItemDistributionRule {
  LineNumber: string;
  ValidFrom: Date;
  ValidTo: Date;
  DistributionRule: string;
  DistributionRule2: string;
  DistributionRule3: string;
  DistributionRule4: string;
  DistributionRule5: string;
}

export class ItemAttributeGroups {
  Attribute1: string;
  Attribute2: string;
  Attribute3: string;
  Attribute4: string;
  Attribute5: string;
  Attribute6: string;
  Attribute7: string;
  Attribute8: string;
  Attribute9: string;
  Attribute10: string;
  Attribute11: string;
  Attribute12: string;
  Attribute13: string;
  Attribute14: string;
  Attribute15: string;
  Attribute16: string;
  Attribute17: string;
  Attribute18: string;
  Attribute19: string;
  Attribute20: string;
  Attribute21: string;
  Attribute22: string;
  Attribute23: string;
  Attribute24: string;
  Attribute25: string;
  Attribute26: string;
  Attribute27: string;
  Attribute28: string;
  Attribute29: string;
  Attribute30: string;
  Attribute31: string;
  Attribute32: string;
  Attribute33: number;
  Attribute34: number;
  Attribute35: number;
  Attribute36: number;
  Attribute37: number;
  Attribute38: number;
  Attribute39: number;
  Attribute40: number;
  Attribute41: number;
  Attribute42: number;
  Attribute43: Date;
  Attribute44: Date;
  Attribute45: Date;
  Attribute46: Date;
  Attribute47: Date;
  Attribute48: number;
  Attribute49: number;
  Attribute50: number;
  Attribute51: number;
  Attribute52: number;
  Attribute53: number;
  Attribute54: number;
  Attribute55: number;
  Attribute56: number;
  Attribute57: number;
  Attribute58: number;
  Attribute59: number;
  Attribute60: number;
  Attribute61: number;
  Attribute62: number;
  Attribute63: number;
  Attribute64: number;
}

export class ItemDepreciationParameter {
  FiscalYear: string;
  DepreciationArea: string;
  DepreciationStartDate: Date;
  DepreciationEndDate: Date;
  UsefulLife: number;
  RemainingLife: number;
  DepreciationType: string;
  TotalUnitsInUsefulLife: number;
  RemainingUnits: number;
  StandardUnits: number;
}

export class ItemPeriodControl {
  FiscalYear: string;
  DepreciationArea: string;
  SubPeriod: number;
  DepreciationStatus: SAPB1.BoYesNoEnum;
  Factor: number;
  ActualUnits: number;
}

export class ItemUnitOfMeasurement {
  UoMType: SAPB1.ItemUoMTypeEnum;
  UoMEntry: number;
  DefaultBarcode: number;
  DefaultPackage: number;
  Length1: number;
  Length1Unit: number;
  Length2: number;
  Length2Unit: number;
  Width1: number;
  Width1Unit: number;
  Width2: number;
  Width2Unit: number;
  Height1: number;
  Height1Unit: number;
  Height2: number;
  Height2Unit: number;
  Volume: number;
  VolumeUnit: number;
  Weight1: number;
  Weight1Unit: number;
  Weight2: number;
  Weight2Unit: number;
  ItemUoMPackageCollection: SAPB1.ItemUoMPackage[];
}

export class ItemUoMPackage {
  UoMType: SAPB1.ItemUoMTypeEnum;
  UoMEntry: number;
  PackageTypeEntry: number;
  Length1: number;
  Length1Unit: number;
  Length2: number;
  Length2Unit: number;
  Width1: number;
  Width1Unit: number;
  Width2: number;
  Width2Unit: number;
  Height1: number;
  Height1Unit: number;
  Height2: number;
  Height2Unit: number;
  Volume: number;
  VolumeUnit: number;
  Weight1: number;
  Weight1Unit: number;
  Weight2: number;
  Weight2Unit: number;
  QuantityPerPackage: number;
}

export class ItemBarCode {
  AbsEntry: number;
  UoMEntry: number;
  Barcode: string;
  FreeText: string;
}

export class ItemIntrastatExtension {
  ItemCode: string;
  CommodityCode: number;
  SupplementaryUnit: number;
  FactorOfSupplementaryUnit: number;
  ImportRegionState: number;
  ExportRegionState: number;
  ImportNatureOfTransaction: number;
  ExportNatureOfTransaction: number;
  ImportStatisticalProcedure: number;
  ExportStatisticalProcedure: number;
  CountryOfOrigin: string;
  ServiceCode: number;
  Type: SAPB1.BoDocumentTypes;
  ServiceSupplyMethod: SAPB1.BoServiceSupplyMethods;
  ServicePaymentMethod: SAPB1.BoServicePaymentMethods;
  ImportRegionCountry: string;
  ExportRegionCountry: string;
  UseWeightInCalculation: SAPB1.BoYesNoEnum;
  IntrastatRelevant: SAPB1.BoYesNoEnum;
  StatisticalCode: string;
}

export class PaymentTermsType {
  GroupNumber: number;
  PaymentTermsGroupName: string;
  StartFrom: SAPB1.BoPayTermDueTypes;
  NumberOfAdditionalMonths: number;
  NumberOfAdditionalDays: number;
  CreditLimit: number;
  GeneralDiscount: number;
  InterestOnArrears: number;
  PriceListNo: number;
  LoadLimit: number;
  OpenReceipt: SAPB1.BoOpenIncPayment;
  DiscountCode: string;
  DunningCode: string;
  BaselineDate: SAPB1.BoBaselineDate;
  NumberOfInstallments: number;
  NumberOfToleranceDays: number;
}

export class PaymentTermsTypeKey {
  GroupNumber: number;
}

export class ColumnPreferences {
  User: number;
  FormID: string;
  ItemNumber: string;
  Column: string;
  Width: number;
  VisibleInForm: SAPB1.BoYesNoEnum;
  TabsLayout: number;
  EditableInForm: SAPB1.BoYesNoEnum;
  VisibleInExpanded: SAPB1.BoYesNoEnum;
  ExpandedIndex: number;
  EditableInExpanded: SAPB1.BoYesNoEnum;
}

export class ColumnPreferencesKey {
  User: number;
  FormID: string;
  ItemNumber: string;
  Column: string;
}

export class ColumnsPreferencesParams {
  User: number;
  FormID: string;
}

export class ImportFileParam {
  FilePath: string;
}

export class ElectronicFileFormat {
  FormatID: number;
  Name: string;
  Description: string;
  Version: string;
  SchemaVersion: string;
  OutputFilePath: string;
  MenuName: string;
  MenuPath: string;
}

export class ElectronicFileFormatKey {
  FormatID: number;
}

export class ElectronicFileFormatParams {
  FormatID: number;
  Name: string;
}

export class BankPage {
  AccountCode: string;
  Sequence: number;
  AccountName: string;
  Reference: string;
  DueDate: Date;
  Memo: string;
  DebitAmount: number;
  CreditAmount: number;
  BankMatch: number;
  DataSource: string;
  UserSignature: number;
  ExternalCode: string;
  CardCode: string;
  CardName: string;
  StatementNumber: number;
  InvoiceNumber: string;
  PaymentCreated: SAPB1.BoYesNoEnum;
  VisualOrder: number;
  DocNumberType: SAPB1.BoBpsDocTypes;
  PaymentReference: string;
  InvoiceNumberEx: string;
  BICSwiftCode: string;
}

export class BankPageKey {
  AccountCode: string;
  Sequence: number;
}

export class Manufacturer {
  Code: number;
  ManufacturerName: string;
}

export class ManufacturerKey {
  Code: number;
}

export class BusinessPartnerProperty {
  PropertyCode: number;
  PropertyName: string;
}

export class BusinessPartnerPropertyKey {
  PropertyCode: number;
}

export class BusinessPartnerPropertyParams {
  PropertyCode: number;
  PropertyName: string;
}

export class TransactionCode {
  Code: string;
  Description: string;
}

export class TransactionCodeKey {
  Code: string;
}

export class TransactionCodeParams {
  Code: string;
  Description: string;
}

export class LandedCostsCode {
  Code: string;
  Name: string;
  AllocationBy: SAPB1.BoAllocationByEnum;
  LandedCostsAllocationAccount: string;
}

export class LandedCostsCodeKey {
  Code: string;
}

export class EmployeeTransfer {
  TransferID: number;
  TransStartDate: Date;
  TransStartTime: Date;
  TransEndDate: Date;
  TransEndTime: Date;
  Status: SAPB1.EmployeeTransferStatusEnum;
  Comment: string;
  EmployeeTransferDetails: SAPB1.EmployeeTransferDetail[];
}

export class EmployeeTransferKey {
  TransferID: number;
}

export class EmployeeTransferDetail {
  TransferID: number;
  EmployeeID: number;
  TransferedDate: Date;
  TransferedTime: Date;
  Status: SAPB1.EmployeeTransferProcessingStatusEnum;
  Comment: string;
}

export class EmployeeTransferParams {
  TransferID: number;
}

export class ShippingType {
  Code: number;
  Name: string;
  Website: string;
}

export class ShippingTypeKey {
  Code: number;
}

export class VatGroup {
  Code: string;
  Name: string;
  Category: SAPB1.BoVatCategoryEnum;
  TaxAccount: string;
  EU: SAPB1.BoYesNoEnum;
  TriangularDeal: string;
  AcquisitionReverse: SAPB1.BoYesNoEnum;
  NonDeduct: number;
  AcquisitionTax: string;
  GoodsShipment: string;
  NonDeductAcc: string;
  DeferredTaxAcc: string;
  Correction: SAPB1.BoYesNoEnum;
  VatCorrection: string;
  EqualizationTaxAccount: string;
  ServiceSupply: string;
  Inactive: SAPB1.BoYesNoEnum;
  TaxTypeBlackList: SAPB1.TaxTypeBlackListEnum;
  Report349Code: SAPB1.Report349CodeListEnum;
  VATInRevenueAccount: string;
  DownPaymentTaxOffsetAccount: string;
  CashDiscountAccount: string;
  VATDeductibleAccount: string;
  TaxRegion: SAPB1.VatGroupsTaxRegionEnum;
  VatGroups_Lines: SAPB1.VatGroups_Line[];
}

export class VatGroupKey {
  Code: string;
}

export class VatGroups_Line {
  Effectivefrom: Date;
  Rate: number;
  EqualizationTax: number;
  DatevCode: number;
}

export class LengthMeasure {
  UnitCode: number;
  UnitDisplay: string;
  UnitName: string;
  UnitCodeforQuantityDisplay: string;
  UnitLengthinmm: number;
}

export class LengthMeasureKey {
  UnitCode: number;
}

export class WeightMeasure {
  UnitCode: number;
  UnitDisplay: string;
  UnitName: string;
  UnitWeightinmg: number;
}

export class WeightMeasureKey {
  UnitCode: number;
}

export class ItemGroupParams {
  Number: number;
}

export class ItemGroups {
  PriceDifferencesAccount: string;
  StockInflationAdjustAccount: string;
  MinimumOrderQuantity: number;
  OrderInterval: number;
  ExchangeRateDifferencesAccount: string;
  IncreasingAccount: string;
  StockInflationOffsetAccount: string;
  ProcurementMethod: SAPB1.BoProcurementMethod;
  ComponentWarehouse: SAPB1.BoMRPComponentWarehouse;
  PurchaseOffsetAccount: string;
  InventorySystem: SAPB1.BoInventorySystem;
  WIPMaterialVarianceAccount: string;
  PlanningSystem: SAPB1.BoPlanningSystem;
  PurchaseAccount: string;
  ReturningAccount: string;
  CostInflationAccount: string;
  ExpensesAccount: string;
  RevenuesAccount: string;
  TransfersAccount: string;
  LeadTime: number;
  OrderMultiple: number;
  CostInflationOffsetAccount: string;
  InventoryAccount: string;
  DecreaseGLAccount: string;
  Number: number;
  GoodsClearingAccount: string;
  IncreaseGLAccount: string;
  ForeignRevenuesAccount: string;
  Alert: SAPB1.BoYesNoEnum;
  WIPMaterialAccount: string;
  ShippedGoodsAccount: string;
  ExemptRevenuesAccount: string;
  DecreasingAccount: string;
  VATInRevenueAccount: string;
  VarianceAccount: string;
  EUExpensesAccount: string;
  ForeignExpensesAccount: string;
  CycleCode: number;
  CostAccount: string;
  EURevenuesAccount: string;
  PAReturnAccount: string;
  GroupName: string;
  ExpenseClearingAct: string;
  PurchaseCreditAcc: string;
  EUPurchaseCreditAcc: string;
  ForeignPurchaseCreditAcc: string;
  SalesCreditAcc: string;
  SalesCreditEUAcc: string;
  ExemptedCredits: string;
  SalesCreditForeignAcc: string;
  ExpenseOffsetAccount: string;
  NegativeInventoryAdjustmentAccount: string;
  WHIncomingCenvatAccount: string;
  WHOutgoingCenvatAccount: string;
  StockInTransitAccount: string;
  WipOffsetProfitAndLossAccount: string;
  InventoryOffsetProfitAndLossAccount: string;
  ToleranceDays: number;
  DefaultUoMGroup: number;
  DefaultInventoryUoM: number;
  PurchaseBalanceAccount: string;
  ItemGroupsWarehouseInfos: SAPB1.ItemGroupsWarehouseInfo[];
}

export class ItemGroupsKey {
  Number: number;
}

export class ItemGroupsWarehouseInfo {
  ItmsGrpCod: number;
  WarehouseCode: string;
  DefaultBin: number;
  DefaultBinEnforced: SAPB1.BoYesNoEnum;
}

export class SalesPersonParams {
  SalesEmployeeCode: number;
}

export class SalesPerson {
  SalesEmployeeCode: number;
  SalesEmployeeName: string;
  Remarks: string;
  CommissionForSalesEmployee: number;
  CommissionGroup: number;
  Locked: SAPB1.BoYesNoEnum;
  EmployeeID: number;
  Active: SAPB1.BoYesNoEnum;
}

export class SalesPersonKey {
  SalesEmployeeCode: number;
}

export class DeductionTaxSubGroup {
  GroupCode: string;
  GroupName: string;
}

export class DeductionTaxSubGroupKey {
  GroupCode: string;
}

export class DeductionTaxSubGroupParams {
  GroupCode: string;
  GroupName: string;
}

export class TaxCodeDetermination {
  DocEntry: number;
  LineNumber: number;
  DocumentType: SAPB1.BoTCDDocumentTypeEnum;
  BusinessArea: SAPB1.BoBusinessAreaEnum;
  Condition1: SAPB1.BoTCDConditionEnum;
  UDFTable1: string;
  NumberValue1: number;
  StringValue1: string;
  MoneyValue1: number;
  Condition2: SAPB1.BoTCDConditionEnum;
  UDFTable2: string;
  NumberValue2: number;
  StringValue2: string;
  MoneyValue2: number;
  Condition3: SAPB1.BoTCDConditionEnum;
  UDFTable3: string;
  NumberValue3: number;
  StringValue3: string;
  MoneyValue3: number;
  Condition4: SAPB1.BoTCDConditionEnum;
  UDFTable4: string;
  NumberValue4: number;
  StringValue4: string;
  MoneyValue4: number;
  Condition5: SAPB1.BoTCDConditionEnum;
  UDFTable5: string;
  NumberValue5: number;
  StringValue5: string;
  MoneyValue5: number;
  Description: string;
  TaxCode: string;
  FreightRowTax: string;
  FreightHeaderTax: string;
  UDFAlias1: string;
  UDFAlias2: string;
  UDFAlias3: string;
  UDFAlias4: string;
  UDFAlias5: string;
}

export class TaxCodeDeterminationKey {
  DocEntry: number;
}

export class TaxCodeDeterminationParams {
  DocEntry: number;
}

export class CostCenterType {
  CostCenterTypeCode: string;
  CostCenterTypeName: string;
}

export class CostCenterTypeKey {
  CostCenterTypeCode: string;
}

export class CostCenterTypeParams {
  CostCenterTypeCode: string;
}

export class RclRecurringTransactionParams {
  TransactionID: number;
  PlannedDate: Date;
}

export class RclRecurringTransactionParamsKey {
  TransactionID: number;
}

export class RclRecurringTransaction {
  TransactionID: number;
  TemplateID: number;
  Instance: number;
  PlannedDate: Date;
  Status: SAPB1.RclRecurringTransactionStatusEnum;
  DocType: string;
  DocEntry: number;
}

export class RclRecurringExecutionParams {
  OnError: SAPB1.RclRecurringExecutionHandlingEnum;
}

export class AccrualType {
  Code: string;
  Name: string;
  PostingAccount: string;
  CalculationAccount: string;
  InterimAccount: string;
}

export class AccrualTypeKey {
  Code: string;
}

export class AccrualTypeParams {
  Code: string;
}

export class NFModel {
  AbsEntry: string;
  NFMName: string;
  NFMDescription: string;
  NFMCode: string;
}

export class NFModelKey {
  AbsEntry: string;
}

export class NFModelParams {
  AbsEntry: string;
  NFMName: string;
  NFMDescription: string;
  NFMCode: string;
}

export class BrazilStringIndexer {
  IndexerType: SAPB1.BrazilStringIndexerTypes;
  Code: string;
  Description: string;
  ID: number;
}

export class BrazilStringIndexerKey {
  ID: number;
}

export class BrazilStringIndexerParams {
  ID: number;
}

export class BrazilNumericIndexer {
  IndexerType: SAPB1.BrazilNumericIndexerTypes;
  Code: number;
  Description: string;
  ID: number;
}

export class BrazilNumericIndexerKey {
  ID: number;
}

export class BrazilNumericIndexerParams {
  ID: number;
}

export class BrazilFuelIndexer {
  FuelID: number;
  FuelGroupCode: number;
  FuelCode: string;
  Description: string;
}

export class BrazilFuelIndexerKey {
  FuelID: number;
}

export class BrazilFuelIndexerParams {
  FuelID: number;
  FuelGroupCode: number;
  FuelCode: string;
  Description: string;
}

export class BrazilBeverageIndexer {
  BeverageGroupCode: string;
  BeverageTableCode: string;
  BeverageCommercialBrandCode: number;
  BeverageID: number;
}

export class BrazilBeverageIndexerKey {
  BeverageID: number;
}

export class BrazilBeverageIndexerParams {
  BeverageID: number;
}

export class LegalData {
  DocEntry: number;
  SourceObjectType: SAPB1.BoAPARDocumentTypes;
  SourceObjectEntry: number;
  DateOfPrinting: Date;
  TimeOfPrinting: Date;
  PrinterBrand: string;
  PrinterType: string;
  PrinterModel: string;
  PrinterFirmwareVersion: string;
  PrinterDllVersion: string;
  FiscalSeries: string;
  FiscalNumber: string;
  DocumentNumber: string;
  FiscalUserID: number;
  LegalDataDetailCollection: SAPB1.LegalDataDetail[];
}

export class LegalDataKey {
  DocEntry: number;
}

export class LegalDataDetail {
  DocEntry: number;
  LineSequence: number;
  LineType: SAPB1.LegalDataLineTypeEnum;
  TaxCode: string;
  TaxRate: number;
  Amount: number;
}

export class LegalDataParams {
  DocEntry: number;
  SourceObjectType: string;
  SourceObjectEntry: number;
}

export class FiscalPrinter {
  EquipmentNo: string;
  Model: string;
  ManufacturerSerialN: string;
  RegisterNo: number;
  FiscalDocumentModel: string;
  FiscalPrintersParams: SAPB1.FiscalPrinterParams[];
}

export class FiscalPrinterKey {
  EquipmentNo: string;
}

export class FiscalPrinterParams {
  EquipmentNo: string;
}

export class CustomsGroup {
  Code: number;
  Name: string;
  Number: string;
  Customs: number;
  Purchase: number;
  Other: number;
  Total: number;
  Locked: SAPB1.BoYesNoEnum;
  CustomsAllocationAccount: string;
  CustomsExpenseAccount: string;
  PortAddress: string;
  PortState: string;
}

export class CustomsGroupKey {
  Code: number;
}

export class ChecksforPayment {
  CheckKey: number;
  CheckNumber: number;
  BankCode: string;
  Branch: string;
  BankName: string;
  CheckDate: Date;
  AccountNumber: string;
  Details: string;
  JournalEntryReference: string;
  PaymentDate: Date;
  PaymentNo: number;
  CheckAmount: number;
  Transferable: SAPB1.BoYesNoEnum;
  VendorCode: string;
  CheckCurrency: string;
  Canceled: SAPB1.BoYesNoEnum;
  CardOrAccount: SAPB1.BoCpCardAcct;
  Printed: SAPB1.BoYesNoEnum;
  VendorName: string;
  Signature: string;
  CustomerAccountCode: string;
  TransactionNumber: number;
  Address: string;
  CreateJournalEntry: SAPB1.BoYesNoEnum;
  UpdateDate: Date;
  CreationDate: Date;
  TaxTotal: number;
  TaxDate: Date;
  DeductionRefundAmount: number;
  PrintedBy: number;
  CountryCode: string;
  TotalinWords: string;
  AddressName: string;
  ManualCheck: SAPB1.BoYesNoEnum;
  ChecksforPaymentLines: SAPB1.ChecksforPaymentLine[];
}

export class ChecksforPaymentKey {
  CheckKey: number;
}

export class ChecksforPaymentLine {
  RowNumber: number;
  RowDetails: string;
  RowTotal: number;
  RowCurrency: string;
  TaxDefinition: string;
  TaxPercent: number;
  CreditedAccount: string;
  LineTotal: number;
}

export class PriceListParams {
  PriceListNo: number;
}

export class PriceList {
  RoundingMethod: SAPB1.BoRoundingMethod;
  GroupNum: SAPB1.BoPriceListGroupNum;
  BasePriceList: number;
  Factor: number;
  PriceListNo: number;
  PriceListName: string;
  IsGrossPrice: SAPB1.BoYesNoEnum;
  Active: SAPB1.BoYesNoEnum;
  ValidFrom: Date;
  ValidTo: Date;
  DefaultPrimeCurrency: string;
  DefaultAdditionalCurrency1: string;
  DefaultAdditionalCurrency2: string;
  RoundingRule: SAPB1.BoRoundingRule;
  FixedAmount: number;
  U_test: string;
}

export class PriceListKey {
  PriceListNo: number;
}

export class ProfitCenter {
  CenterCode: string;
  CenterName: string;
  GroupCode: string;
  InWhichDimension: number;
  CostCenterType: string;
  EffectiveFrom: Date;
  EffectiveTo: Date;
  Active: SAPB1.BoYesNoEnum;
}

export class ProfitCenterKey {
  CenterCode: string;
}

export class ProfitCenterParams {
  CenterCode: string;
  CenterName: string;
}

export class DistributionRule {
  FactorCode: string;
  FactorDescription: string;
  TotalFactor: number;
  Direct: string;
  InWhichDimension: number;
  Active: SAPB1.BoYesNoEnum;
  DistributionRuleLines: SAPB1.DistributionRuleLine[];
}

export class DistributionRuleKey {
  FactorCode: string;
}

export class DistributionRuleLine {
  CenterCode: string;
  TotalInCenter: number;
  EffectiveFrom: Date;
  EffectiveTo: Date;
}

export class DistributionRuleParams {
  FactorCode: string;
  FactorDescription: string;
}

export class Project {
  Code: string;
  Name: string;
  ValidFrom: Date;
  ValidTo: Date;
  Active: SAPB1.BoYesNoEnum;
}

export class ProjectKey {
  Code: string;
}

export class ProjectParams {
  Code: string;
  Name: string;
}

export class Warehouse {
  Street: string;
  StockInflationOffsetAccount: string;
  ZipCode: string;
  DecreasingAccount: string;
  PurchaseAccount: string;
  EURevenuesAccount: string;
  ReturningAccount: string;
  ShippedGoodsAccount: string;
  StockInflationAdjustAccount: string;
  AllowUseTax: SAPB1.BoYesNoEnum;
  CostInflationAccount: string;
  ForeignExpensesAccount: string;
  EUExpensesAccount: string;
  CostInflationOffsetAccount: string;
  ExpensesClearingAccount: string;
  PurchaseReturningAccount: string;
  VATInRevenueAccount: string;
  FederalTaxID: string;
  Location: number;
  Block: string;
  ExpenseAccount: string;
  DecreaseGLAccount: string;
  RevenuesAccount: string;
  TaxGroup: string;
  ExemptRevenuesAccount: string;
  PurchaseOffsetAccount: string;
  CostOfGoodsSold: string;
  WarehouseCode: string;
  State: string;
  City: string;
  PriceDifferencesAccount: string;
  VarianceAccount: string;
  Country: string;
  IncreaseGLAccount: string;
  ExchangeRateDifferencesAccount: string;
  WIPMaterialAccount: string;
  WarehouseName: string;
  DropShip: SAPB1.BoYesNoEnum;
  WIPMaterialVarianceAccount: string;
  TransfersAcc: string;
  InternalKey: number;
  ForeignRevenuesAcc: string;
  BuildingFloorRoom: string;
  County: string;
  Nettable: SAPB1.BoYesNoEnum;
  IncreasingAcc: string;
  ExpenseOffsetingAct: string;
  GoodsClearingAcc: string;
  StockAccount: string;
  BusinessPlaceID: number;
  PurchaseCreditAcc: string;
  EUPurchaseCreditAcc: string;
  ForeignPurchaseCreditAcc: string;
  SalesCreditAcc: string;
  SalesCreditEUAcc: string;
  ExemptedCredits: string;
  SalesCreditForeignAcc: string;
  NegativeInventoryAdjustmentAccount: string;
  WHShipToName: string;
  Excisable: SAPB1.BoYesNoEnum;
  WHIncomingCenvatAccount: string;
  WHOutgoingCenvatAccount: string;
  StockInTransitAccount: string;
  WipOffsetProfitAndLossAccount: string;
  InventoryOffsetProfitAndLossAccount: string;
  AddressType: string;
  StreetNo: string;
  Storekeeper: number;
  Shipper: string;
  ManageSerialAndBatchNumbers: SAPB1.BoYesNoEnum;
  GlobalLocationNumber: string;
  EnableBinLocations: SAPB1.BoYesNoEnum;
  BinLocCodeSeparator: string;
  DefaultBin: number;
  DefaultBinEnforced: SAPB1.BoYesNoEnum;
  AutoAllocOnIssue: SAPB1.BoDocWhsAutoIssueMethod;
  EnableReceivingBinLocations: SAPB1.BoYesNoEnum;
  ReceivingBinLocationsBy: SAPB1.ReceivingBinLocationsMethodEnum;
  PurchaseBalanceAccount: string;
  Inactive: SAPB1.BoYesNoEnum;
  RestrictReceiptToEmptyBinLocation: SAPB1.BoYesNoEnum;
  ReceiveUpToMaxQuantity: SAPB1.BoYesNoEnum;
  AutoAllocOnReceipt: SAPB1.AutoAllocOnReceiptMethodEnum;
  ReceiveUpToMaxWeight: SAPB1.BoYesNoEnum;
  ReceiveUpToMethod: SAPB1.ReceivingUpToMethodEnum;
}

export class WarehouseKey {
  WarehouseCode: string;
}

export class CommissionGroup {
  CommissionGroupCode: number;
  CommissionGroupName: string;
  CommissionPercentage: number;
}

export class CommissionGroupKey {
  CommissionGroupCode: number;
}

export class ProductTreeParams {
  TreeCode: string;
}

export class ProductTree {
  TreeCode: string;
  TreeType: SAPB1.BoItemTreeTypes;
  Quantity: number;
  DistributionRule: string;
  Project: string;
  DistributionRule2: string;
  DistributionRule3: string;
  DistributionRule4: string;
  DistributionRule5: string;
  PriceList: number;
  Warehouse: string;
  PlanAvgProdSize: number;
  HideBOMComponentsInPrintout: SAPB1.BoYesNoEnum;
  ProductTreeLines: SAPB1.ProductTreeLine[];
}

export class ProductTreeKey {
  TreeCode: string;
}

export class ProductTreeLine {
  ItemCode: string;
  Quantity: number;
  Warehouse: string;
  Price: number;
  Currency: string;
  IssueMethod: SAPB1.BoIssueMethod;
  InventoryUOM: string;
  Comment: string;
  ParentItem: string;
  PriceList: number;
  DistributionRule: string;
  Project: string;
  DistributionRule2: string;
  DistributionRule3: string;
  DistributionRule4: string;
  DistributionRule5: string;
  WipAccount: string;
  ItemType: SAPB1.ProductionItemType;
  LineText: string;
  AdditionalQuantity: number;
}

export class WorkOrder {
  Status: SAPB1.BoWorkOrderStat;
  Canceled: SAPB1.BoYesNoEnum;
  OrderDate: Date;
  WorkStartDate: Date;
  ExpectedCompletionDate: Date;
  WorkFinishDate: Date;
  ReceiverName: string;
  OrdererCode: string;
  OrdererName: string;
  CustomerRefNo: string;
  OrderTotal: number;
  TotalCurrency: string;
  GenerationTime: number;
  Comment: string;
  InstructionNumber: number;
  ContactPerson: number;
  Series: number;
  ActiveAccountCode: string;
  WorkSum: number;
  JournalRemarks: string;
  PriceListNum: number;
  FinancialPeriod: number;
  OrderNum: number;
  WorkOrder_Lines: SAPB1.WorkOrder_Line[];
}

export class WorkOrderKey {
  OrderNum: number;
}

export class WorkOrder_Line {
  RowNumber: number;
  ItemCode: string;
  ItemDescription: string;
  ItemQuantity: number;
  ItemPrice: number;
  PriceCurrency: string;
  ItemWarehouse: string;
  ActiveAccountCode: string;
  WorkSum: number;
}

export class LandedCost {
  DocEntry: number;
  LandedCostNumber: number;
  PostingDate: Date;
  DueDate: Date;
  VendorCode: string;
  VendorName: string;
  Broker: string;
  BrokerName: string;
  ClosedDocument: SAPB1.LandedCostDocStatusEnum;
  FileNumber: string;
  Remarks: string;
  Reference: string;
  DocumentCurrency: string;
  DocumentRate: number;
  ProjectedCustoms: number;
  ActualCustoms: number;
  ActualCustomsFC: number;
  Tax1: number;
  Tax2: number;
  BeforeTax: number;
  Total: number;
  TotalFreightCharges: number;
  ProjectedCustomsFC: number;
  Tax1FC: number;
  Tax2FC: number;
  BeforeTaxFC: number;
  TotalFC: number;
  TotalFreightChargesFC: number;
  Series: number;
  CustomsAffectsInventory: SAPB1.BoYesNoEnum;
  AmountToBalance: number;
  AmountToBalanceFC: number;
  BillofLadingNumber: string;
  TransportType: number;
  TransactionNumber: number;
  JournalRemarks: string;
  AttachmentEntry: number;
  LandedCost_ItemLines: SAPB1.LandedCost_ItemLine[];
  LandedCost_CostLines: SAPB1.LandedCost_CostLine[];
}

export class LandedCostKey {
  DocEntry: number;
}

export class LandedCost_ItemLine {
  DocEntry: number;
  LineNumber: number;
  BaseDocumentType: SAPB1.LandedCostBaseDocumentTypeEnum;
  BaseEntry: number;
  Number: string;
  ItemDescription: string;
  Quantity: number;
  BaseDocumentPrice: number;
  Rate: number;
  ProjectedCustoms: number;
  ProjectedCustomsFC: number;
  Expenditure: number;
  ExpenditureFC: number;
  WarehousePrice: number;
  WarehousePriceFC: number;
  LineTotal: number;
  LineTotalFC: number;
  Volume: number;
  VolumeUoM: number;
  Weight1: number;
  Weight1UnitCode: number;
  Weight2: number;
  Weight2UnitCode: number;
  VendorCode: string;
  Reference: string;
  FactorWithoutCustoms: number;
  FactorWithCustoms: number;
  InventoryUoM: string;
  BlockNumber: string;
  ImportLog: string;
  OriginalWarehouse: string;
  Warehouse: string;
  ReleaseNumber: number;
  VariantCosts: number;
  FixCosts: number;
  VariantCostsFC: number;
  FixCostsFC: number;
  Customs: number;
  CustomsFC: number;
  BaseDocumentValueLineTotal: number;
  BaseDocumentValueLineTotalFC: number;
  AllocatedUnitCostsLineTotal: number;
  AllocatedUnitCostsLineTotalFC: number;
  CustomsValue: number;
  CustomsValueFC: number;
  TotalCosts: number;
  TotalCostsFC: number;
  TotalVolume: number;
  BaseLine: number;
  TotalLineProjectedCustoms: number;
  AllocatedCostsLineTotal: number;
  FOBandIncludedCosts: number;
  FOBandIncludedCostsFC: number;
  Project: string;
  DistributionRule: string;
  DistributionRule2: string;
  DistributionRule3: string;
  DistributionRule4: string;
  DistributionRule5: string;
  PriceList: number;
  AutomaticExpenditure: SAPB1.BoYesNoEnum;
  InventoryValuation: SAPB1.BoYesNoEnum;
  OriginLine: number;
  Currency: string;
  CustomsGroupRate: number;
  VatGroup: string;
  VatPercent: number;
  ExciseSum: number;
  ExciseSumFC: number;
  ExciseAffectStock: SAPB1.BoYesNoEnum;
  CustomsCost: number;
  CustomsCostFC: number;
  CustomsAffectStock: SAPB1.BoYesNoEnum;
  CustomsVat: number;
  CustomsVatFC: number;
  CustomsVatAffectStock: SAPB1.BoYesNoEnum;
  CCDNumber: string;
}

export class LandedCost_CostLine {
  DocEntry: number;
  LandedCostCode: string;
  AllocationBy: SAPB1.LandedCostAllocationByEnum;
  Amount: number;
  AmountFC: number;
  Factor: number;
  CostType: SAPB1.LCCostTypeEnum;
  IncludeForCustoms: SAPB1.BoYesNoEnum;
  OpenAmount: number;
  OpenAmountFC: number;
}

export class LandedCostParams {
  LandedCostNumber: number;
}

export class SpecialPriceParams {
  ItemCode: string;
  CardCode: string;
  PriceListNum: number;
}

export class SpecialPrice {
  ItemCode: string;
  CardCode: string;
  Price: number;
  Currency: string;
  DiscountPercent: number;
  PriceListNum: number;
  AutoUpdate: SAPB1.BoYesNoEnum;
  SourcePrice: SAPB1.SourceCurrencyEnum;
  SpecialPriceDataAreas: SAPB1.SpecialPriceDataArea[];
}

export class SpecialPriceKey {
  ItemCode: string;
  CardCode: string;
}

export class SpecialPriceDataArea {
  PriceCurrency: string;
  AutoUpdate: SAPB1.BoYesNoEnum;
  Dateto: Date;
  Discount: number;
  SpecialPrice: number;
  DateFrom: Date;
  BPCode: string;
  PriceListNo: number;
  ItemNo: string;
  RowNumber: number;
  SpecialPriceQuantityAreas: SAPB1.SpecialPriceQuantityArea[];
}

export class SpecialPriceQuantityArea {
  Quantity: number;
  SPDARowNumber: number;
  SpecialPrice: number;
  ItemNo: string;
  BPCode: string;
  RowNumber: number;
  PriceCurrency: string;
  Discountin: number;
  UoMEntry: number;
}

export class CreditPaymentMethod {
  PaymentMethodCode: number;
  Name: string;
  AssignedtoCreditCard: number;
  PaymentCode: string;
  MinimumCreditAmount: number;
  MinimumPaymentAmount: number;
  MaxQtyWithoutApproval: number;
  InstallmentPaymentsPossible: SAPB1.InstallmentPaymentsPossiblityEnum;
}

export class CreditPaymentMethodKey {
  PaymentMethodCode: number;
}

export class CreditCardPayment {
  DueDateCode: string;
  DueDateName: string;
  DueDatesType: SAPB1.DueDateTypesEnum;
  PaymentAfterDays: number;
  PaymentAfterMonths: number;
  FromDay1: number;
  ToDay1: number;
  PaymentDay1: number;
  NoOfMonths1: number;
  FromDay2: number;
  ToDay2: number;
  PaymentDay2: number;
  NoOfMonths2: number;
  FromDay3: number;
  ToDay3: number;
  PaymentDay3: number;
  NoOfMonths3: number;
  FromDay4: number;
  ToDay4: number;
  PaymentDay4: number;
  NoOfMonths4: number;
}

export class CreditCardPaymentKey {
  DueDateCode: string;
}

export class AlternateCatNum {
  ItemCode: string;
  CardCode: string;
  Substitute: string;
  DisplayBPCatalogNumber: SAPB1.BoYesNoEnum;
}

export class AlternateCatNumKey {
  ItemCode: string;
  CardCode: string;
  Substitute: string;
}

export class BudgetParams {
  Numerator: number;
}

export class Budget {
  FutureAnnualExpensesCreditSys: number;
  FutureAnnualExpensesCreditLoc: number;
  FutureAnnualExpensesDebitSys: number;
  FutureAnnualExpensesDebitLoc: number;
  FutureAnnualRevenuesCredit: number;
  FutureAnnualRevenuesDebit: number;
  FutureRevenuesDebitSys: number;
  FutureRevenuesDebitLoc: number;
  ParentAccPercent: number;
  StartofFiscalYear: Date;
  ParentAccountKey: string;
  TotalAnnualBudgetDebitSys: number;
  BudgetBalanceDebitSys: number;
  BudgetBalanceDebitLoc: number;
  TotalAnnualBudgetDebitLoc: number;
  TotalAnnualBudgetCreditSys: number;
  TotalAnnualBudgetCreditLoc: number;
  BudgetBalanceCreditSys: number;
  BudgetBalanceCreditLoc: number;
  DivisionCode: number;
  AccountCode: string;
  Numerator: number;
  BudgetScenario: number;
  BudgetLines: SAPB1.BudgetLine[];
  BudgetCostAccountingLines: SAPB1.BudgetCostAccountingLine[];
}

export class BudgetKey {
  Numerator: number;
}

export class BudgetLine {
  PrecentOfAnnualBudgetAmount: number;
  RowDetails: string;
  RowNumber: number;
  FutExpenSysDebit: number;
  FutExpenDebit: number;
  FutExpenSysCredit: number;
  FutExpenCredit: number;
  FutIncomesSysCredit: number;
  FutIncomesSysDebit: number;
  FutIncomesCredit: number;
  BudgetSysTotDebit: number;
  BalSysTotDebit: number;
  BalTotDebit: number;
  BudgetTotCredit: number;
  BudgetSysTotCredit: number;
  BudgetTotDebit: number;
  BalSysTotCredit: number;
  BalTotCredit: number;
  BudgetKey: number;
  AccountCode: string;
  FutureIncomeDeb: number;
}

export class BudgetCostAccountingLine {
  DistrRuleCode: string;
  Dimension: number;
  DistrRuleDebitLC: number;
  DistrRuleDebitSC: number;
  DistrRuleCreditLC: number;
  DistrRuleCreditSC: number;
}

export class BudgetDistribution {
  September: number;
  August: number;
  July: number;
  June: number;
  May: number;
  April: number;
  March: number;
  February: number;
  December: number;
  November: number;
  October: number;
  January: number;
  BudgetAmount: number;
  Description: string;
  DivisionCode: number;
}

export class BudgetDistributionKey {
  DivisionCode: number;
}

export class ItemProperty {
  Number: number;
  PropertyName: string;
}

export class ItemPropertyKey {
  Number: number;
}

export class AlertManagement {
  Code: number;
  Name: string;
  Type: SAPB1.AlertManagementTypeEnum;
  Priority: SAPB1.AlertManagementPriorityEnum;
  Active: SAPB1.BoYesNoEnum;
  Param: string;
  QueryID: number;
  FrequencyType: SAPB1.AlertManagementFrequencyType;
  DayOfExecution: number;
  ExecutionTime: Date;
  LastExecutionDate: Date;
  LastExecutionTime: number;
  NextExecutionDate: Date;
  NextExecutionTime: Date;
  SaveHistory: SAPB1.BoYesNoEnum;
  FrequencyInterval: number;
  AlertManagementRecipients: SAPB1.AlertManagementRecipient[];
  AlertManagementDocuments: SAPB1.AlertManagementDocument[];
}

export class AlertManagementKey {
  Code: number;
}

export class AlertManagementRecipient {
  UserCode: number;
  SendEMail: SAPB1.BoYesNoEnum;
  SendSMS: SAPB1.BoYesNoEnum;
  SendFax: SAPB1.BoYesNoEnum;
  SendInternal: SAPB1.BoYesNoEnum;
}

export class AlertManagementDocument {
  Document: SAPB1.AlertManagementDocumentEnum;
  Active: SAPB1.BoYesNoEnum;
}

export class AlertManagementParams {
  Code: number;
  Type: SAPB1.AlertManagementTypeEnum;
  Name: string;
}

export class Message {
  Code: number;
  User: number;
  Priority: SAPB1.BoMsgPriorities;
  Subject: string;
  Text: string;
  Attachment: number;
  MessageDataColumns: SAPB1.MessageDataColumn[];
  RecipientCollection: SAPB1.Recipient[];
}

export class MessageKey {
  Code: number;
}

export class MessageDataColumn {
  ColumnName: string;
  Link: SAPB1.BoYesNoEnum;
  MessageDataLines: SAPB1.MessageDataLine[];
}

export class MessageDataLine {
  Value: string;
  Object: string;
  ObjectKey: string;
}

export class Recipient {
  UserCode: string;
  UserType: SAPB1.BoMsgRcpTypes;
  NameTo: string;
  SendEmail: SAPB1.BoYesNoEnum;
  EmailAddress: string;
  SendSMS: SAPB1.BoYesNoEnum;
  CellularNumber: string;
  SendFax: SAPB1.BoYesNoEnum;
  FaxNumber: string;
  SendInternal: SAPB1.BoYesNoEnum;
}

export class MessageHeader {
  Code: number;
  Received: SAPB1.BoYesNoEnum;
  Read: SAPB1.BoYesNoEnum;
  ReceivedDate: Date;
  ReceivedTime: Date;
  SentDate: Date;
  SentTime: Date;
}

export class BudgetScenario {
  Name: string;
  InitialRatioPercentage: number;
  StartofFiscalYear: Date;
  BasicBudget: number;
  Numerator: number;
  RoundingMethod: SAPB1.BoRoundingMethod;
  Project: string;
  DistributionRule: string;
  DistributionRule2: string;
  DistributionRule3: string;
  DistributionRule4: string;
  DistributionRule5: string;
}

export class BudgetScenarioKey {
  Numerator: number;
}

export class UserDefaultGroup {
  Code: string;
  Name: string;
  Warehouse: string;
  SalesEmployee: number;
  BPforInvoicePayment: string;
  CashAccount: string;
  CheckingAcct: string;
  PrintReceipt: SAPB1.BoPrintReceiptEnum;
  PrintInvoiceandPaymentinS: SAPB1.BoYesNoEnum;
  WindowsColor: number;
  Address: string;
  Country: string;
  PrintingHeader: string;
  PhoneNumber1: string;
  PhoneNumber2: string;
  FaxNumber: string;
  eMail: string;
  AddressinForeignLanguage: string;
  PrintingHeaderInForeignLangu: string;
  PhoneNumber1ForeignLang: string;
  PhoneNumber2ForeignLang: string;
  FaxNumberForeignLang: string;
  DefaultTaxCode: string;
  AdditionalIdNumber: string;
  UserSignature: number;
  UseTax: SAPB1.BoYesNoEnum;
  UseWarehouseAddressinAPD: SAPB1.BoYesNoEnum;
  BPLID: number;
  AssetInDoc: SAPB1.BoYesNoEnum;
}

export class UserDefaultGroupKey {
  Code: string;
}

export class SalesOpportunitiesParams {
  SequentialNo: number;
}

export class SalesOpportunities {
  SequentialNo: number;
  CardCode: string;
  SalesPerson: number;
  ContactPerson: number;
  Source: number;
  InterestField1: number;
  InterestField2: number;
  InterestField3: number;
  InterestLevel: number;
  StartDate: Date;
  PredictedClosingDate: Date;
  MaxLocalTotal: number;
  MaxSystemTotal: number;
  WeightedSumLC: number;
  WeightedSumSC: number;
  GrossProfit: number;
  GrossProfitTotalLocal: number;
  GrossProfitTotalSystem: number;
  Remarks: string;
  Status: SAPB1.BoSoOsStatus;
  ReasonForClosing: number;
  TotalAmountLocal: number;
  TotalAmounSystem: number;
  ClosingGrossProfitLocal: number;
  ClosingGrossProfitSystem: number;
  ClosingPercentage: number;
  CurrentStageNo: number;
  CurrentStageNumber: number;
  OpportunityName: string;
  Industry: number;
  LinkedDocumentType: string;
  DataOwnershipfield: number;
  StatusRemarks: string;
  ProjectCode: string;
  BPChanelName: string;
  UserSignature: number;
  CustomerName: string;
  DocumentCheckbox: string;
  LinkedDocumentNumber: number;
  Territory: number;
  ClosingDate: Date;
  BPChannelContact: number;
  BPChanelCode: string;
  ClosingType: SAPB1.BoSoClosedInTypes;
  AttachmentEntry: number;
  OpportunityType: SAPB1.OpportunityTypeEnum;
  SalesOpportunitiesLines: SAPB1.SalesOpportunitiesLine[];
  SalesOpportunitiesCompetition: SAPB1.SalesOpportunitiesCompetitionItem[];
  SalesOpportunitiesPartners: SAPB1.SalesOpportunitiesPartner[];
  SalesOpportunitiesInterests: SAPB1.SalesOpportunitiesInterest[];
  SalesOpportunitiesReasons: SAPB1.SalesOpportunitiesReason[];
}

export class SalesOpportunitiesKey {
  SequentialNo: number;
}

export class SalesOpportunitiesLine {
  LineNum: number;
  SalesPerson: number;
  StartDate: Date;
  ClosingDate: Date;
  StageKey: number;
  PercentageRate: number;
  MaxLocalTotal: number;
  MaxSystemTotal: number;
  Remarks: string;
  Contact: SAPB1.BoYesNoEnum;
  Status: SAPB1.BoSoStatus;
  WeightedAmountLocal: number;
  WeightedAmountSystem: number;
  DocumentNumber: number;
  DocumentType: SAPB1.BoAPARDocumentTypes;
  DocumentCheckbox: SAPB1.BoYesNoEnum;
  ContactPerson: number;
  BPChanelName: string;
  BPChanelCode: string;
  SequenceNo: number;
  DataOwnershipfield: number;
  BPChannelContact: number;
}

export class SalesOpportunitiesCompetitionItem {
  RowNo: number;
  Competition: number;
  Details: string;
  SequenceNo: number;
  WonOrLost: string;
}

export class SalesOpportunitiesPartner {
  RowNo: number;
  Partners: number;
  Details: string;
  RelationshipCode: number;
  SequenceNo: number;
}

export class SalesOpportunitiesInterest {
  RowNo: number;
  SequenceNo: number;
  PrimaryInterest: SAPB1.BoYesNoEnum;
  InterestId: number;
}

export class SalesOpportunitiesReason {
  RowNo: number;
  SequenceNo: number;
  Reason: number;
}

export class SalesOpportunityInterestSetup {
  SequenceNo: number;
  Description: string;
  Sort: number;
}

export class SalesOpportunityInterestSetupKey {
  SequenceNo: number;
}

export class SalesOpportunityInterestSetupParams {
  SequenceNo: number;
  Description: string;
}

export class ATTACHMENTS {
  Code: string;
  Name: string;
  U_Path: string;
  U_Date: Date;
  U_AttID: number;
  U_FileName: string;
}

export class ATTACHMENTSKey {
  Code: string;
}

export class ATTACHMENTSParams {
  Code: string;
}

export class InvokeParams {
  Value: string;
}

export class BXPAUDIT {
  Code: string;
  Name: string;
  U_BXPAONam: string;
  U_BXPAOVer: string;
  U_BXPDate: Date;
  U_BXPMsg: string;
  U_BXPMsgTa: string;
  U_BXPMsgTy: string;
  U_BXPRowTy: string;
  U_BXPSeqNo: string;
  U_BXPSrc: string;
  U_BXPStack: string;
  U_BXPTime: Date;
  U_BXPTrxID: string;
  U_BXPTrxIn: string;
  U_BXPTrxNm: string;
  U_BXPTrxTy: string;
  U_BXPUsrNm: string;
  U_BXPRowVr: string;
}

export class BXPAUDITKey {
  Code: string;
}

export class BXPAUDITParams {
  Code: string;
}

export class BXPCONFIG {
  Code: string;
  Name: string;
  U_BXPDescr: string;
  U_BXPValue: string;
  U_BXPVType: string;
  U_BXPRowVr: string;
}

export class BXPCONFIGKey {
  Code: string;
}

export class BXPCONFIGParams {
  Code: string;
}

export class BXPCTRLPREFS {
  Code: string;
  Name: string;
  U_BXPCapt: string;
  U_BXPColID: string;
  U_BXPFrmID: string;
  U_BXPIsVis: string;
  U_BXPItmID: string;
  U_BXPUser: number;
  U_BXPVindx: number;
  U_BXPWidth: number;
  U_BXPRowVr: string;
}

export class BXPCTRLPREFSKey {
  Code: string;
}

export class BXPCTRLPREFSParams {
  Code: string;
}

export class BXPCUSTFD {
  Code: string;
  Name: string;
  U_BXPDREP: string;
  U_BXPDecP: number;
  U_BXPDEF: string;
  U_BXPESIZE: number;
  U_BXPFDTyp: number;
  U_BXPFName: string;
  U_BXPFType: number;
  U_BXPFold: string;
  U_BXPLBL: string;
  U_BXPLang: string;
  U_BXPMod: string;
  U_BXPOnExt: string;
  U_BXPPOSD: string;
  U_BXPPROT: string;
  U_BXPROnly: string;
  U_BXPScr: string;
  U_BXPOrder: number;
  U_BXPTable: string;
  U_BXPVVS: string;
  U_BXPVis: string;
  U_BXPRowVr: string;
}

export class BXPCUSTFDKey {
  Code: string;
}

export class BXPCUSTFDParams {
  Code: string;
}

export class BXPCUSTSORTDEF {
  Code: string;
  Name: string;
  U_BXPDREP: string;
  U_BXPDes: string;
  U_BXPFl1: string;
  U_BXPFl2: string;
  U_BXPFl3: string;
  U_BXPFl4: string;
  U_BXPInd: number;
  U_BXPSoM: string;
  U_BXPMod: string;
  U_BXPScr: string;
  U_BXPRowVr: string;
}

export class BXPCUSTSORTDEFKey {
  Code: string;
}

export class BXPCUSTSORTDEFParams {
  Code: string;
}

export class BXPFORMPREFS {
  Code: string;
  Name: string;
  U_BXPCliID: string;
  U_BXPFrmID: string;
  U_BXPKey: string;
  U_BXPUser: number;
  U_BXPVal: string;
  U_BXPVindx: number;
  U_BXPRowVr: string;
}

export class BXPFORMPREFSKey {
  Code: string;
}

export class BXPFORMPREFSParams {
  Code: string;
}

export class BXPLICFEAT {
  Code: string;
  Name: string;
  U_BXPActTl: Date;
  U_BXPRowVr: string;
}

export class BXPLICFEATKey {
  Code: string;
}

export class BXPLICFEATParams {
  Code: string;
}

export class BXPLICIP {
  Code: string;
  Name: string;
  U_BXPCmnt: string;
  U_BXPIPAdd: string;
  U_BXPRowVr: string;
}

export class BXPLICIPKey {
  Code: string;
}

export class BXPLICIPParams {
  Code: string;
}

export class BXPLICSET {
  Code: string;
  Name: string;
  U_BXPDscp: string;
  U_BXPExpDt: Date;
  U_BXPHwKey: string;
  U_BXPLECod: string;
  U_BXPLFVer: number;
  U_BXPLTyp: string;
  U_BXPModTk: string;
  U_BXPNumEm: number;
  U_BXPNumTe: number;
  U_BXPNumUs: number;
  U_BXPSig: string;
  U_BXPSkeyF: string;
  U_BXPStDt: Date;
  U_BXPVersn: number;
  U_BXPRowVr: string;
}

export class BXPLICSETKey {
  Code: string;
}

export class BXPLICSETParams {
  Code: string;
}

export class BXPLICTER {
  Code: string;
  Name: string;
  U_BXPComm: string;
  U_BXPIPAdd: string;
  U_BXPRowVr: string;
}

export class BXPLICTERKey {
  Code: string;
}

export class BXPLICTERParams {
  Code: string;
}

export class BXPLMSEMPPRINTER {
  Code: string;
  Name: string;
  U_BXPEmpID: number;
  U_BXPVisOr: number;
  U_BXPPrnCd: string;
}

export class BXPLMSEMPPRINTERKey {
  Code: string;
}

export class BXPLMSEMPPRINTERParams {
  Code: string;
}

export class BXPLMSMOBINVCOUNT {
  Code: string;
  Name: string;
  U_BXPBatA1: string;
  U_BXPBatA2: string;
  U_BXPBatDe: string;
  U_BXPBatNm: string;
  U_BXPBinCd: string;
  U_BXPBinNm: number;
  U_BXPCntd: string;
  U_BXPCQty1: number;
  U_BXPCQty2: number;
  U_BXPCtrID: number;
  U_BXPDocEn: number;
  U_BXPExpDt: Date;
  U_BXPFreez: string;
  U_BXPItmCd: string;
  U_BXPLoc: string;
  U_BXPPrdDt: Date;
  U_BXPSerA1: string;
  U_BXPSerA2: string;
  U_BXPSerDe: string;
  U_BXPSerExpDt: Date;
  U_BXPSerNm: string;
  U_BXPSerPrdDt: Date;
  U_BXPUoMEn: number;
  U_BXPUoMCd: string;
  U_BXPWHCod: string;
}

export class BXPLMSMOBINVCOUNTKey {
  Code: string;
}

export class BXPLMSMOBINVCOUNTParams {
  Code: string;
}

export class BXPLMSMOBLOG {
  Code: string;
  Name: string;
  U_BXPActn: string;
  U_BXPBsDcE: number;
  U_BXPBsDcL: number;
  U_BXPBsDcN: string;
  U_BXPBsDcT: number;
  U_BXPBtSrN: string;
  U_BXPBinCd: string;
  U_BXPBinTo: string;
  U_BXPCrDEn: number;
  U_BXPCrDTy: number;
  U_BXPDate: Date;
  U_BXPDocEn: number;
  U_BXPDocLn: number;
  U_BXPDocNm: string;
  U_BXPDocTy: number;
  U_BXPEmpID: number;
  U_BXPItmCd: string;
  U_BXPModul: string;
  U_BXPQtty: number;
  U_BXPSec: number;
  U_BXPTime: Date;
  U_BXPWHCod: string;
  U_BXPWHTo: string;
}

export class BXPLMSMOBLOGKey {
  Code: string;
}

export class BXPLMSMOBLOGParams {
  Code: string;
}

export class BXPLMSMOBPICK {
  Code: string;
  Name: string;
  U_BXPBtnNm: string;
  U_BXPBinCd: string;
  U_BXPBinNm: number;
  U_BXPIsFld: string;
  U_BXPIsSyn: string;
  U_BXPItmCd: string;
  U_BXPPkQty: number;
  U_BXPPkLEn: number;
  U_BXPPkLLn: number;
  U_BXPRBtNm: string;
  U_BXPRBnCd: string;
  U_BXPRBnNm: number;
  U_BXPRSrNm: string;
  U_BXPSaOEn: number;
  U_BXPSaOLn: number;
  U_BXPSerNm: string;
  U_BXPWHCod: string;
}

export class BXPLMSMOBPICKKey {
  Code: string;
}

export class BXPLMSMOBPICKParams {
  Code: string;
}

export class BXPLMSMOBTEN {
  Code: string;
  Name: string;
  U_BXPBAdDt: Date;
  U_BXPBatA1: string;
  U_BXPBatA2: string;
  U_BXPBExDt: Date;
  U_BXPBMfDt: Date;
  U_BXPBNot: string;
  U_BXPBatNm: string;
  U_BXPBWAdD: string;
  U_BXPBWExD: string;
  U_BXPBWMfD: string;
  U_BXPBWNot: string;
  U_BXPBinCd: string;
  U_BXPBinNm: number;
  U_BXPCmmnt: string;
  U_BXPDocEn: number;
  U_BXPDocLn: number;
  U_BXPDocTy: number;
  U_BXPEmpID: number;
  U_BXPHdCd: string;
  U_BXPIsRej: string;
  U_BXPItmCd: string;
  U_BXPItmPU: number;
  U_BXPLoc: string;
  U_BXPQty: number;
  U_BXPSerA1: string;
  U_BXPSerA2: string;
  U_BXPSExDt: Date;
  U_BXPSMfDt: Date;
  U_BXPSNot: string;
  U_BXPSerNm: string;
  U_BXPToBin: string;
  U_BXPToBNm: number;
  U_BXPTrxSt: number;
  U_BXPUoMAb: number;
  U_BXPUoMCd: string;
  U_BXPLnCod: string;
}

export class BXPLMSMOBTENKey {
  Code: string;
}

export class BXPLMSMOBTENParams {
  Code: string;
}

export class BXPLMSMOBTHD {
  Code: string;
  Name: string;
  U_BXPBLUID: string;
  U_BXPCrdCd: string;
  U_BXPCreDt: Date;
  U_BXPCreTm: Date;
  U_BXPDocEn: number;
  U_BXPDocNm: number;
  U_BXPDocTy: number;
  U_BXPExDcN: string;
  U_BXPIsDft: string;
  U_BXPOrigS: string;
  U_BXPPosDt: Date;
  U_BXPPosTm: Date;
  U_BXPPrcDt: Date;
  U_BXPPrcMs: string;
  U_BXPPrcEr: string;
  U_BXPRetry: number;
  U_BXPPrcTm: Date;
  U_BXPRef2: string;
  U_BXPRemrk: string;
  U_BXPTrxSt: number;
  U_BXPDocDt: Date;
}

export class BXPLMSMOBTHDKey {
  Code: string;
}

export class BXPLMSMOBTHDParams {
  Code: string;
}

export class BXPLMSMOBTLN {
  Code: string;
  Name: string;
  U_BXPActCd: string;
  U_BXPBsCrd: string;
  U_BXPBsDcE: number;
  U_BXPBsDcL: number;
  U_BXPBsDcT: number;
  U_BXPClsLn: string;
  U_BXPCurcy: string;
  U_BXPOcrCd: string;
  U_BXPDocEn: number;
  U_BXPDocLn: number;
  U_BXPDocTy: number;
  U_BXPItmCd: string;
  U_BXPPcLst: number;
  U_BXPToWH: string;
  U_BXPTrxSt: number;
  U_BXPUPric: number;
  U_BXPUoMAb: number;
  U_BXPUoMCd: string;
  U_BXPWHCod: string;
  U_BXPHdCd: string;
}

export class BXPLMSMOBTLNKey {
  Code: string;
}

export class BXPLMSMOBTLNParams {
  Code: string;
}

export class BXPLMSPRINTER {
  Code: string;
  Name: string;
  U_BXPDescr: string;
  U_BXPIPAdd: string;
  U_BXPIsAct: string;
  U_BXPIsNet: string;
  U_BXPPrnNm: string;
  U_BXPPort: number;
  U_BXPPrnTy: string;
}

export class BXPLMSPRINTERKey {
  Code: string;
}

export class BXPLMSPRINTERParams {
  Code: string;
}

export class BXPLMSPRINTLAYOUT {
  Code: string;
  Name: string;
  U_BXPVisOr: number;
  U_BXPLayCd: string;
  U_BXPPrnCd: string;
}

export class BXPLMSPRINTLAYOUTKey {
  Code: string;
}

export class BXPLMSPRINTLAYOUTParams {
  Code: string;
}

export class BXPLMSPRINTLAYSET {
  Code: string;
  Name: string;
  U_BXPBinCd: string;
  U_BXPDescr: string;
  U_BXPStBLb: string;
  U_BXPStkLb: string;
  U_BXPStSLb: string;
}

export class BXPLMSPRINTLAYSETKey {
  Code: string;
}

export class BXPLMSPRINTLAYSETParams {
  Code: string;
}

export class BXPLMSUSRPREF {
  Code: string;
  Name: string;
  U_BXPEmpID: number;
  U_BXPMnuCd: string;
  U_BXPVisOr: number;
}

export class BXPLMSUSRPREFKey {
  Code: string;
}

export class BXPLMSUSRPREFParams {
  Code: string;
}

export class BXPLOG {
  Code: string;
  Name: string;
  U_BXPAONam: string;
  U_BXPAOVer: string;
  U_BXPDate: Date;
  U_BXPDev: string;
  U_BXPDocEn: number;
  U_BXPDocNm: number;
  U_BXPDocTy: number;
  U_BXPItmCd: string;
  U_BXPLnNum: number;
  U_BXPMsg: string;
  U_BXPMilSc: number;
  U_BXPOptID: string;
  U_BXPPars: string;
  U_BXPPrice: number;
  U_BXPQty: number;
  U_BXPRes: string;
  U_BXPSec: number;
  U_BXPStack: string;
  U_BXPTime: Date;
  U_BXPType: string;
  U_BXPUsrNm: string;
  U_BXPRowVr: string;
}

export class BXPLOGKey {
  Code: string;
}

export class BXPLOGParams {
  Code: string;
}

export class BXPREPORT {
  Code: string;
  Name: string;
  U_BXPFILE: string;
  U_BXPPrnNm: string;
  U_BXPRPTCD: string;
  U_BXPRowVr: string;
}

export class BXPREPORTKey {
  Code: string;
}

export class BXPREPORTParams {
  Code: string;
}

export class BXPRPTPF {
  Code: string;
  Name: string;
  U_BXPLayCd: string;
  U_BXPRptCd: string;
  U_BXPUsrID: number;
  U_BXPRowVr: string;
}

export class BXPRPTPFKey {
  Code: string;
}

export class BXPRPTPFParams {
  Code: string;
}

export class BXPSEQUENCE {
  Code: string;
  Name: string;
  U_BXPLstNm: number;
  U_BXPLtNmH: number;
  U_BXPRowVr: string;
}

export class BXPSEQUENCEKey {
  Code: string;
}

export class BXPSEQUENCEParams {
  Code: string;
}

export class BXPSYNCOBJC {
  Code: string;
  Name: string;
  U_BXPAddOn: string;
  U_BXPOType: string;
  U_BXPRowVr: string;
}

export class BXPSYNCOBJCKey {
  Code: string;
}

export class BXPSYNCOBJCParams {
  Code: string;
}

export class BXPSYNCQ {
  Code: string;
  Name: string;
  U_BXPAddOn: string;
  U_BXPCDate: Date;
  U_BXPCTime: Date;
  U_BXPErrMs: string;
  U_BXPKCol: string;
  U_BXPKVal: string;
  U_BXPMDate: Date;
  U_BXPMTime: Date;
  U_BXPOType: string;
  U_BXPPrcsd: string;
  U_BXPPStat: string;
  U_BXPRData: string;
  U_BXPTType: string;
  U_BXPRowVr: string;
}

export class BXPSYNCQKey {
  Code: string;
}

export class BXPSYNCQParams {
  Code: string;
}

export class BXPTCCONF {
  Code: string;
  Name: string;
  U_BXPCCode: string;
  U_BXPDefV: string;
  U_BXPDesc: string;
  U_BXPLDesc: string;
  U_BXPMod: string;
  U_BXPOFUS: string;
  U_BXPSMod: string;
  U_BXPUEdit: string;
  U_BXPVVAL: string;
  U_BXPValue: string;
  U_BXPVType: string;
  U_BXPRowVr: string;
}

export class BXPTCCONFKey {
  Code: string;
}

export class BXPTCCONFParams {
  Code: string;
}

export class BXPTRANCUST {
  Code: string;
  Name: string;
  U_BXPAddOn: string;
  U_BXPComm: string;
  U_BXPCust: string;
  U_BXPKey: string;
  U_BXPLang: string;
  U_BXPResNm: string;
  U_BXPUser: string;
  U_BXPValue: string;
  U_BXPRowVr: string;
}

export class BXPTRANCUSTKey {
  Code: string;
}

export class BXPTRANCUSTParams {
  Code: string;
}

export class BXPUSRLC {
  Code: string;
  Name: string;
  U_BXPEmpID: number;
  U_BXPLcSN: string;
  U_BXPTermC: string;
  U_BXPUsrn: string;
  U_BXPRowVr: string;
}

export class BXPUSRLCKey {
  Code: string;
}

export class BXPUSRLCParams {
  Code: string;
}

export class B1Session {
  SessionId: string;
  Version: string;
  SessionTimeout: number;
}

export class B1SessionKey {
  SessionId: string;
}

export class ItemImage {
  ItemCode: string;
  Picture: string;
}

export class ItemImageKey {
  ItemCode: string;
}

export class ChartOfAccountParams {
  Code: string;
}

export class ExternalCall {
  ID: number;
  Category: number;
  Status: SAPB1.ExternalCallStatusEnum;
  CreationDate: Date;
  CreationTime: number;
  LastUpdateDate: Date;
  LastUpdateTime: number;
  LastUpdateUserCode: string;
  CallArguments: SAPB1.CallArgument[];
  CallMessages: SAPB1.CallMessage[];
}

export class CallArgument {
  Name: string;
  Value: string;
}

export class CallMessage {
  ID: number;
  Type: SAPB1.CallMessageTypeEnum;
  ErrorCode: string;
  MessageBody: string;
  Status: SAPB1.CallMessageStatusEnum;
  CreationDate: Date;
  CreationTime: number;
  CallMessageArguments: SAPB1.CallMessageArgument[];
}

export class CallMessageArgument {
  Name: string;
  Value: string;
}

export class ExternalCallParams {
  ID: number;
}

export class GLAccount {
  Code: string;
  DueDate: Date;
  Debit: number;
  Credit: number;
  SystemDebit: number;
  SystemCredit: number;
  ForeignDebit: number;
  ForeignCredit: number;
  ForeignCurrency: string;
}

export class ItemPriceParams {
  Date: Date;
  UoMEntry: number;
  BlanketAgreementNumber: number;
  BlanketAgreementLine: number;
  UoMQuantity: number;
  InventoryQuantity: number;
  Currency: string;
  ItemCode: string;
  CardCode: string;
  PriceList: number;
}

export class ItemPriceReturnParams {
  Price: number;
  Currency: string;
  Discount: number;
}

export class AdvancedGLAccountParams {
  ItemCode: string;
  Warehouse: string;
  BPCode: string;
  FederalTaxID: string;
  ShipToCountry: string;
  ShipToState: string;
  VatGroup: string;
  PostingDate: Date;
  AccountType: SAPB1.InventoryAccountTypeEnum;
  Usage: number;
}

export class AdvancedGLAccountReturnParams {
  AccountCode: string;
}

export class CompanyInfo {
  Version: number;
  EnableExpensesManagement: SAPB1.BoYesNoEnum;
  EnableAccountSegmentation: SAPB1.BoYesNoEnum;
  EnableBillOfExchange: SAPB1.BoYesNoEnum;
  BaseDateForExchangeRate: SAPB1.BoBaseDateRateEnum;
  BISRBankActKey: number;
  BISRBankCountry: string;
  BISRBankNo: string;
  BISRBankAccount: string;
  BISRBranch: string;
  MaxRecordsInChooseFromList: number;
  EnableCheckQuantityInRDR: SAPB1.BoYesNoEnum;
  SRIManagementSystem: SAPB1.BoManageMethod;
  AutoSRICreationOnReceipt: SAPB1.BoYesNoEnum;
  IEPSPayer: SAPB1.BoYesNoEnum;
  DefaultDaysForOrdCanc: number;
  PercentOfTotalAcquisition: number;
  MinimumBaseAmountPerDoc: number;
  EnableSharingSeries: SAPB1.BoYesNoEnum;
  DataOwnershipIndication: SAPB1.BoYesNoEnum;
  MinimumAmountForAppndixOP: number;
  DisplayTransactionsByDflt: SAPB1.BoYesNoEnum;
  DefaultStampTax: string;
  MinimumAmountForAnnualList: number;
  BlockStockNegativeQuantity: SAPB1.BoYesNoEnum;
  AutoCreateCustomerEqCard: SAPB1.BoYesNoEnum;
  MaxNumberOfDocumentsInPmt: number;
  EnableStockRelNoCostPrice: SAPB1.BoYesNoEnum;
  CompanyName: string;
  GroupLinesInVATCalculation: SAPB1.BoYesNoEnum;
  TaxCalculationSystem: SAPB1.TaxCalcSysEnum;
  EnableTransactionNotification: SAPB1.BoYesNoEnum;
  EnableConversionDifferentAcct: SAPB1.BoYesNoEnum;
  B1iTimeOut: number;
}

export class AdminInfo {
  Code: number;
  CompanyName: string;
  Address: string;
  Country: string;
  PrintingHeader: string;
  PhoneNumber1: string;
  PhoneNumber2: string;
  FaxNumber: string;
  eMail: string;
  ManagingDirector: string;
  ChartofAccountsTemplate: string;
  LocalCurrency: string;
  SystemCurrency: string;
  CreditBalancewithMinusSign: SAPB1.BoYesNoEnum;
  StandardUnitofLength: number;
  WeightUnitDefault: number;
  DirectIndirectRate: SAPB1.BoYesNoEnum;
  MinimumAmountfor347Report: number;
  SetItemsWarehouses: SAPB1.BoYesNoEnum;
  BankCountry: string;
  FederalTaxID: string;
  TaxOffice: string;
  DeductionFileNo: string;
  TaxCollection: SAPB1.BoYesNoEnum;
  TaxDefinition: SAPB1.BoYesNoEnum;
  TaxPercentage: number;
  AdvancesonCorpIncomeTax: number;
  WithTax: number;
  WithholdingTaxVendorDdct: SAPB1.BoYesNoEnum;
  CustomersDeductionatSource: SAPB1.BoYesNoEnum;
  WithholdingTaxTdctPercnt: number;
  WithholdingTaxDdctExpired: Date;
  WithholdingTaxDdctOffice: string;
  CommitmentRestriction: SAPB1.BoYesNoEnum;
  CreditRestriction: SAPB1.BoYesNoEnum;
  RestrictSales: SAPB1.BoYesNoEnum;
  RestrictDelNotesPO: SAPB1.BoYesNoEnum;
  RestrictOrders: SAPB1.BoYesNoEnum;
  ConsiderDelNotesinSalesR: SAPB1.BoYesNoEnum;
  CreditDepositType: SAPB1.BoYesNoEnum;
  UseTax: SAPB1.BoYesNoEnum;
  SplitPO: SAPB1.BoYesNoEnum;
  AltNameForApInvoice: string;
  AltNameforCreditMemo: string;
  AltNameForGoodsReceipt: string;
  AltNameForGoodsReturn: string;
  AltNameForPurchase: string;
  AlertTypeforWHStock: SAPB1.BoAlertTypeforWHStockEnum;
  SetCommissionbyCustomer: SAPB1.BoYesNoEnum;
  SetCommissionbyItem: SAPB1.BoYesNoEnum;
  SetCommissionbySE: SAPB1.BoYesNoEnum;
  DefaultCustomerPaymentTerms: number;
  DefaultVendorPaymentTerms: number;
  CalculateGrossProfitperTra: SAPB1.BoYesNoEnum;
  PriceListforCostPrice: number;
  GrossProfitAfterSale: SAPB1.BoYesNoEnum;
  DisplayPriceforPriceOnly: SAPB1.BoYesNoEnum;
  CalculateTaxinSalesQuotati: SAPB1.BoYesNoEnum;
  BaseField: SAPB1.BoYesNoEnum;
  AllowClosedSalesQuotations: SAPB1.BoYesNoEnum;
  UserConversionCode: SAPB1.BoYesNoEnum;
  CompanyColor: number;
  TotalsAccuracy: number;
  AccuracyofQuantities: number;
  PriceAccuracy: number;
  RateAccuracy: number;
  PercentageAccuracy: number;
  MeasuringAccuracy: number;
  QueryAccuracy: number;
  AddressinForeignLanguage: string;
  DefaultTaxCode: string;
  LetterHeaderinForeignLangu: string;
  PhoneNumber1ForeignLang: string;
  PhoneNumber2ForeignLang: string;
  FaxNumberForeignLang: string;
  ManagingDirectorForeignLan: string;
  TimeTemplate: SAPB1.BoTimeTemplate;
  DateTemplate: SAPB1.BoDateTemplate;
  DateSeparator: string;
  FCCheckAccount: SAPB1.BoCurrencyCheck;
  ChangedExistingOrders: SAPB1.BoYesNoEnum;
  MultiCurrencyCheck: SAPB1.BoCurrencyCheck;
  ISRType: number;
  DisplayRoundingRemark: SAPB1.BoYesNoEnum;
  ISRBillerID: string;
  BlockSystemCurrencyEditing: SAPB1.BoYesNoEnum;
  BlockPostingDateEditing: SAPB1.BoYesNoEnum;
  DefaultWarehouse: string;
  BlockTaxDate: SAPB1.BoYesNoEnum;
  TaxDefinitionforVatitem: string;
  TaxDefinitionforVatservice: string;
  TaxGroupforPurchaseItem: string;
  TaxGroupforServicePurchase: string;
  CalculateBudget: SAPB1.BoYesNoEnum;
  CustomerIdNumber: string;
  BlockBudget: SAPB1.BoBlockBudget;
  BudgetAlert: SAPB1.BoBudgetAlert;
  BlockPurchaseOrders: SAPB1.BoYesNoEnum;
  BlockBookkeeping: SAPB1.BoYesNoEnum;
  DefaultBudgetCostAssessMt: number;
  ContinuousStockManagement: SAPB1.BoYesNoEnum;
  ContinuousStockSystem: SAPB1.BoInventorySystem;
  RoundTaxAmounts: SAPB1.BoYesNoEnum;
  BlockDelNotesforPurchase: SAPB1.BoYesNoEnum;
  FileNumberinIncomeTax: string;
  DeferredTax: SAPB1.BoYesNoEnum;
  DefaultBankNo: string;
  DefaultBankAccount: string;
  DefaultBranch: string;
  UsePASystem: SAPB1.BoYesNoEnum;
  ServiceCode: string;
  ServicePassword: string;
  ParamFolderPath: string;
  ExcelFolderPath: string;
  FederalTaxID2: string;
  FederalTaxID3: string;
  DecimalSeparator: string;
  ThousandsSeparator: string;
  DisplayCurrencyontheRight: SAPB1.BoYesNoEnum;
  AlertbyWarehouse: SAPB1.BoYesNoEnum;
  PriceSystem: SAPB1.BoYesNoEnum;
  WholdingTaxDedHierarchy: SAPB1.BoYesNoEnum;
  DocConfirmation: SAPB1.BoYesNoEnum;
  DefaultforBatchStatus: SAPB1.BoDefaultBatchStatus;
  GLMethod: SAPB1.BoGLMethods;
  UniqueSerialNo: SAPB1.BoUniqueSerialNumber;
  MaxHistory: number;
  ChangeDefReconAPAccounts: SAPB1.BoYesNoEnum;
  ChangeDefReconARAccounts: SAPB1.BoYesNoEnum;
  BPTypeCode: string;
  PBSNumber: string;
  PBSGroupNumber: string;
  OrganizationNumber: string;
  AccountSegmentsSeparator: string;
  DisplayBookkeepingWindow: SAPB1.BoYesNoEnum;
  SHandleWT: SAPB1.BoYesNoEnum;
  SDefaultWTCode: string;
  WithholdingTaxPHandle: string;
  PDefaultWTCode: string;
  WTLiableExpense: SAPB1.BoYesNoEnum;
  UseNegativeAmounts: SAPB1.BoYesNoEnum;
  HolidaysName: string;
  OrderBlock: string;
  RoundingMethod: SAPB1.BoYesNoEnum;
  AdressFromWH: SAPB1.BoYesNoEnum;
  OrderingParty: string;
  CertificateNo: string;
  ExpirationDate: Date;
  NationalInsuranceNo: string;
  SalesOrderConfirmed: SAPB1.BoYesNoEnum;
  PurchaseOrderConfirmed: SAPB1.BoYesNoEnum;
  SDfltITWT: string;
  PDfltITWT: string;
  DefaultAccountCurrency: SAPB1.BoYesNoEnum;
  DeferredTaxforVendors: SAPB1.BoYesNoEnum;
  CreateAutoVATLineinJDT: SAPB1.BoYesNoEnum;
  ConsumeForecast: SAPB1.BoYesNoEnum;
  ConsumptionMethod: SAPB1.BoConsumptionMethod;
  DaysBackward: number;
  DaysForward: number;
  DefaultDunningTerm: string;
  DefaultBankAccountKey: number;
  MultiLanguageSupportEnable: SAPB1.BoYesNoEnum;
  AllowFuturePostingDate: SAPB1.BoYesNoEnum;
  AdditionalIdNumber: string;
  State: string;
  CalculateRowDiscount: SAPB1.BoYesNoEnum;
  BankStatementInstalled: SAPB1.BoYesNoEnum;
  UniqueTaxPayerReference: string;
  EmployerReference: string;
  PeriodStatusAutoChange: SAPB1.BoYesNoEnum;
  PeriodStatusChangeDelay: number;
  GrossProfitPercentForServiceDocuments: number;
  XMLFileFolderPath: string;
  PickList: SAPB1.BoYesNoEnum;
  GeneralManager: string;
  GeneralManagerForeignLanguage: string;
  UseProductionProfitAndLossAccount: SAPB1.BoYesNoEnum;
  WTAccumAmountAP: number;
  WTAccumAmountAR: number;
  CopyExchangeRateInCopyTo: SAPB1.BoYesNoEnum;
  GTSOutboundFolder: string;
  GTSInboundFolder: string;
  GTSSeparateCode: string;
  GTSDefaultChecker: number;
  GTSDefaultPayee: number;
  GTSMaxAmount: number;
  GTSResponseToExceeding: SAPB1.GTSResponseToExceedingEnum;
  ApplicationOfIFRS: SAPB1.BoYesNoEnum;
  StartingInFiscalYear: number;
  ReportAccordingTo: number;
  CopyOpenRowsToDelivery: SAPB1.BoYesNoEnum;
  EnableApprovalProcedureInDI: SAPB1.BoYesNoEnum;
  IssuePrimarilyBy: SAPB1.IssuePrimarilyByEnum;
  IsRemoveUnpricedValue: SAPB1.BoYesNoEnum;
  EnableAdvancedGLAccountDetermination: SAPB1.BoYesNoEnum;
  CreateOnlineQuotation: SAPB1.BoYesNoEnum;
  IsPrinterConnected: SAPB1.BoYesNoEnum;
  EnableBranches: SAPB1.BoYesNoEnum;
  IEMandatoryValidation: SAPB1.BoYesNoEnum;
  EnablePaymentDueDates: SAPB1.BoYesNoEnum;
  MaximumNumberOfDaysForDueDate: number;
  AliasName: string;
  EnableCentralizedIncomingPayments: SAPB1.BoYesNoEnum;
  EnableCentralizedOutgoingPayments: SAPB1.BoYesNoEnum;
  TaxRateDetermination: SAPB1.TaxRateDeterminationEnum;
  BoletoFolderPath: string;
  AllowMultipleBAOnSamePeriod: SAPB1.BoYesNoEnum;
  BlockMultipleBAOnSameAPDocument: SAPB1.BoYesNoEnum;
  BlockMultipleBAOnSameARDocument: SAPB1.BoYesNoEnum;
  DisplayCancelDocInReport: SAPB1.BoYesNoEnum;
  MaxDaysForCancel: number;
  ReuseDocumentNum: SAPB1.BoYesNoEnum;
  ReuseNotaFiscalNum: SAPB1.BoYesNoEnum;
  AutoAddUoM: SAPB1.BoYesNoEnum;
  AutoAddPackage: SAPB1.BoYesNoEnum;
  DisplayInactivePriceListInReports: SAPB1.BoYesNoEnum;
  DisplayInactivePriceListInDocuments: SAPB1.BoYesNoEnum;
  DisplayInactivePriceListInSettings: SAPB1.BoYesNoEnum;
  ApplyBaseInactiveStatusToSpecialPrices: SAPB1.BoYesNoEnum;
  ApplyBaseInactiveStatusToPeriodVolumeDiscounts: SAPB1.BoYesNoEnum;
  ApplyBaseInactiveStatusToPriceLists: SAPB1.BoYesNoEnum;
  PriceProceedMethod: SAPB1.PriceProceedMethodEnum;
  RemoveUpdatePricesBasedOnNonStandardPriceLists: SAPB1.BoYesNoEnum;
  SirenNo: string;
  InstitutionCode: string;
  SetResourcesWarehouses: SAPB1.BoYesNoEnum;
  UseParentWIPInComponents: SAPB1.BoYesNoEnum;
  AllowInBoundPostingWithZeroPrice: SAPB1.BoYesNoEnum;
  InventoryPostingHighlightVariance: number;
  InventoryPostingReleaseOnlySerialAndBatch: SAPB1.BoYesNoEnum;
  InventoryCountingHighlightVariance: number;
  InventoryCountingHighlightMaxVariance: number;
  InventoryCountingHighlightCountersDifference: number;
  CopySingleCounterToIndividualCounter: SAPB1.BoYesNoEnum;
  CloseCountedRowsWithZeroDifference: SAPB1.BoYesNoEnum;
  CloseCountedRowsWithoutConfirmation: SAPB1.BoYesNoEnum;
  CalculateInWhseQtyBasedOnPostingDate: SAPB1.BoYesNoEnum;
  RefreshInWhseQtyInDI: SAPB1.BoYesNoEnum;
  SEPACreditorID: string;
  DataOwnershipManageBy: SAPB1.BoDataOwnershipManageMethodEnum;
  AllowBPWithNoOwner: SAPB1.BoYesNoEnum;
  ExtendedAdminInfo: SAPB1.ExtendedAdminInfo;
}

export class ExtendedAdminInfo {
  AddressType: string;
  StreetNo: string;
  STDCode: number;
  STDCodeForeign: number;
  NatureOfCompanyCode: number;
  EconomicActivityTypeCode: number;
  CreditContributionOriginCode: string;
  IPIPeriodCode: string;
  CooperativeAssociationTypeCode: number;
  ProfitTaxationCode: number;
  CompanyQualificationCode: number;
  DeclarerTypeCode: number;
  IPITaxContributor: SAPB1.BoYesNoEnum;
  CommercialRegister: string;
  DateOfIncorporation: Date;
  SPEDProfile: string;
  EnvironmentType: number;
  Opting4ICMS: SAPB1.BoYesNoEnum;
  OKDPNumber: string;
  GlobalLocationNumber: string;
  EnableIntrastat: SAPB1.BoYesNoEnum;
  AuthorityUser: string;
  AuthorityPassword: string;
  URLforGoodsTransportService: string;
  URLforInvoiceTypeService: string;
  ElectronicApprovalForGoodsTransEnabled: SAPB1.BoYesNoEnum;
  ElectronicApprovalForInvoiceEnabled: SAPB1.BoYesNoEnum;
  AllowInactiveItemsInInventoryOpeningBalance: SAPB1.BoYesNoEnum;
  AllowInactiveItemsInInventoryCountingAndPosting: SAPB1.BoYesNoEnum;
  AutoAssignNewBranchToBP: SAPB1.BoYesNoEnum;
}

export class PathAdmin {
  WordTemplateFolderPath: string;
  PicturesFolderPath: string;
  AttachmentsFolderPath: string;
  ExtensionsFolderPath: string;
  PrintId: string;
}

export class PeriodCategory {
  AbsoluteEntry: number;
  BeginningofFinancialYear: Date;
  PeriodCategory: string;
  SubPeriodType: SAPB1.BoSubPeriodTypeEnum;
  NumberOfPeriods: number;
  PeriodName: string;
  DebitorsFollowUpAccount: string;
  AccountforOutgoingChecks: string;
  AccountforCashReceipt: string;
  CustomersDeductionatSource: string;
  CommissionAccountDefault: string;
  PurchaseTax: string;
  ForeignAccountsReceivables: string;
  CreditorsFollowUpAccount: string;
  OutgoingChecksAccount: string;
  OutgoingCashAccount: string;
  AccountforCreditMemoPayme: string;
  InputTaxAccount: string;
  TaxDefinition: string;
  WithholodingTax: string;
  OpeningBalancesAccount: string;
  DefaultSaleAccount: string;
  TaxExemptRevenuesDefault: string;
  ExpenseAccountDefault: string;
  RevenuesAccountForeign: string;
  SalesRevenueEU: string;
  ExpensesAccountForeign: string;
  RateDifferencesDefaultAcc: string;
  DecreaseGLAcc: string;
  ReconciliationDifference: string;
  AcountforOpeningWHBalance: string;
  APCashDiscountAccount: string;
  APLossCashDiscountAccount: string;
  APLossRealizedExchangeDif: string;
  ARCashDiscountAccount: string;
  ARLossRealizedExchangeDi: string;
  RoundingAccount: string;
  APGainRealizedExchngeDif: string;
  ARGainRealizedExchngeDif: string;
  IncreaseGLAccount: string;
  SalesReturns: string;
  CostOfGoodsSold: string;
  AllocationAcc: string;
  VarianceAcc: string;
  PriceDifferenceAccount: string;
  CustomerDownPaymentsAccount: string;
  VendorDownPaymentsAccount: string;
  BillofExchangeAccountsRece: string;
  CustBillofExchangeonC: string;
  CustomerBillofExchangePres: string;
  CustomerBillofExchngeDisc: string;
  CustomerUnpaidBoE: string;
  BoEAccountsPayable: string;
  BoEAccountsPayable2: string;
  CustomerDoubtfulDebtsAcct: string;
  VendorDoubtfulDebtsAcct: string;
  PurchaseAccount: string;
  PurchaseReturnAccount: string;
  PurchaseOffsetAccount: string;
  EOYControlAccount: string;
  ExchangeRateDifferencesAcct: string;
  GoodsClearingAcc: string;
  ExpenseClearingAccount: string;
  ExpenseOffsetAccount: string;
  CostofSaleRevaluationAcct: string;
  RepomoAccount: string;
  WIPMaterialVarianceAccount: string;
  DownPaymentVATAcctSale: string;
  DownPaymentVATAcctPurch: string;
  DownPaymentSClearingAcct: string;
  DownPaymentPClearingAcct: string;
  ExpenseVarianceAccount: string;
  CostofSaleRevOffsetAcct: string;
  EUExpenseAccount: string;
  StockAccount: string;
  InventoryOffsetIncrease: string;
  InventoryOffsetDecrease: string;
  VendorAssetsAccount: string;
  StockRevaluationAccount: string;
  StockRevaluationOffsetAcct: string;
  WIPMaterialAccount: string;
  InvoicePaymentBP: string;
  GLRevaluationOffsetAccount: string;
  OverpaymentsAPAccount: string;
  UnderpaymentsAPAccount: string;
  OverpaymentsARAccount: string;
  UnderpaymentsARAccount: string;
  PurchaseCreditAcc: string;
  EUPurchaseCreditAcc: string;
  ForeignPurchaseCreditAcc: string;
  SalesCreditAcc: string;
  SalesCreditEUAcc: string;
  ExemptedCredits: string;
  SalesCreditForeignAcc: string;
  FromPostingDate: Date;
  ToPostingDate: Date;
  FromDueDate: Date;
  ToDueDate: Date;
  FromDocumentDate: Date;
  ToDocumentDate: Date;
  OutgoingTaxAccount: string;
  NegativeInventoryAdjustmentAccount: string;
  FinancialYear: number;
  SelfInvoiceRevenueAccount: string;
  SelfInvoiceExpenseAccount: string;
  StockInTransitAccount: string;
  SalesDownPaymentInterimAccount: string;
  PurchaseDownPaymentInterimAccount: string;
  EUAccountsReceivable: string;
  EUAccountsPayable: string;
  WipOffsetProfitAndLossAccount: string;
  InventoryOffsetProfitAndLossAccount: string;
  DunningInterestAccount: string;
  DunningFeeAccount: string;
  ARGainRealizedConversionDiff: string;
  ARLossRealizedConversionDiff: string;
  APGainRealizedConversionDiff: string;
  APLossRealizedConversionDiff: string;
  GLGainRealizedConversionDiff: string;
  GLLossRealizedConversionDiff: string;
  ARExRateInterim: string;
  APExRateInterim: string;
  ARCashDiscountInterim: string;
  APCashDiscountInterim: string;
  WIPMappingCollection: SAPB1.WIPMapping[];
}

export class WIPMapping {
  AbsoluteEntry: number;
  LineNumber: number;
  AccountFrom: string;
  AccountTo: string;
}

export class PeriodCategoryParams {
  AbsoluteEntry: number;
}

export class FinancePeriod {
  AbsoluteEntry: number;
  PeriodCode: string;
  PeriodName: string;
  PostingDateFrom: Date;
  PostingDateTo: Date;
  ValueDateFrom: Date;
  ValueDateTo: Date;
  TaxDateFrom: Date;
  TaxDateTo: Date;
  ActiveforFeed: SAPB1.BoYesNoEnum;
  Locked: SAPB1.BoYesNoEnum;
  AdditionalSubPeriods: SAPB1.BoYesNoEnum;
  PeriodIndicator: string;
  SubNum: number;
  PeriodStatus: SAPB1.PeriodStatusEnum;
}

export class FinancePeriodParams {
  AbsoluteEntry: number;
  PeriodIndicator: string;
}

export class RecordsetParams {
  Query: string;
}

export class FeatureStatus {
  FeatureID: string;
  Blocked: SAPB1.BoYesNoEnum;
}

export class TableInfo {
  Name: string;
}

export class Blob {
  Content: string;
}

export class BlobParams {
  Table: string;
  Field: string;
  FileName: string;
  BlobTableKeySegments: SAPB1.BlobTableKeySegment[];
}

export class BlobTableKeySegment {
  Name: string;
  Value: string;
}

export class UpdateUserLicenseParams {
  UserName: string;
  LicenseType: SAPB1.LicenseTypeEnum;
  LicenseUpdateType: SAPB1.LicenseUpdateTypeEnum;
}

export class DecimalData {
  Value: number;
  Context: SAPB1.RoundingContextEnum;
  Currency: string;
}

export class RoundedData {
  Value: number;
}

export class MaterialRevaluationFIFO {
  Layers: SAPB1.Layer[];
}

export class Layer {
  TransactionSequenceNum: number;
  LayerID: number;
  DocNumber: string;
  DocType: SAPB1.TransTypesEnum;
  EntryDate: Date;
  CurrentCost: number;
  OpenQty: number;
}

export class MaterialRevaluationFIFOParams {
  ItemCode: string;
  LocationType: string;
  LocationCode: string;
  ShowIssuedLayers: SAPB1.BoYesNoEnum;
}

export class SalesStageParams {
  SequenceNo: number;
}

export class ActivityTypeParams {
  Code: number;
}

export class ActivityLocationParams {
  Code: number;
}

export class OriginalItem {
  ItemCode: string;
  ItemName: string;
  AlternativeItems: SAPB1.AlternativeItem[];
}

export class AlternativeItem {
  AlternativeItemCode: string;
  MatchFactor: number;
  Remarks: string;
}

export class OriginalItemParams {
  ItemCode: string;
  ItemName: string;
}

export class DashboardPackageParams {
  AbsEntry: number;
}

export class DashboardPackageImportParams {
  PackageFilePath: string;
  ImportQueries: SAPB1.BoYesNoEnum;
  ForceOverwriteQuery: SAPB1.BoYesNoEnum;
  ForceOverwritePackage: SAPB1.BoYesNoEnum;
}

export class GTIParams {
  InboundFile: string;
  AbsEntry: number;
}

export class AdditionalExpensesParams {
  ExpensCode: number;
}

export class SalesTaxAuthoritiesTypeParams {
  Numerator: number;
}

export class SalesTaxCodeParams {
  Code: string;
}

export class QueryCategoryParams {
  Code: number;
}

export class FactoringIndicatorParams {
  IndicatorCode: string;
}

export class AccountSegmentationCategoryParams {
  SegmentID: number;
  Code: string;
}

export class Forms1099Params {
  FormCode: number;
}

export class ECMCodeParams {
  AbsEntry: number;
}

export class ECMActionStatusData {
  AbsEntry: number;
  ActStatus: SAPB1.EcmActionStatusEnum;
  ReportID: string;
  ReceivDate: Date;
  ActMessage: string;
}

export class FixedAssetValues {
  TransactionType: SAPB1.AssetTransactionTypeEnum;
  AcquisitionCost: number;
  Quantity: number;
  DepreciationValue: number;
  NetBookValue: number;
  OrdinaryDepreciationValue: number;
  UnplanedDepreciationValue: number;
  SpecialDepreciationValue: number;
  WriteUp: number;
  Appreciation: number;
}

export class FixedAssetValuesParams {
  ItemCode: string;
  FiscalYear: string;
  DepreciationArea: string;
}

export class FixedAssetEndBalance {
  HistoricalAPC: number;
  AcquisitionCost: number;
  NetBookValue: number;
  HistoricalNBV: number;
  OrdinaryDepreciationValue: number;
  UnplanedDepreciationValue: number;
  SpecialDepreciationValue: number;
  WriteUp: number;
  SalvageValue: number;
  Quantity: number;
}

export class PaymentBPCode {
  BPCode: string;
  Date: Date;
}

export class PaymentInvoiceEntry {
  DocType: SAPB1.PaymentInvoiceTypeEnum;
  DocEntry: number;
  InstallmentId: number;
}

export class PaymentAmountParams {
  DocType: SAPB1.PaymentInvoiceTypeEnum;
  DocEntry: number;
  InstallmentId: number;
  CashDiscountPercentage: number;
  CashDiscountAmount: number;
  CashDiscountAmountFC: number;
  CashDiscountAmountSC: number;
  TotalPaymentAmount: number;
  TotalPaymentAmountFC: number;
  TotalPaymentAmountSC: number;
}

export class BPPriorityParams {
  Priority: number;
}

export class DunningLetterParams {
  RowNumber: number;
}

export class ServiceTaxPostingParams {
  DocEntry: number;
}

export class UserTableParams {
  TableType: string;
  TableName: string;
  TableDescription: string;
  Browser: string;
  ArchiveDateField: string;
  Archivable: string;
}

export class UserQueryParams {
  InternalKey: number;
  QueryCategory: number;
}

export class WorkflowTaskCompleteParams {
  TaskID: number;
  Note: string;
  TriggerParams: string;
}

export class WorkflowApprovalTaskListParams {
  Status: string;
}

export class WorkflowTask {
  InstanceID: number;
  TaskID: number;
  TemplateID: string;
  TemplateName: string;
  Description: string;
  Operation: string;
  Type: string;
  Owner: string;
  Priority: number;
  Status: string;
  Name: string;
  WorkflowTaskInputObjectCollection: SAPB1.WorkflowTaskInputObject[];
  WorkflowTaskNoteCollection: SAPB1.WorkflowTaskNote[];
  WorkflowTaskOutputObjectCollection: SAPB1.WorkflowTaskOutputObject[];
}

export class WorkflowTaskInputObject {
  TaskID: number;
  LineId: number;
  Type: string;
  Key: string;
  SubType: string;
  Detail: string;
}

export class WorkflowTaskNote {
  TaskID: number;
  LineId: number;
  Note: string;
  Creator: string;
  NoteDate: Date;
}

export class WorkflowTaskOutputObject {
  TaskID: number;
  LineId: string;
  Type: string;
  Key: string;
  SubType: string;
}

export class ContractTemplateParams {
  TemplateName: string;
}

export class EcmActionParams {
  ActionID: number;
}

export class EcmActionDocParams {
  Protocol: string;
  SourceType: string;
  SourceObject: number;
}

export class EcmAction {
  ActionID: number;
  Protocol: string;
  Type: SAPB1.EcmActionTypeEnum;
  Description: string;
  Status: SAPB1.EcmActionStatusEnum;
  Message: string;
  Environment: number;
  BusinessPlace: number;
  Submits: number;
  ObjectID: string;
  ReportID: string;
  SourceType: string;
  SourceObject: number;
  AssignedID: string;
  DocumentBatch: string;
  DocumentBatchLine: number;
  PeriodType: SAPB1.EcmActionPeriodTypeEnum;
  PeriodNumber: number;
  PeriodYear: number;
  PeriodDateFrom: Date;
  PeriodDateTo: Date;
  IsRemoved: SAPB1.BoYesNoEnum;
  IsCanceled: SAPB1.BoYesNoEnum;
}

export class EcmActionLogParams {
  ActionID: number;
  LogID: number;
}

export class EcmActionLog {
  ActionID: number;
  LogID: number;
  Type: SAPB1.EcmActionLogTypeEnum;
  Message: string;
  Data: string;
  LogDate: Date;
  LogTime: number;
}

export class CustomerEquipmentCardParams {
  EquipmentCardNum: number;
}

export class BOELineParams {
  BOEKey: number;
}

export class KnowledgeBaseSolutionParams {
  SolutionCode: number;
}

export class UserKeyParams {
  TableName: string;
  KeyIndex: number;
}

export class QueueParams {
  QueueID: string;
}

export class TerritoryParams {
  TerritoryID: number;
}

export class IndustryParams {
  IndustryCode: number;
}

export class PackagesTypeParams {
  Code: number;
}

export class UserObjectsMDParams {
  Code: string;
}

export class TeamParams {
  TeamID: number;
}

export class RelationshipParams {
  RelationshipCode: number;
}

export class ActivityStatusParams {
  StatusId: number;
}

export class ChooseFromListParams {
  ObjectName: string;
  FieldIndex: number;
}

export class FormattedSearchParams {
  Index: number;
}

export class Attachment2Params {
  AbsoluteEntry: number;
}

export class UserLanguageParams {
  Code: number;
}

export class MultiLanguageTranslationParams {
  Numerator: number;
}

export class HouseBankAccountParams {
  AbsoluteEntry: number;
}

export class DefaultReportParams {
  ReportCode: string;
  LayoutCode: string;
  UserID: number;
  CardCode: string;
}

export class ReportParams {
  ReportCode: string;
  UserID: number;
  CardCode: string;
}

export class ReportLayoutPrintParams {
  LayoutCode: string;
  DocEntry: number;
}

export class ReportInputParams {
  ReportLayoutMenuID: string;
}

export class ReportLayoutParams {
  LayoutCode: string;
  LayoutName: string;
  Category: SAPB1.ReportLayoutCategoryEnum;
}

export class ReportLayout {
  Name: string;
  Author: string;
  Remarks: string;
  Width: number;
  Height: number;
  LeftMargin: number;
  RightMargin: number;
  TopMargin: number;
  BottomMargin: number;
  Editable: SAPB1.BoYesNoEnum;
  PaperSize: string;
  Orientation: SAPB1.BoOrientationEnum;
  GridSize: number;
  GridType: SAPB1.BoGridTypeEnum;
  ShowGrid: SAPB1.BoYesNoEnum;
  SnapToGrid: SAPB1.BoYesNoEnum;
  Picture: string;
  TypeCode: string;
  ForeignLanguageReport: SAPB1.BoYesNoEnum;
  Sortable: SAPB1.BoYesNoEnum;
  LeaderReport: string;
  FollowUpReport: string;
  ConvertFontInPrintPreview: SAPB1.BoYesNoEnum;
  PreviewPrintingFont: string;
  ChangeFontSizeInPreview: number;
  ConvertFontForEMail: SAPB1.BoYesNoEnum;
  EMailFont: string;
  ChangeFontSizeForEMail: number;
  Query: string;
  QueryType: SAPB1.BoQueryTypeEnum;
  language: number;
  ImpExpObjCode: number;
  ExtensionName: string;
  ExtensionErrorAction: SAPB1.BoExtensionErrorActionEnum;
  RepetitiveAreasNumber: number;
  AllignFooterToBottom: SAPB1.BoYesNoEnum;
  LayoutCode: string;
  Category: SAPB1.ReportLayoutCategoryEnum;
  Printer: string;
  PrinterFirstPage: string;
  NumberOfCopies: number;
  Localization: string;
  UseFirstPrinter: SAPB1.BoYesNoEnum;
  B1Version: string;
  CRVersion: string;
  TypeDetail: string;
  ReportLayoutItems: SAPB1.ReportLayoutItem[];
  ReportLayout_TranslationLines: SAPB1.ReportLayout_TranslationLine[];
}

export class ReportLayoutItem {
  FieldIdentifier: string;
  ParentType: number;
  Type: SAPB1.BoReportLayoutItemTypeEnum;
  Visible: SAPB1.BoYesNoEnum;
  SuppressZeros: SAPB1.BoYesNoEnum;
  Left: number;
  Top: number;
  Width: number;
  Height: number;
  LeftMargin: number;
  RightMargin: number;
  TopMargin: number;
  BottomMargin: number;
  LeftBorderLineThickness: number;
  RightBorderLineThickness: number;
  TopBorderLineThickness: number;
  BottomBorderLineThickness: number;
  ShadowThickness: number;
  BackgroundRed: number;
  BackgroundGreen: number;
  BackgroundBlue: number;
  TextRed: number;
  TextGreen: number;
  TextBlue: number;
  HighlightRed: number;
  HighlightGreen: number;
  HighlightBlue: number;
  BorderRed: number;
  BorderGreen: number;
  BorderBlue: number;
  GroupNumber: number;
  FontName: string;
  FontSize: number;
  TextStyle: number;
  HorizontalAlignment: SAPB1.BoHorizontalAlignmentEnum;
  LineBreak: SAPB1.BoLineBreakEnum;
  PictureSize: SAPB1.BoPictureSizeEnum;
  DataSource: SAPB1.BoDataSourceEnum;
  String: string;
  VariableNumber: number;
  TableName: string;
  FieldName: string;
  DisplayDescription: SAPB1.BoYesNoEnum;
  Editable: number;
  ItemNumber: number;
  VerticalAlignment: SAPB1.BoVerticalAlignmentEnum;
  SortLevel: number;
  ReverseSort: SAPB1.BoYesNoEnum;
  SortType: SAPB1.BoSortTypeEnum;
  Unique: SAPB1.BoYesNoEnum;
  SetAsGroup: SAPB1.BoYesNoEnum;
  NewPage: SAPB1.BoYesNoEnum;
  PrintAsBarCode: SAPB1.BoYesNoEnum;
  LinkToField: string;
  BarCodeStandard: SAPB1.BoBarCodeStandardEnum;
  DisplayTotalAsAWord: SAPB1.BoYesNoEnum;
  BlockFontChange: SAPB1.BoYesNoEnum;
  ParentIndex: number;
  ItemIndex: number;
  StringLength: number;
  StringFiller: string;
  RelateToField: string;
  NextSegmentItemNumber: string;
  HeightAdjustments: SAPB1.BoYesNoEnum;
  DuplicateRepetitiveArea: SAPB1.BoYesNoEnum;
  NumberOfLinesInRepetitiveArea: number;
  DistanceToRepetitiveDuplicate: number;
  HideRepetitiveAreaIfEmpty: SAPB1.BoYesNoEnum;
  DisplayRepetitiveAreaFooterOnAllPages: SAPB1.BoYesNoEnum;
}

export class ReportLayout_TranslationLine {
  DocEntry: string;
  LineNumber: number;
  DocName: string;
  LanguageCode: number;
  CreateDate: Date;
  UpdateDate: Date;
  CreateTime: number;
  UpdateTime: number;
}

export class PMC_SubprojectTypeData {
  SubprojectTypeID: number;
  SubprojectTypeName: string;
}

export class PMC_StageTypeData {
  StageID: number;
  StageName: string;
  StageDescription: string;
}

export class PMC_AreaData {
  AreaID: number;
  AreaName: string;
}

export class PMC_PriorityData {
  PriorityID: number;
  PriorityName: string;
}

export class PMC_ActivityData {
  ActivityID: number;
  ActivityType: string;
  LaborItem: string;
  IsChargeable: SAPB1.BoYesNoEnum;
  IsAbsence: SAPB1.BoYesNoEnum;
}

export class PMC_TaskData {
  TaskID: number;
  TaskName: string;
}

export class ExpenseTypeData {
  ExpenseType: string;
  ExpenseName: string;
  ExpenseAccount: string;
  PaidByCompany: SAPB1.BoYesNoEnum;
  VatGroup: string;
}

export class ExpenseTypeParams {
  ExpenseType: string;
}

export class LocalEraParams {
  Code: string;
}

export class VM_B1ValuesData {
  AbsEntry: number;
  ObjectId: number;
  ObjectAbsEntry: string;
  VM_ThirdPartyValuesCollection: SAPB1.VM_ThirdPartyValuesData[];
}

export class VM_ThirdPartyValuesData {
  AbsEntry: number;
  LineId: number;
  ThirdPartySystemId: number;
  ThirdPartyValue: string;
}

export class ValueMappingParams {
  AbsEntry: number;
}

export class ValueMappingCommunicationData {
  AbsEntry: number;
  ThirdPartySystemId: number;
  ObjectId: number;
  CommunicationType: SAPB1.VMCommunicationTypeEnum;
  StartDate: Date;
  StartTime: number;
  EndDate: Date;
  EndTime: number;
  Message: string;
  Status: SAPB1.VMCommunicationStatusEnum;
}

export class ValueMappingCommunicationParams {
  AbsEntry: number;
}

export class ExternalReconciliation {
  ReconciliationAccountType: SAPB1.ReconciliationAccountTypeEnum;
  AccountCode: string;
  ReconciliationNo: number;
  Amount: number;
  CurrencyType: string;
  ReconciliationType: string;
  ReconciliationDate: Date;
  CreationDate: Date;
  ReconciliationJournalEntryLines: SAPB1.ReconciliationJournalEntryLine[];
  ReconciliationBankStatementLines: SAPB1.ReconciliationBankStatementLine[];
}

export class ReconciliationJournalEntryLine {
  TransactionNumber: number;
  LineNumber: number;
  PostingDate: Date;
  DueDate: Date;
  Ref1: string;
  Ref2: string;
  Ref3: string;
  DebitAmount: number;
  CreditAmount: number;
  Details: string;
}

export class ReconciliationBankStatementLine {
  BankStatementAccountCode: string;
  Sequence: number;
  Date: Date;
  Ref1: string;
  Amount: number;
  Details: string;
}

export class ExternalReconciliationParams {
  AccountCode: string;
  ReconciliationNo: number;
}

export class ExternalReconciliationFilterParams {
  AccountCodeFrom: string;
  AccountCodeTo: string;
  ReconciliationDateFrom: Date;
  ReconciliationDateTo: Date;
  ReconciliationNoFrom: number;
  ReconciliationNoTo: number;
  ReconciliationAccountType: SAPB1.ReconciliationAccountTypeEnum;
}

export class CheckLineParams {
  CheckKey: number;
}

export class TaxInvoiceParams {
  DocEntry: number;
}

export class BankParams {
  AbsoluteEntry: number;
}

export class ContactParams {
  ContactCode: number;
}

export class Series {
  Document: string;
  DocumentSubType: string;
  InitialNumber: number;
  LastNumber: number;
  NextNumber: number;
  Prefix: string;
  Suffix: string;
  Remarks: string;
  GroupCode: SAPB1.BoSeriesGroupEnum;
  Locked: SAPB1.BoYesNoEnum;
  PeriodIndicator: string;
  Name: string;
  Series: number;
  IsDigitalSeries: SAPB1.BoYesNoEnum;
  DigitNumber: number;
  SeriesType: SAPB1.BoSeriesTypeEnum;
  BPLID: number;
  ATDocumentType: string;
  IsElectronicCommEnabled: SAPB1.BoYesNoEnum;
}

export class SeriesParams {
  Series: number;
}

export class DocumentSeriesParams {
  Document: string;
  DocumentSubType: string;
  Series: number;
}

export class DocumentSeriesUserParams {
  Document: string;
  DocumentSubType: string;
  Series: number;
  User: number;
}

export class DocumentTypeParams {
  Document: string;
  DocumentSubType: string;
}

export class DocumentChangeMenuName {
  Document: string;
  DocumentSubType: string;
  ChangedMenuName: string;
}

export class ElectronicSeries {
  ElectronicSeries: number;
  Series: number;
  Name: string;
  InitialNumber: string;
  NextNumber: string;
  LastNumber: string;
  Prefix: string;
  ApprovalYear: number;
  ApprovalNumber: number;
  Remarks: string;
}

export class ElectronicSeriesParams {
  ElectronicSeries: number;
}

export class DefaultElectronicSeriesParams {
  Series: number;
  ElectronicSeries: number;
}

export class CreditCardParams {
  CreditCardCode: number;
}

export class CurrenciesParams {
  Code: string;
}

export class PaymentTermsTypeParams {
  GroupNumber: number;
}

export class BankPageParams {
  AccountCode: string;
  Sequence: number;
}

export class ManufacturerParams {
  Code: number;
}

export class LandedCostsCodeParams {
  Code: string;
}

export class ShippingTypeParams {
  Code: number;
}

export class VatGroupParams {
  Code: string;
}

export class LengthMeasureParams {
  UnitCode: number;
}

export class WeightMeasureParams {
  UnitCode: number;
}

export class CustomsGroupParams {
  Code: number;
  PortAddress: string;
  PortState: string;
}

export class ChecksforPaymentParams {
  CheckKey: number;
}

export class WarehouseParams {
  WarehouseCode: string;
}

export class CommissionGroupParams {
  CommissionGroupCode: number;
}

export class WorkOrderParams {
  OrderNum: number;
}

export class CreditPaymentMethodParams {
  PaymentMethodCode: number;
}

export class CreditCardPaymentParams {
  DueDateCode: string;
}

export class CreditLineParams {
  AbsId: number;
}

export class AlternateCatNumParams {
  ItemCode: string;
  CardCode: string;
  Substitute: string;
}

export class BudgetDistributionParams {
  DivisionCode: number;
}

export class ItemPropertyParams {
  Number: number;
}

export class BudgetScenarioParams {
  Numerator: number;
}

export class HttpCommandEnum {
static POST = "POST";
static GET = "GET";
static DELETE = "DELETE";
static PUT = "PUT";
static PATCH = "PATCH";
}
export class B1ObjActionEnum {
static LOGIN = "Login";
static LOGOUT = "Logout";
static ADD = "Add";
static UPDATE = "Update";
static GET = "Get";
static DELETE = "Delete";
static ACTION = "Action";
}
export class LoginInfo {
  CompanyDB: string;
  UserName: string;
  Password: string;
}

export class SBOBobService{
// Return type: string
static Format_MoneyToString (InMoney: number,InPrecision: string, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.ACTION, "SBOBobService_Format_MoneyToString", sessionId, routeId, [InMoney,InPrecision]);
}
// Return type: number
static GetIndexRate (Index: string,Date: string, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.ACTION, "SBOBobService_GetIndexRate", sessionId, routeId, [Index,Date]);
}
// Return type: string
static GetLocalCurrency ( sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.ACTION, "SBOBobService_GetLocalCurrency", sessionId, routeId, [null]);
}
// Return type: number
static GetCurrencyRate (Currency: string,Date: string, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.ACTION, "SBOBobService_GetCurrencyRate", sessionId, routeId, [Currency,Date]);
}
// Return type: string
static GetSystemCurrency ( sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.ACTION, "SBOBobService_GetSystemCurrency", sessionId, routeId, [null]);
}
// Return type: string
static GetDueDate (CardCode: string,RefDate: string, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.ACTION, "SBOBobService_GetDueDate", sessionId, routeId, [CardCode,RefDate]);
}
// Return type: number
static GetSystemPermission (UserCode: string,PermissionID: string, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.ACTION, "SBOBobService_GetSystemPermission", sessionId, routeId, [UserCode,PermissionID]);
}
}
export class CycleCountDeterminationsService{
// Return type: SAPB1.CycleCountDeterminationParams[]
static GetList ( sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.ACTION, "CycleCountDeterminationsService_GetList", sessionId, routeId, [null]);
}
}
export class DistributionRulesService{
// Return type: SAPB1.DistributionRuleParams[]
static GetDistributionRuleList ( sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.ACTION, "DistributionRulesService_GetDistributionRuleList", sessionId, routeId, [null]);
}
}
export class PickListsService{
// Return type: void
static Close (PickList: SAPB1.PickList, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.ACTION, "PickListsService_Close", sessionId, routeId, [PickList]);
}
// Return type: void
static UpdateReleasedAllocation (PickList: SAPB1.PickList, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.ACTION, "PickListsService_UpdateReleasedAllocation", sessionId, routeId, [PickList]);
}
}
export class InventoryGenExitService{
// Return type: SAPB1.Document
static GetApprovalTemplates (Document: SAPB1.Document, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.ACTION, "InventoryGenExitService_GetApprovalTemplates", sessionId, routeId, [Document]);
}
// Return type: SAPB1.Document
static Preview (Document: SAPB1.Document, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.ACTION, "InventoryGenExitService_Preview", sessionId, routeId, [Document]);
}
// Return type: void
static HandleApprovalRequest ( sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.ACTION, "InventoryGenExitService_HandleApprovalRequest", sessionId, routeId, [null]);
}
}
export class AssetDepreciationGroupsService{
// Return type: SAPB1.AssetDepreciationGroupParams[]
static GetList ( sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.ACTION, "AssetDepreciationGroupsService_GetList", sessionId, routeId, [null]);
}
}
export class GLAccountAdvancedRulesService{
// Return type: SAPB1.GLAccountAdvancedRuleParams[]
static GetList ( sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.ACTION, "GLAccountAdvancedRulesService_GetList", sessionId, routeId, [null]);
}
}
export class CorrectionPurchaseInvoiceService{
// Return type: SAPB1.Document
static GetApprovalTemplates (Document: SAPB1.Document, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.ACTION, "CorrectionPurchaseInvoiceService_GetApprovalTemplates", sessionId, routeId, [Document]);
}
// Return type: SAPB1.Document
static Preview (Document: SAPB1.Document, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.ACTION, "CorrectionPurchaseInvoiceService_Preview", sessionId, routeId, [Document]);
}
// Return type: void
static HandleApprovalRequest ( sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.ACTION, "CorrectionPurchaseInvoiceService_HandleApprovalRequest", sessionId, routeId, [null]);
}
}
export class AccountCategoryService{
// Return type: SAPB1.AccountCategoryParams[]
static GetCategoryList ( sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.ACTION, "AccountCategoryService_GetCategoryList", sessionId, routeId, [null]);
}
}
export class PurchaseDownPaymentsService{
// Return type: SAPB1.Document
static GetApprovalTemplates (Document: SAPB1.Document, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.ACTION, "PurchaseDownPaymentsService_GetApprovalTemplates", sessionId, routeId, [Document]);
}
// Return type: SAPB1.Document
static Preview (Document: SAPB1.Document, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.ACTION, "PurchaseDownPaymentsService_Preview", sessionId, routeId, [Document]);
}
// Return type: void
static HandleApprovalRequest ( sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.ACTION, "PurchaseDownPaymentsService_HandleApprovalRequest", sessionId, routeId, [null]);
}
}
export class RecurringTransactionService{
// Return type: SAPB1.RclRecurringTransaction[]
static GetAvailableRecurringTransactions ( sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.ACTION, "RecurringTransactionService_GetAvailableRecurringTransactions", sessionId, routeId, [null]);
}
// Return type: SAPB1.RclRecurringTransaction[]
static ExecuteRecurringTransactions (RclRecurringTransactionParamsCollection: SAPB1.RclRecurringTransactionParams[],RclRecurringExecutionParams: SAPB1.RclRecurringExecutionParams, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.ACTION, "RecurringTransactionService_ExecuteRecurringTransactions", sessionId, routeId, [RclRecurringTransactionParamsCollection,RclRecurringExecutionParams]);
}
}
export class ApprovalRequestsService{
// Return type: SAPB1.ApprovalRequestParams[]
static GetApprovalRequestList ( sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.ACTION, "ApprovalRequestsService_GetApprovalRequestList", sessionId, routeId, [null]);
}
// Return type: SAPB1.ApprovalRequestParams[]
static GetOpenApprovalRequestList ( sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.ACTION, "ApprovalRequestsService_GetOpenApprovalRequestList", sessionId, routeId, [null]);
}
// Return type: SAPB1.ApprovalRequestParams[]
static GetAllApprovalRequestsList ( sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.ACTION, "ApprovalRequestsService_GetAllApprovalRequestsList", sessionId, routeId, [null]);
}
}
export class DimensionsService{
// Return type: SAPB1.DimensionParams[]
static GetDimensionList ( sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.ACTION, "DimensionsService_GetDimensionList", sessionId, routeId, [null]);
}
}
export class DepreciationTypesService{
// Return type: SAPB1.DepreciationTypeParams[]
static GetList ( sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.ACTION, "DepreciationTypesService_GetList", sessionId, routeId, [null]);
}
}
export class ExternalReconciliationsService{
// Return type: void
static Reconcile (ExternalReconciliation: SAPB1.ExternalReconciliation, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.ACTION, "ExternalReconciliationsService_Reconcile", sessionId, routeId, [ExternalReconciliation]);
}
// Return type: SAPB1.ExternalReconciliation
static GetReconciliation (ExternalReconciliationParams: SAPB1.ExternalReconciliationParams, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.ACTION, "ExternalReconciliationsService_GetReconciliation", sessionId, routeId, [ExternalReconciliationParams]);
}
// Return type: void
static CancelReconciliation (ExternalReconciliationParams: SAPB1.ExternalReconciliationParams, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.ACTION, "ExternalReconciliationsService_CancelReconciliation", sessionId, routeId, [ExternalReconciliationParams]);
}
// Return type: SAPB1.ExternalReconciliationParams[]
static GetReconciliationList (ExternalReconciliationFilterParams: SAPB1.ExternalReconciliationFilterParams, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.ACTION, "ExternalReconciliationsService_GetReconciliationList", sessionId, routeId, [ExternalReconciliationFilterParams]);
}
}
export class AccountsService{
// Return type: void
static CreateOpenBalance (OpenningBalanceAccount: SAPB1.OpenningBalanceAccount,GLAccounts: SAPB1.GLAccount[], sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.ACTION, "AccountsService_CreateOpenBalance", sessionId, routeId, [OpenningBalanceAccount,GLAccounts]);
}
}
export class JournalEntryDocumentTypeService{
// Return type: SAPB1.JournalEntryDocumentTypeParams[]
static GetList ( sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.ACTION, "JournalEntryDocumentTypeService_GetList", sessionId, routeId, [null]);
}
}
export class FAAccountDeterminationsService{
// Return type: SAPB1.FAAccountDeterminationParams[]
static GetList ( sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.ACTION, "FAAccountDeterminationsService_GetList", sessionId, routeId, [null]);
}
}
export class ResourceGroupsService{
// Return type: SAPB1.ResourceGroupParams[]
static GetList ( sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.ACTION, "ResourceGroupsService_GetList", sessionId, routeId, [null]);
}
}
export class DunningTermsService{
// Return type: SAPB1.DunningTermParams[]
static GetDunningTermList ( sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.ACTION, "DunningTermsService_GetDunningTermList", sessionId, routeId, [null]);
}
}
export class StockTransferService{
// Return type: SAPB1.StockTransfer
static GetApprovalTemplates (StockTransfer: SAPB1.StockTransfer, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.ACTION, "StockTransferService_GetApprovalTemplates", sessionId, routeId, [StockTransfer]);
}
// Return type: void
static HandleApprovalRequest ( sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.ACTION, "StockTransferService_HandleApprovalRequest", sessionId, routeId, [null]);
}
}
export class BankStatementsService{
// Return type: SAPB1.BankStatementParams[]
static GetBankStatementList (BankStatementsFilter: SAPB1.BankStatementsFilter, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.ACTION, "BankStatementsService_GetBankStatementList", sessionId, routeId, [BankStatementsFilter]);
}
}
export class ReportLayoutsService{
// Return type: void
static SetDefaultReport (DefaultReportParams: SAPB1.DefaultReportParams, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.ACTION, "ReportLayoutsService_SetDefaultReport", sessionId, routeId, [DefaultReportParams]);
}
// Return type: SAPB1.DefaultReportParams
static GetDefaultReport (ReportParams: SAPB1.ReportParams, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.ACTION, "ReportLayoutsService_GetDefaultReport", sessionId, routeId, [ReportParams]);
}
// Return type: SAPB1.ReportLayoutParams
static AddReportLayout (ReportLayout: SAPB1.ReportLayout, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.ACTION, "ReportLayoutsService_AddReportLayout", sessionId, routeId, [ReportLayout]);
}
// Return type: void
static UpdatePrinterSettings (ReportLayout: SAPB1.ReportLayout, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.ACTION, "ReportLayoutsService_UpdatePrinterSettings", sessionId, routeId, [ReportLayout]);
}
// Return type: void
static DeleteReportLayout (ReportLayoutParams: SAPB1.ReportLayoutParams, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.ACTION, "ReportLayoutsService_DeleteReportLayout", sessionId, routeId, [ReportLayoutParams]);
}
// Return type: SAPB1.ReportLayout
static GetReportLayout (ReportLayoutParams: SAPB1.ReportLayoutParams, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.ACTION, "ReportLayoutsService_GetReportLayout", sessionId, routeId, [ReportLayoutParams]);
}
// Return type: SAPB1.ReportLayout
static GetDefaultReportLayout (ReportParams: SAPB1.ReportParams, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.ACTION, "ReportLayoutsService_GetDefaultReportLayout", sessionId, routeId, [ReportParams]);
}
// Return type: SAPB1.ReportLayoutParams[]
static GetReportLayoutList (ReportParams: SAPB1.ReportParams, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.ACTION, "ReportLayoutsService_GetReportLayoutList", sessionId, routeId, [ReportParams]);
}
// Return type: void
static UpdateLanguageReport (ReportLayout: SAPB1.ReportLayout, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.ACTION, "ReportLayoutsService_UpdateLanguageReport", sessionId, routeId, [ReportLayout]);
}
// Return type: SAPB1.ReportLayoutParams
static AddReportLayoutToMenu (ReportLayout: SAPB1.ReportLayout,ReportInputParams: SAPB1.ReportInputParams, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.ACTION, "ReportLayoutsService_AddReportLayoutToMenu", sessionId, routeId, [ReportLayout,ReportInputParams]);
}
// Return type: void
static DeleteReportLayoutAndMenu (ReportLayoutParams: SAPB1.ReportLayoutParams, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.ACTION, "ReportLayoutsService_DeleteReportLayoutAndMenu", sessionId, routeId, [ReportLayoutParams]);
}
// Return type: void
static Print (ReportLayoutPrintParams: SAPB1.ReportLayoutPrintParams, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.ACTION, "ReportLayoutsService_Print", sessionId, routeId, [ReportLayoutPrintParams]);
}
}
export class PurchaseRequestService{
// Return type: SAPB1.Document
static GetApprovalTemplates (Document: SAPB1.Document, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.ACTION, "PurchaseRequestService_GetApprovalTemplates", sessionId, routeId, [Document]);
}
// Return type: SAPB1.Document
static Preview (Document: SAPB1.Document, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.ACTION, "PurchaseRequestService_Preview", sessionId, routeId, [Document]);
}
// Return type: void
static HandleApprovalRequest ( sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.ACTION, "PurchaseRequestService_HandleApprovalRequest", sessionId, routeId, [null]);
}
}
export class BPOpeningBalanceService{
// Return type: void
static CreateOpenBalance (OpenningBalanceAccount: SAPB1.OpenningBalanceAccount,BPCodes: SAPB1.BPCode[], sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.ACTION, "BPOpeningBalanceService_CreateOpenBalance", sessionId, routeId, [OpenningBalanceAccount,BPCodes]);
}
}
export class ElectronicFileFormatsService{
// Return type: SAPB1.ElectronicFileFormatParams[]
static GetElectronicFileFormatList ( sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.ACTION, "ElectronicFileFormatsService_GetElectronicFileFormatList", sessionId, routeId, [null]);
}
}
export class ElectronicCommunicationActionsService{
// Return type: SAPB1.EcmAction
static GetEcmAction (EcmActionParams: SAPB1.EcmActionParams, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.ACTION, "ElectronicCommunicationActionsService_GetEcmAction", sessionId, routeId, [EcmActionParams]);
}
// Return type: SAPB1.EcmAction
static AddEcmAction (EcmAction: SAPB1.EcmAction, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.ACTION, "ElectronicCommunicationActionsService_AddEcmAction", sessionId, routeId, [EcmAction]);
}
// Return type: void
static UpdateEcmAction (EcmAction: SAPB1.EcmAction, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.ACTION, "ElectronicCommunicationActionsService_UpdateEcmAction", sessionId, routeId, [EcmAction]);
}
// Return type: void
static DeleteEcmAction (EcmAction: SAPB1.EcmAction, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.ACTION, "ElectronicCommunicationActionsService_DeleteEcmAction", sessionId, routeId, [EcmAction]);
}
// Return type: SAPB1.EcmAction
static GetEcmActionByDoc (EcmActionDocParams: SAPB1.EcmActionDocParams, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.ACTION, "ElectronicCommunicationActionsService_GetEcmActionByDoc", sessionId, routeId, [EcmActionDocParams]);
}
// Return type: SAPB1.EcmActionLog[]
static GetEcmActionLogList (EcmAction: SAPB1.EcmAction, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.ACTION, "ElectronicCommunicationActionsService_GetEcmActionLogList", sessionId, routeId, [EcmAction]);
}
// Return type: SAPB1.EcmActionLog
static GetEcmActionLog (EcmActionLogParams: SAPB1.EcmActionLogParams, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.ACTION, "ElectronicCommunicationActionsService_GetEcmActionLog", sessionId, routeId, [EcmActionLogParams]);
}
// Return type: SAPB1.EcmActionLog
static AddEcmActionLog (EcmActionLog: SAPB1.EcmActionLog, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.ACTION, "ElectronicCommunicationActionsService_AddEcmActionLog", sessionId, routeId, [EcmActionLog]);
}
}
export class WarehouseSublevelCodesService{
// Return type: SAPB1.WarehouseSublevelCodeParams[]
static GetList ( sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.ACTION, "WarehouseSublevelCodesService_GetList", sessionId, routeId, [null]);
}
}
export class PurchaseOrdersService{
// Return type: SAPB1.Document
static GetApprovalTemplates (Document: SAPB1.Document, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.ACTION, "PurchaseOrdersService_GetApprovalTemplates", sessionId, routeId, [Document]);
}
// Return type: SAPB1.Document
static Preview (Document: SAPB1.Document, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.ACTION, "PurchaseOrdersService_Preview", sessionId, routeId, [Document]);
}
// Return type: void
static HandleApprovalRequest ( sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.ACTION, "PurchaseOrdersService_HandleApprovalRequest", sessionId, routeId, [null]);
}
}
export class EmployeeStatusService{
// Return type: SAPB1.EmployeeStatusParams[]
static GetList ( sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.ACTION, "EmployeeStatusService_GetList", sessionId, routeId, [null]);
}
}
export class CorrectionPurchaseInvoiceReversalService{
// Return type: SAPB1.Document
static GetApprovalTemplates (Document: SAPB1.Document, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.ACTION, "CorrectionPurchaseInvoiceReversalService_GetApprovalTemplates", sessionId, routeId, [Document]);
}
// Return type: SAPB1.Document
static Preview (Document: SAPB1.Document, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.ACTION, "CorrectionPurchaseInvoiceReversalService_Preview", sessionId, routeId, [Document]);
}
// Return type: void
static HandleApprovalRequest ( sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.ACTION, "CorrectionPurchaseInvoiceReversalService_HandleApprovalRequest", sessionId, routeId, [null]);
}
}
export class SalesOpportunitySourcesSetupService{
// Return type: SAPB1.SalesOpportunitySourceSetupParams[]
static GetSalesOpportunitySourceSetupList ( sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.ACTION, "SalesOpportunitySourcesSetupService_GetSalesOpportunitySourceSetupList", sessionId, routeId, [null]);
}
}
export class RetornoCodesService{
// Return type: SAPB1.RetornoCodeParams[]
static GetList ( sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.ACTION, "RetornoCodesService_GetList", sessionId, routeId, [null]);
}
}
export class EnhancedDiscountGroupsService{
// Return type: SAPB1.EnhancedDiscountGroupParams[]
static GetList ( sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.ACTION, "EnhancedDiscountGroupsService_GetList", sessionId, routeId, [null]);
}
}
export class PredefinedTextsService{
// Return type: SAPB1.PredefinedTextParams[]
static GetPredefinedTextList ( sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.ACTION, "PredefinedTextsService_GetPredefinedTextList", sessionId, routeId, [null]);
}
}
export class KPIsService{
// Return type: SAPB1.KPIParams[]
static GetList ( sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.ACTION, "KPIsService_GetList", sessionId, routeId, [null]);
}
}
export class ServiceCallOriginsService{
// Return type: SAPB1.ServiceCallOriginParams[]
static GetServiceCallOriginList ( sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.ACTION, "ServiceCallOriginsService_GetServiceCallOriginList", sessionId, routeId, [null]);
}
}
export class StockTransferDraftService{
// Return type: SAPB1.StockTransfer
static GetApprovalTemplates (StockTransfer: SAPB1.StockTransfer, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.ACTION, "StockTransferDraftService_GetApprovalTemplates", sessionId, routeId, [StockTransfer]);
}
// Return type: void
static HandleApprovalRequest ( sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.ACTION, "StockTransferDraftService_HandleApprovalRequest", sessionId, routeId, [null]);
}
}
export class MaterialRevaluationFIFOService{
// Return type: SAPB1.MaterialRevaluationFIFO
static GetMaterialRevaluationFIFO (MaterialRevaluationFIFOParams: SAPB1.MaterialRevaluationFIFOParams, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.ACTION, "MaterialRevaluationFIFOService_GetMaterialRevaluationFIFO", sessionId, routeId, [MaterialRevaluationFIFOParams]);
}
}
export class DepreciationAreasService{
// Return type: SAPB1.DepreciationAreaParams[]
static GetList ( sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.ACTION, "DepreciationAreasService_GetList", sessionId, routeId, [null]);
}
}
export class NFModelsService{
// Return type: SAPB1.NFModelParams[]
static GetList ( sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.ACTION, "NFModelsService_GetList", sessionId, routeId, [null]);
}
}
export class CertificateSeriesService{
// Return type: SAPB1.CertificateSeriesParams[]
static GetCertificateSeriesList ( sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.ACTION, "CertificateSeriesService_GetCertificateSeriesList", sessionId, routeId, [null]);
}
}
export class CostCenterTypesService{
// Return type: SAPB1.CostCenterTypeParams[]
static GetCostCenterTypeList ( sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.ACTION, "CostCenterTypesService_GetCostCenterTypeList", sessionId, routeId, [null]);
}
}
export class InventoryGenEntryService{
// Return type: SAPB1.Document
static GetApprovalTemplates (Document: SAPB1.Document, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.ACTION, "InventoryGenEntryService_GetApprovalTemplates", sessionId, routeId, [Document]);
}
// Return type: SAPB1.Document
static Preview (Document: SAPB1.Document, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.ACTION, "InventoryGenEntryService_Preview", sessionId, routeId, [Document]);
}
// Return type: void
static HandleApprovalRequest ( sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.ACTION, "InventoryGenEntryService_HandleApprovalRequest", sessionId, routeId, [null]);
}
}
export class IntegrationPackagesConfigureService{
// Return type: SAPB1.IntegrationPackageParams[]
static GetList ( sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.ACTION, "IntegrationPackagesConfigureService_GetList", sessionId, routeId, [null]);
}
}
export class DeliveryNotesService{
// Return type: SAPB1.Document
static GetApprovalTemplates (Document: SAPB1.Document, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.ACTION, "DeliveryNotesService_GetApprovalTemplates", sessionId, routeId, [Document]);
}
// Return type: SAPB1.Document
static Preview (Document: SAPB1.Document, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.ACTION, "DeliveryNotesService_Preview", sessionId, routeId, [Document]);
}
// Return type: void
static HandleApprovalRequest ( sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.ACTION, "DeliveryNotesService_HandleApprovalRequest", sessionId, routeId, [null]);
}
}
export class TerminationReasonService{
// Return type: SAPB1.TerminationReasonParams[]
static GetList ( sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.ACTION, "TerminationReasonService_GetList", sessionId, routeId, [null]);
}
}
export class DepositsService{
// Return type: SAPB1.DepositParams[]
static GetDepositList ( sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.ACTION, "DepositsService_GetDepositList", sessionId, routeId, [null]);
}
// Return type: void
static CancelCheckRow (CancelCheckRowParams: SAPB1.CancelCheckRowParams, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.ACTION, "DepositsService_CancelCheckRow", sessionId, routeId, [CancelCheckRowParams]);
}
// Return type: void
static CancelCheckRowbyCurrentSystemDate (CancelCheckRowParams: SAPB1.CancelCheckRowParams, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.ACTION, "DepositsService_CancelCheckRowbyCurrentSystemDate", sessionId, routeId, [CancelCheckRowParams]);
}
}
export class SalesOpportunityReasonsSetupService{
// Return type: SAPB1.SalesOpportunityReasonSetupParams[]
static GetSalesOpportunityReasonSetupList ( sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.ACTION, "SalesOpportunityReasonsSetupService_GetSalesOpportunityReasonSetupList", sessionId, routeId, [null]);
}
}
export class UnitOfMeasurementGroupsService{
// Return type: SAPB1.UnitOfMeasurementGroupParams[]
static GetList ( sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.ACTION, "UnitOfMeasurementGroupsService_GetList", sessionId, routeId, [null]);
}
}
export class BusinessPartnersService{
// Return type: void
static CreateOpenBalance (OpenningBalanceAccount: SAPB1.OpenningBalanceAccount,BPCodes: SAPB1.BPCode[], sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.ACTION, "BusinessPartnersService_CreateOpenBalance", sessionId, routeId, [OpenningBalanceAccount,BPCodes]);
}
}
export class PartnersSetupsService{
// Return type: SAPB1.PartnersSetupParams[]
static GetList ( sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.ACTION, "PartnersSetupsService_GetList", sessionId, routeId, [null]);
}
}
export class ValueMappingService{
// Return type: SAPB1.VM_B1ValuesData[]
static GetMappedB1Value (VM_B1ValuesData: SAPB1.VM_B1ValuesData, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.ACTION, "ValueMappingService_GetMappedB1Value", sessionId, routeId, [VM_B1ValuesData]);
}
// Return type: SAPB1.VM_ThirdPartyValuesData[]
static GetThirdPartyValuesForB1Value (VM_B1ValuesData: SAPB1.VM_B1ValuesData, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.ACTION, "ValueMappingService_GetThirdPartyValuesForB1Value", sessionId, routeId, [VM_B1ValuesData]);
}
// Return type: void
static RemoveMappedValue (VM_ThirdPartyValuesData: SAPB1.VM_ThirdPartyValuesData, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.ACTION, "ValueMappingService_RemoveMappedValue", sessionId, routeId, [VM_ThirdPartyValuesData]);
}
}
export class DNFCodeSetupService{
// Return type: SAPB1.DNFCodeSetupParams[]
static GetDNFCodeSetupList ( sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.ACTION, "DNFCodeSetupService_GetDNFCodeSetupList", sessionId, routeId, [null]);
}
}
export class EmployeePositionService{
// Return type: SAPB1.EmployeePositionParams[]
static GetList ( sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.ACTION, "EmployeePositionService_GetList", sessionId, routeId, [null]);
}
}
export class ServiceCallStatusService{
// Return type: SAPB1.ServiceCallStatusParams[]
static GetServiceCallStatusList ( sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.ACTION, "ServiceCallStatusService_GetServiceCallStatusList", sessionId, routeId, [null]);
}
}
export class ServiceTaxPostingService{
// Return type: void
static PostServiceTax (ServiceTaxPostingParams: SAPB1.ServiceTaxPostingParams, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.ACTION, "ServiceTaxPostingService_PostServiceTax", sessionId, routeId, [ServiceTaxPostingParams]);
}
// Return type: SAPB1.ServiceTaxPostingParams[]
static GetTaxableDeliveries ( sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.ACTION, "ServiceTaxPostingService_GetTaxableDeliveries", sessionId, routeId, [null]);
}
}
export class EmailGroupsService{
// Return type: SAPB1.EmailGroupParams[]
static GetList ( sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.ACTION, "EmailGroupsService_GetList", sessionId, routeId, [null]);
}
}
export class LandedCostsService{
// Return type: SAPB1.LandedCostParams[]
static GetLandedCostList ( sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.ACTION, "LandedCostsService_GetLandedCostList", sessionId, routeId, [null]);
}
}
export class ElectronicCommunicationActionService{
// Return type: SAPB1.ECMActionStatusData
static GetAction (ECMCodeParams: SAPB1.ECMCodeParams, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.ACTION, "ElectronicCommunicationActionService_GetAction", sessionId, routeId, [ECMCodeParams]);
}
// Return type: void
static UpdateAction (ECMActionStatusData: SAPB1.ECMActionStatusData, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.ACTION, "ElectronicCommunicationActionService_UpdateAction", sessionId, routeId, [ECMActionStatusData]);
}
// Return type: void
static ConfirmSuccessOfCommunication (ECMCodeParams: SAPB1.ECMCodeParams, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.ACTION, "ElectronicCommunicationActionService_ConfirmSuccessOfCommunication", sessionId, routeId, [ECMCodeParams]);
}
// Return type: void
static ReportErrorAndContinue (ECMCodeParams: SAPB1.ECMCodeParams, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.ACTION, "ElectronicCommunicationActionService_ReportErrorAndContinue", sessionId, routeId, [ECMCodeParams]);
}
// Return type: void
static ReportErrorAndStop (ECMCodeParams: SAPB1.ECMCodeParams, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.ACTION, "ElectronicCommunicationActionService_ReportErrorAndStop", sessionId, routeId, [ECMCodeParams]);
}
}
export class Session{
// Return type: SAPB1.B1Session
static Login (loginInfo: LoginInfo) {
callSL(B1ObjActionEnum.LOGIN, "Login", "", "", [loginInfo]);
}
// Return type: void
static Logout ( sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.LOGOUT, "Logout", sessionId, routeId, [null]);
}
}
export class InventoryOpeningBalancesService{
// Return type: SAPB1.InventoryOpeningBalanceParams[]
static GetList ( sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.ACTION, "InventoryOpeningBalancesService_GetList", sessionId, routeId, [null]);
}
}
export class PurchaseInvoicesService{
// Return type: SAPB1.Document
static GetApprovalTemplates (Document: SAPB1.Document, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.ACTION, "PurchaseInvoicesService_GetApprovalTemplates", sessionId, routeId, [Document]);
}
// Return type: SAPB1.Document
static Preview (Document: SAPB1.Document, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.ACTION, "PurchaseInvoicesService_Preview", sessionId, routeId, [Document]);
}
// Return type: void
static HandleApprovalRequest ( sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.ACTION, "PurchaseInvoicesService_HandleApprovalRequest", sessionId, routeId, [null]);
}
}
export class CashFlowLineItemsService{
// Return type: SAPB1.CashFlowLineItemParams[]
static GetCashFlowLineItemList ( sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.ACTION, "CashFlowLineItemsService_GetCashFlowLineItemList", sessionId, routeId, [null]);
}
}
export class ResourceCapacitiesService{
// Return type: SAPB1.ResourceCapacityParams[]
static GetList ( sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.ACTION, "ResourceCapacitiesService_GetList", sessionId, routeId, [null]);
}
// Return type: SAPB1.ResourceCapacityParams[]
static GetListWithFilter (ResourceCapacityWithFilterParams: SAPB1.ResourceCapacityWithFilterParams, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.ACTION, "ResourceCapacitiesService_GetListWithFilter", sessionId, routeId, [ResourceCapacityWithFilterParams]);
}
}
export class GovPayCodesService{
// Return type: SAPB1.GovPayCodeParams[]
static GetList ( sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.ACTION, "GovPayCodesService_GetList", sessionId, routeId, [null]);
}
}
export class TaxCodeDeterminationsTCDService{
// Return type: SAPB1.TaxCodeDeterminationTCDParams[]
static GetTaxCodeDeterminationTCDList ( sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.ACTION, "TaxCodeDeterminationsTCDService_GetTaxCodeDeterminationTCDList", sessionId, routeId, [null]);
}
}
export class CreditNotesService{
// Return type: SAPB1.Document
static GetApprovalTemplates (Document: SAPB1.Document, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.ACTION, "CreditNotesService_GetApprovalTemplates", sessionId, routeId, [Document]);
}
// Return type: SAPB1.Document
static Preview (Document: SAPB1.Document, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.ACTION, "CreditNotesService_Preview", sessionId, routeId, [Document]);
}
// Return type: void
static HandleApprovalRequest ( sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.ACTION, "CreditNotesService_HandleApprovalRequest", sessionId, routeId, [null]);
}
}
export class BranchesService{
// Return type: SAPB1.BranchParams[]
static GetBranchList ( sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.ACTION, "BranchesService_GetBranchList", sessionId, routeId, [null]);
}
}
export class ProjectManagementService{
// Return type: SAPB1.PM_SubprojectDocumentParams[]
static GetSubprojectsList (PM_SubprojectParams: SAPB1.PM_SubprojectParams, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.ACTION, "ProjectManagementService_GetSubprojectsList", sessionId, routeId, [PM_SubprojectParams]);
}
// Return type: SAPB1.PM_SubprojectDocumentData
static GetSubproject (PM_SubprojectDocumentParams: SAPB1.PM_SubprojectDocumentParams, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.ACTION, "ProjectManagementService_GetSubproject", sessionId, routeId, [PM_SubprojectDocumentParams]);
}
// Return type: SAPB1.PM_SubprojectDocumentParams
static AddSubproject (PM_SubprojectDocumentData: SAPB1.PM_SubprojectDocumentData, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.ACTION, "ProjectManagementService_AddSubproject", sessionId, routeId, [PM_SubprojectDocumentData]);
}
// Return type: void
static UpdateSubproject (PM_SubprojectDocumentData: SAPB1.PM_SubprojectDocumentData, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.ACTION, "ProjectManagementService_UpdateSubproject", sessionId, routeId, [PM_SubprojectDocumentData]);
}
// Return type: void
static DeleteSubproject (PM_SubprojectDocumentParams: SAPB1.PM_SubprojectDocumentParams, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.ACTION, "ProjectManagementService_DeleteSubproject", sessionId, routeId, [PM_SubprojectDocumentParams]);
}
}
export class EmployeeIDTypeService{
// Return type: SAPB1.EmployeeIDTypeParams[]
static GetList ( sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.ACTION, "EmployeeIDTypeService_GetList", sessionId, routeId, [null]);
}
}
export class ResourcePropertiesService{
// Return type: SAPB1.ResourcePropertyParams[]
static GetList ( sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.ACTION, "ResourcePropertiesService_GetList", sessionId, routeId, [null]);
}
}
export class BrazilBeverageIndexersService{
// Return type: SAPB1.BrazilBeverageIndexerParams[]
static GetList ( sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.ACTION, "BrazilBeverageIndexersService_GetList", sessionId, routeId, [null]);
}
}
export class CompanyService{
// Return type: SAPB1.CompanyInfo
static GetCompanyInfo ( sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.ACTION, "CompanyService_GetCompanyInfo", sessionId, routeId, [null]);
}
// Return type: void
static UpdateCompanyInfo (CompanyInfo: SAPB1.CompanyInfo, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.ACTION, "CompanyService_UpdateCompanyInfo", sessionId, routeId, [CompanyInfo]);
}
// Return type: SAPB1.AdminInfo
static GetAdminInfo ( sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.ACTION, "CompanyService_GetAdminInfo", sessionId, routeId, [null]);
}
// Return type: void
static UpdateAdminInfo (AdminInfo: SAPB1.AdminInfo, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.ACTION, "CompanyService_UpdateAdminInfo", sessionId, routeId, [AdminInfo]);
}
// Return type: SAPB1.PeriodCategoryParams
static CreatePeriod (PeriodCategory: SAPB1.PeriodCategory, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.ACTION, "CompanyService_CreatePeriod", sessionId, routeId, [PeriodCategory]);
}
// Return type: SAPB1.PeriodCategoryParams[]
static GetPeriods ( sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.ACTION, "CompanyService_GetPeriods", sessionId, routeId, [null]);
}
// Return type: SAPB1.PeriodCategory
static GetPeriod (PeriodCategoryParams: SAPB1.PeriodCategoryParams, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.ACTION, "CompanyService_GetPeriod", sessionId, routeId, [PeriodCategoryParams]);
}
// Return type: void
static UpdatePeriod (PeriodCategory: SAPB1.PeriodCategory, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.ACTION, "CompanyService_UpdatePeriod", sessionId, routeId, [PeriodCategory]);
}
// Return type: SAPB1.FinancePeriod[]
static GetFinancePeriods (PeriodCategoryParams: SAPB1.PeriodCategoryParams, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.ACTION, "CompanyService_GetFinancePeriods", sessionId, routeId, [PeriodCategoryParams]);
}
// Return type: SAPB1.FinancePeriod
static GetFinancePeriod (FinancePeriodParams: SAPB1.FinancePeriodParams, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.ACTION, "CompanyService_GetFinancePeriod", sessionId, routeId, [FinancePeriodParams]);
}
// Return type: void
static UpdateFinancePeriod (FinancePeriod: SAPB1.FinancePeriod, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.ACTION, "CompanyService_UpdateFinancePeriod", sessionId, routeId, [FinancePeriod]);
}
// Return type: void
static RemoveFinancePeriod (FinancePeriodParams: SAPB1.FinancePeriodParams, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.ACTION, "CompanyService_RemoveFinancePeriod", sessionId, routeId, [FinancePeriodParams]);
}
// Return type: SAPB1.PeriodCategoryParams
static CreatePeriodWithFinanceParams (PeriodCategory: SAPB1.PeriodCategory,FinancePeriodParams: SAPB1.FinancePeriodParams, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.ACTION, "CompanyService_CreatePeriodWithFinanceParams", sessionId, routeId, [PeriodCategory,FinancePeriodParams]);
}
// Return type: SAPB1.FeatureStatus[]
static GetFeaturesStatus ( sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.ACTION, "CompanyService_GetFeaturesStatus", sessionId, routeId, [null]);
}
// Return type: SAPB1.PathAdmin
static GetPathAdmin ( sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.ACTION, "CompanyService_GetPathAdmin", sessionId, routeId, [null]);
}
// Return type: void
static UpdatePathAdmin (PathAdmin: SAPB1.PathAdmin, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.ACTION, "CompanyService_UpdatePathAdmin", sessionId, routeId, [PathAdmin]);
}
// Return type: SAPB1.RoundedData
static RoundDecimal (DecimalData: SAPB1.DecimalData, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.ACTION, "CompanyService_RoundDecimal", sessionId, routeId, [DecimalData]);
}
// Return type: SAPB1.ItemPriceReturnParams
static GetItemPrice (ItemPriceParams: SAPB1.ItemPriceParams, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.ACTION, "CompanyService_GetItemPrice", sessionId, routeId, [ItemPriceParams]);
}
// Return type: SAPB1.AdvancedGLAccountReturnParams
static GetAdvancedGLAccount (AdvancedGLAccountParams: SAPB1.AdvancedGLAccountParams, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.ACTION, "CompanyService_GetAdvancedGLAccount", sessionId, routeId, [AdvancedGLAccountParams]);
}
}
export class ProjectManagementConfigurationService{
// Return type: SAPB1.PMC_SubprojectTypeData[]
static GetSubprojectTypes ( sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.ACTION, "ProjectManagementConfigurationService_GetSubprojectTypes", sessionId, routeId, [null]);
}
// Return type: void
static AddSubprojectTypes (PMC_SubprojectTypesCollection: SAPB1.PMC_SubprojectTypeData[], sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.ACTION, "ProjectManagementConfigurationService_AddSubprojectTypes", sessionId, routeId, [PMC_SubprojectTypesCollection]);
}
// Return type: void
static UpdateSubprojectTypes (PMC_SubprojectTypesCollection: SAPB1.PMC_SubprojectTypeData[], sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.ACTION, "ProjectManagementConfigurationService_UpdateSubprojectTypes", sessionId, routeId, [PMC_SubprojectTypesCollection]);
}
// Return type: void
static DeleteSubprojectTypes (PMC_SubprojectTypesCollection: SAPB1.PMC_SubprojectTypeData[], sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.ACTION, "ProjectManagementConfigurationService_DeleteSubprojectTypes", sessionId, routeId, [PMC_SubprojectTypesCollection]);
}
// Return type: SAPB1.PMC_StageTypeData[]
static GetStageTypes ( sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.ACTION, "ProjectManagementConfigurationService_GetStageTypes", sessionId, routeId, [null]);
}
// Return type: void
static AddStageTypes (PMC_StageTypeCollection: SAPB1.PMC_StageTypeData[], sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.ACTION, "ProjectManagementConfigurationService_AddStageTypes", sessionId, routeId, [PMC_StageTypeCollection]);
}
// Return type: void
static UpdateStageTypes (PMC_StageTypeCollection: SAPB1.PMC_StageTypeData[], sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.ACTION, "ProjectManagementConfigurationService_UpdateStageTypes", sessionId, routeId, [PMC_StageTypeCollection]);
}
// Return type: void
static DeleteStageTypes (PMC_StageTypeCollection: SAPB1.PMC_StageTypeData[], sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.ACTION, "ProjectManagementConfigurationService_DeleteStageTypes", sessionId, routeId, [PMC_StageTypeCollection]);
}
// Return type: SAPB1.PMC_AreaData[]
static GetAreas ( sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.ACTION, "ProjectManagementConfigurationService_GetAreas", sessionId, routeId, [null]);
}
// Return type: void
static AddAreas (PMC_AreaCollection: SAPB1.PMC_AreaData[], sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.ACTION, "ProjectManagementConfigurationService_AddAreas", sessionId, routeId, [PMC_AreaCollection]);
}
// Return type: void
static UpdateAreas (PMC_AreaCollection: SAPB1.PMC_AreaData[], sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.ACTION, "ProjectManagementConfigurationService_UpdateAreas", sessionId, routeId, [PMC_AreaCollection]);
}
// Return type: void
static DeleteAreas (PMC_AreaCollection: SAPB1.PMC_AreaData[], sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.ACTION, "ProjectManagementConfigurationService_DeleteAreas", sessionId, routeId, [PMC_AreaCollection]);
}
// Return type: SAPB1.PMC_PriorityData[]
static GetPriorities ( sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.ACTION, "ProjectManagementConfigurationService_GetPriorities", sessionId, routeId, [null]);
}
// Return type: void
static AddPriorities (PMC_PriorityCollection: SAPB1.PMC_PriorityData[], sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.ACTION, "ProjectManagementConfigurationService_AddPriorities", sessionId, routeId, [PMC_PriorityCollection]);
}
// Return type: void
static UpdatePriorities (PMC_PriorityCollection: SAPB1.PMC_PriorityData[], sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.ACTION, "ProjectManagementConfigurationService_UpdatePriorities", sessionId, routeId, [PMC_PriorityCollection]);
}
// Return type: void
static DeletePriorities (PMC_PriorityCollection: SAPB1.PMC_PriorityData[], sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.ACTION, "ProjectManagementConfigurationService_DeletePriorities", sessionId, routeId, [PMC_PriorityCollection]);
}
// Return type: SAPB1.PMC_ActivityData[]
static GetActivities ( sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.ACTION, "ProjectManagementConfigurationService_GetActivities", sessionId, routeId, [null]);
}
// Return type: void
static AddActivities (PMC_ActivityCollection: SAPB1.PMC_ActivityData[], sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.ACTION, "ProjectManagementConfigurationService_AddActivities", sessionId, routeId, [PMC_ActivityCollection]);
}
// Return type: void
static UpdateActivities (PMC_ActivityCollection: SAPB1.PMC_ActivityData[], sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.ACTION, "ProjectManagementConfigurationService_UpdateActivities", sessionId, routeId, [PMC_ActivityCollection]);
}
// Return type: void
static DeleteActivities (PMC_ActivityCollection: SAPB1.PMC_ActivityData[], sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.ACTION, "ProjectManagementConfigurationService_DeleteActivities", sessionId, routeId, [PMC_ActivityCollection]);
}
// Return type: SAPB1.PMC_TaskData[]
static GetTasks ( sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.ACTION, "ProjectManagementConfigurationService_GetTasks", sessionId, routeId, [null]);
}
// Return type: void
static AddTasks (PMC_TaskCollection: SAPB1.PMC_TaskData[], sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.ACTION, "ProjectManagementConfigurationService_AddTasks", sessionId, routeId, [PMC_TaskCollection]);
}
// Return type: void
static UpdateTasks (PMC_TaskCollection: SAPB1.PMC_TaskData[], sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.ACTION, "ProjectManagementConfigurationService_UpdateTasks", sessionId, routeId, [PMC_TaskCollection]);
}
// Return type: void
static DeleteTasks (PMC_TaskCollection: SAPB1.PMC_TaskData[], sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.ACTION, "ProjectManagementConfigurationService_DeleteTasks", sessionId, routeId, [PMC_TaskCollection]);
}
}
export class InvoicesService{
// Return type: SAPB1.Document
static GetApprovalTemplates (Document: SAPB1.Document, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.ACTION, "InvoicesService_GetApprovalTemplates", sessionId, routeId, [Document]);
}
// Return type: SAPB1.Document
static Preview (Document: SAPB1.Document, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.ACTION, "InvoicesService_Preview", sessionId, routeId, [Document]);
}
// Return type: void
static HandleApprovalRequest ( sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.ACTION, "InvoicesService_HandleApprovalRequest", sessionId, routeId, [null]);
}
}
export class DepartmentsService{
// Return type: SAPB1.DepartmentParams[]
static GetDepartmentList ( sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.ACTION, "DepartmentsService_GetDepartmentList", sessionId, routeId, [null]);
}
}
export class SeriesService{
// Return type: SAPB1.SeriesParams
static AddSeries (Series: SAPB1.Series, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.ACTION, "SeriesService_AddSeries", sessionId, routeId, [Series]);
}
// Return type: void
static RemoveSeries (SeriesParams: SAPB1.SeriesParams, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.ACTION, "SeriesService_RemoveSeries", sessionId, routeId, [SeriesParams]);
}
// Return type: void
static AttachSeriesToDocument (DocumentSeriesParams: SAPB1.DocumentSeriesParams, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.ACTION, "SeriesService_AttachSeriesToDocument", sessionId, routeId, [DocumentSeriesParams]);
}
// Return type: void
static UnattachSeriesFromDocument (DocumentSeriesParams: SAPB1.DocumentSeriesParams, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.ACTION, "SeriesService_UnattachSeriesFromDocument", sessionId, routeId, [DocumentSeriesParams]);
}
// Return type: void
static SetDefaultSeriesForAllUsers (DocumentSeriesParams: SAPB1.DocumentSeriesParams, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.ACTION, "SeriesService_SetDefaultSeriesForAllUsers", sessionId, routeId, [DocumentSeriesParams]);
}
// Return type: void
static SetDefaultSeriesForCurrentUser (DocumentSeriesParams: SAPB1.DocumentSeriesParams, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.ACTION, "SeriesService_SetDefaultSeriesForCurrentUser", sessionId, routeId, [DocumentSeriesParams]);
}
// Return type: void
static SetDefaultSeriesForUser (DocumentSeriesUserParams: SAPB1.DocumentSeriesUserParams, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.ACTION, "SeriesService_SetDefaultSeriesForUser", sessionId, routeId, [DocumentSeriesUserParams]);
}
// Return type: void
static UpdateSeries (Series: SAPB1.Series, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.ACTION, "SeriesService_UpdateSeries", sessionId, routeId, [Series]);
}
// Return type: SAPB1.Series
static GetDefaultSeries (DocumentTypeParams: SAPB1.DocumentTypeParams, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.ACTION, "SeriesService_GetDefaultSeries", sessionId, routeId, [DocumentTypeParams]);
}
// Return type: SAPB1.Series[]
static GetDocumentSeries (DocumentTypeParams: SAPB1.DocumentTypeParams, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.ACTION, "SeriesService_GetDocumentSeries", sessionId, routeId, [DocumentTypeParams]);
}
// Return type: SAPB1.Series
static GetSeries (SeriesParams: SAPB1.SeriesParams, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.ACTION, "SeriesService_GetSeries", sessionId, routeId, [SeriesParams]);
}
// Return type: SAPB1.DocumentChangeMenuName
static GetDocumentChangedMenuName (DocumentTypeParams: SAPB1.DocumentTypeParams, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.ACTION, "SeriesService_GetDocumentChangedMenuName", sessionId, routeId, [DocumentTypeParams]);
}
// Return type: void
static ChangeDocumentMenuName (DocumentChangeMenuName: SAPB1.DocumentChangeMenuName, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.ACTION, "SeriesService_ChangeDocumentMenuName", sessionId, routeId, [DocumentChangeMenuName]);
}
// Return type: SAPB1.ElectronicSeries
static GetElectronicSeries (ElectronicSeriesParams: SAPB1.ElectronicSeriesParams, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.ACTION, "SeriesService_GetElectronicSeries", sessionId, routeId, [ElectronicSeriesParams]);
}
// Return type: SAPB1.ElectronicSeriesParams
static AddElectronicSeries (ElectronicSeries: SAPB1.ElectronicSeries, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.ACTION, "SeriesService_AddElectronicSeries", sessionId, routeId, [ElectronicSeries]);
}
// Return type: void
static RemoveElectronicSeries (ElectronicSeriesParams: SAPB1.ElectronicSeriesParams, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.ACTION, "SeriesService_RemoveElectronicSeries", sessionId, routeId, [ElectronicSeriesParams]);
}
// Return type: void
static UpdateElectronicSeries (ElectronicSeries: SAPB1.ElectronicSeries, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.ACTION, "SeriesService_UpdateElectronicSeries", sessionId, routeId, [ElectronicSeries]);
}
// Return type: SAPB1.ElectronicSeriesParams
static GetDefaultElectronicSeries (SeriesParams: SAPB1.SeriesParams, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.ACTION, "SeriesService_GetDefaultElectronicSeries", sessionId, routeId, [SeriesParams]);
}
// Return type: void
static SetDefaultElectronicSeries (DefaultElectronicSeriesParams: SAPB1.DefaultElectronicSeriesParams, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.ACTION, "SeriesService_SetDefaultElectronicSeries", sessionId, routeId, [DefaultElectronicSeriesParams]);
}
}
export class EmployeeTransfersService{
// Return type: SAPB1.EmployeeTransferParams[]
static GetEmployeeTransferList ( sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.ACTION, "EmployeeTransfersService_GetEmployeeTransferList", sessionId, routeId, [null]);
}
}
export class BarCodesService{
// Return type: SAPB1.BarCodeParams[]
static GetList ( sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.ACTION, "BarCodesService_GetList", sessionId, routeId, [null]);
}
}
export class AssetManualDepreciationService{
// Return type: void
static Cancel (AssetDocumentParams: SAPB1.AssetDocumentParams, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.ACTION, "AssetManualDepreciationService_Cancel", sessionId, routeId, [AssetDocumentParams]);
}
// Return type: SAPB1.AssetDocumentParams[]
static GetList ( sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.ACTION, "AssetManualDepreciationService_GetList", sessionId, routeId, [null]);
}
}
export class PurchaseQuotationsService{
// Return type: SAPB1.Document
static GetApprovalTemplates (Document: SAPB1.Document, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.ACTION, "PurchaseQuotationsService_GetApprovalTemplates", sessionId, routeId, [Document]);
}
// Return type: SAPB1.Document
static Preview (Document: SAPB1.Document, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.ACTION, "PurchaseQuotationsService_Preview", sessionId, routeId, [Document]);
}
// Return type: void
static HandleApprovalRequest ( sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.ACTION, "PurchaseQuotationsService_HandleApprovalRequest", sessionId, routeId, [null]);
}
}
export class CountriesService{
// Return type: SAPB1.CountryParams[]
static GetCountryList ( sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.ACTION, "CountriesService_GetCountryList", sessionId, routeId, [null]);
}
}
export class NatureOfAssesseesService{
// Return type: SAPB1.NatureOfAssesseeParams[]
static GetNatureOfAssesseeList ( sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.ACTION, "NatureOfAssesseesService_GetNatureOfAssesseeList", sessionId, routeId, [null]);
}
}
export class BinLocationsService{
// Return type: SAPB1.BinLocationParams[]
static GetList ( sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.ACTION, "BinLocationsService_GetList", sessionId, routeId, [null]);
}
}
export class AssetClassesService{
// Return type: SAPB1.AssetClassParams[]
static GetList ( sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.ACTION, "AssetClassesService_GetList", sessionId, routeId, [null]);
}
}
export class ServiceCallTypesService{
// Return type: SAPB1.ServiceCallTypeParams[]
static GetServiceCallTypeList ( sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.ACTION, "ServiceCallTypesService_GetServiceCallTypeList", sessionId, routeId, [null]);
}
}
export class ExternalCallsService{
// Return type: SAPB1.ExternalCallParams
static SendCall (ExternalCall: SAPB1.ExternalCall, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.ACTION, "ExternalCallsService_SendCall", sessionId, routeId, [ExternalCall]);
}
// Return type: void
static UpdateCall (ExternalCall: SAPB1.ExternalCall, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.ACTION, "ExternalCallsService_UpdateCall", sessionId, routeId, [ExternalCall]);
}
// Return type: SAPB1.ExternalCall
static GetCall (ExternalCallParams: SAPB1.ExternalCallParams, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.ACTION, "ExternalCallsService_GetCall", sessionId, routeId, [ExternalCallParams]);
}
}
export class AlertService{
// Return type: number
static RunAlert ( sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.ACTION, "AlertService_RunAlert", sessionId, routeId, [null]);
}
}
export class AssetCapitalizationService{
// Return type: void
static Cancel (AssetDocumentParams: SAPB1.AssetDocumentParams, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.ACTION, "AssetCapitalizationService_Cancel", sessionId, routeId, [AssetDocumentParams]);
}
// Return type: SAPB1.AssetDocumentParams[]
static GetList ( sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.ACTION, "AssetCapitalizationService_GetList", sessionId, routeId, [null]);
}
}
export class CockpitsService{
// Return type: SAPB1.CockpitParams[]
static GetCockpitList ( sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.ACTION, "CockpitsService_GetCockpitList", sessionId, routeId, [null]);
}
// Return type: void
static PublishCockpit (Cockpit: SAPB1.Cockpit, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.ACTION, "CockpitsService_PublishCockpit", sessionId, routeId, [Cockpit]);
}
// Return type: SAPB1.CockpitParams[]
static GetUserCockpitList ( sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.ACTION, "CockpitsService_GetUserCockpitList", sessionId, routeId, [null]);
}
// Return type: SAPB1.CockpitParams[]
static GetTemplateCockpitList ( sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.ACTION, "CockpitsService_GetTemplateCockpitList", sessionId, routeId, [null]);
}
}
export class InventoryPostingsService{
// Return type: SAPB1.InventoryPostingParams[]
static GetList ( sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.ACTION, "InventoryPostingsService_GetList", sessionId, routeId, [null]);
}
// Return type: void
static SetCopyOption (InventoryPostingCopyOption: SAPB1.InventoryPostingCopyOption, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.ACTION, "InventoryPostingsService_SetCopyOption", sessionId, routeId, [InventoryPostingCopyOption]);
}
}
export class FiscalPrinterService{
// Return type: SAPB1.FiscalPrinterParams[]
static GetFiscalPrinterList ( sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.ACTION, "FiscalPrinterService_GetFiscalPrinterList", sessionId, routeId, [null]);
}
}
export class CheckLinesService{
// Return type: SAPB1.CheckLine
static GetCheckLine (CheckLineParams: SAPB1.CheckLineParams, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.ACTION, "CheckLinesService_GetCheckLine", sessionId, routeId, [CheckLineParams]);
}
// Return type: SAPB1.CheckLineParams[]
static GetValidCheckLineList ( sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.ACTION, "CheckLinesService_GetValidCheckLineList", sessionId, routeId, [null]);
}
}
export class PurchaseCreditNotesService{
// Return type: SAPB1.Document
static GetApprovalTemplates (Document: SAPB1.Document, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.ACTION, "PurchaseCreditNotesService_GetApprovalTemplates", sessionId, routeId, [Document]);
}
// Return type: SAPB1.Document
static Preview (Document: SAPB1.Document, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.ACTION, "PurchaseCreditNotesService_Preview", sessionId, routeId, [Document]);
}
// Return type: void
static HandleApprovalRequest ( sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.ACTION, "PurchaseCreditNotesService_HandleApprovalRequest", sessionId, routeId, [null]);
}
}
export class OrdersService{
// Return type: SAPB1.Document
static GetApprovalTemplates (Document: SAPB1.Document, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.ACTION, "OrdersService_GetApprovalTemplates", sessionId, routeId, [Document]);
}
// Return type: SAPB1.Document
static Preview (Document: SAPB1.Document, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.ACTION, "OrdersService_Preview", sessionId, routeId, [Document]);
}
// Return type: void
static HandleApprovalRequest ( sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.ACTION, "OrdersService_HandleApprovalRequest", sessionId, routeId, [null]);
}
}
export class BinLocationFieldsService{
// Return type: SAPB1.BinLocationFieldParams[]
static GetList ( sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.ACTION, "BinLocationFieldsService_GetList", sessionId, routeId, [null]);
}
}
export class ProjectsService{
// Return type: SAPB1.ProjectParams[]
static GetProjectList ( sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.ACTION, "ProjectsService_GetProjectList", sessionId, routeId, [null]);
}
}
export class ProfitCentersService{
// Return type: SAPB1.ProfitCenterParams[]
static GetProfitCenterList ( sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.ACTION, "ProfitCentersService_GetProfitCenterList", sessionId, routeId, [null]);
}
}
export class ResourcesService{
// Return type: SAPB1.ResourceParams[]
static GetList ( sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.ACTION, "ResourcesService_GetList", sessionId, routeId, [null]);
}
}
export class PurchaseReturnsService{
// Return type: SAPB1.Document
static GetApprovalTemplates (Document: SAPB1.Document, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.ACTION, "PurchaseReturnsService_GetApprovalTemplates", sessionId, routeId, [Document]);
}
// Return type: SAPB1.Document
static Preview (Document: SAPB1.Document, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.ACTION, "PurchaseReturnsService_Preview", sessionId, routeId, [Document]);
}
// Return type: void
static HandleApprovalRequest ( sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.ACTION, "PurchaseReturnsService_HandleApprovalRequest", sessionId, routeId, [null]);
}
}
export class DepreciationTypePoolsService{
// Return type: SAPB1.DepreciationTypePoolParams[]
static GetList ( sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.ACTION, "DepreciationTypePoolsService_GetList", sessionId, routeId, [null]);
}
}
export class MaterialRevaluationSNBService{
// Return type: SAPB1.MaterialRevaluationSNBParams[]
static GetList (MaterialRevaluationSNBParam: SAPB1.MaterialRevaluationSNBParam, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.ACTION, "MaterialRevaluationSNBService_GetList", sessionId, routeId, [MaterialRevaluationSNBParam]);
}
}
export class ReturnsService{
// Return type: SAPB1.Document
static GetApprovalTemplates (Document: SAPB1.Document, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.ACTION, "ReturnsService_GetApprovalTemplates", sessionId, routeId, [Document]);
}
// Return type: SAPB1.Document
static Preview (Document: SAPB1.Document, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.ACTION, "ReturnsService_Preview", sessionId, routeId, [Document]);
}
// Return type: void
static HandleApprovalRequest ( sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.ACTION, "ReturnsService_HandleApprovalRequest", sessionId, routeId, [null]);
}
}
export class CashDiscountsService{
// Return type: SAPB1.CashDiscountParams[]
static GetCashDiscountList ( sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.ACTION, "CashDiscountsService_GetCashDiscountList", sessionId, routeId, [null]);
}
}
export class InventoryCountingsService{
// Return type: SAPB1.InventoryCountingParams[]
static GetList ( sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.ACTION, "InventoryCountingsService_GetList", sessionId, routeId, [null]);
}
}
export class PurchaseDeliveryNotesService{
// Return type: SAPB1.Document
static GetApprovalTemplates (Document: SAPB1.Document, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.ACTION, "PurchaseDeliveryNotesService_GetApprovalTemplates", sessionId, routeId, [Document]);
}
// Return type: SAPB1.Document
static Preview (Document: SAPB1.Document, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.ACTION, "PurchaseDeliveryNotesService_Preview", sessionId, routeId, [Document]);
}
// Return type: void
static HandleApprovalRequest ( sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.ACTION, "PurchaseDeliveryNotesService_HandleApprovalRequest", sessionId, routeId, [null]);
}
}
export class UserMenuService{
// Return type: SAPB1.UserMenuItem[]
static GetCurrentUserMenu ( sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.ACTION, "UserMenuService_GetCurrentUserMenu", sessionId, routeId, [null]);
}
// Return type: void
static UpdateCurrentUserMenu (UserMenuItems: SAPB1.UserMenuItem[], sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.ACTION, "UserMenuService_UpdateCurrentUserMenu", sessionId, routeId, [UserMenuItems]);
}
// Return type: SAPB1.UserMenuItem[]
static GetUserMenu (UserMenuParams: SAPB1.UserMenuParams, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.ACTION, "UserMenuService_GetUserMenu", sessionId, routeId, [UserMenuParams]);
}
// Return type: void
static UpdateUserMenu (UserMenuParams: SAPB1.UserMenuParams,UserMenuItems: SAPB1.UserMenuItem[], sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.ACTION, "UserMenuService_UpdateUserMenu", sessionId, routeId, [UserMenuParams,UserMenuItems]);
}
}
export class ServiceCallProblemTypesService{
// Return type: SAPB1.ServiceCallProblemTypeParams[]
static GetServiceCallProblemTypeList ( sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.ACTION, "ServiceCallProblemTypesService_GetServiceCallProblemTypeList", sessionId, routeId, [null]);
}
}
export class LicenseService{
// Return type: string
static GetInstallationNumber ( sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.ACTION, "LicenseService_GetInstallationNumber", sessionId, routeId, [null]);
}
}
export class TaxWebSitesService{
// Return type: SAPB1.TaxWebSiteParams[]
static GetTaxWebSiteList ( sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.ACTION, "TaxWebSitesService_GetTaxWebSiteList", sessionId, routeId, [null]);
}
// Return type: SAPB1.TaxWebSiteParams
static GetDefaultWebSite ( sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.ACTION, "TaxWebSitesService_GetDefaultWebSite", sessionId, routeId, [null]);
}
}
export class BrazilFuelIndexersService{
// Return type: SAPB1.BrazilFuelIndexerParams[]
static GetList ( sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.ACTION, "BrazilFuelIndexersService_GetList", sessionId, routeId, [null]);
}
}
export class DeterminationCriteriasService{
// Return type: SAPB1.DeterminationCriteriaParams[]
static GetList ( sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.ACTION, "DeterminationCriteriasService_GetList", sessionId, routeId, [null]);
}
}
export class ServiceGroupsService{
// Return type: SAPB1.ServiceGroupParams[]
static GetServiceGroupList ( sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.ACTION, "ServiceGroupsService_GetServiceGroupList", sessionId, routeId, [null]);
}
}
export class DraftsService{
// Return type: SAPB1.Document
static GetApprovalTemplates (Document: SAPB1.Document, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.ACTION, "DraftsService_GetApprovalTemplates", sessionId, routeId, [Document]);
}
// Return type: SAPB1.Document
static Preview (Document: SAPB1.Document, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.ACTION, "DraftsService_Preview", sessionId, routeId, [Document]);
}
// Return type: void
static HandleApprovalRequest ( sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.ACTION, "DraftsService_HandleApprovalRequest", sessionId, routeId, [null]);
}
}
export class CorrectionInvoiceReversalService{
// Return type: SAPB1.Document
static GetApprovalTemplates (Document: SAPB1.Document, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.ACTION, "CorrectionInvoiceReversalService_GetApprovalTemplates", sessionId, routeId, [Document]);
}
// Return type: SAPB1.Document
static Preview (Document: SAPB1.Document, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.ACTION, "CorrectionInvoiceReversalService_Preview", sessionId, routeId, [Document]);
}
// Return type: void
static HandleApprovalRequest ( sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.ACTION, "CorrectionInvoiceReversalService_HandleApprovalRequest", sessionId, routeId, [null]);
}
}
export class ReportTypesService{
// Return type: SAPB1.ReportTypeParams[]
static GetReportTypeList ( sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.ACTION, "ReportTypesService_GetReportTypeList", sessionId, routeId, [null]);
}
}
export class GTIsService{
// Return type: SAPB1.GTIParams[]
static Import (GTIParams: SAPB1.GTIParams, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.ACTION, "GTIsService_Import", sessionId, routeId, [GTIParams]);
}
}
export class AssetRetirementService{
// Return type: void
static Cancel (AssetDocumentParams: SAPB1.AssetDocumentParams, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.ACTION, "AssetRetirementService_Cancel", sessionId, routeId, [AssetDocumentParams]);
}
// Return type: SAPB1.AssetDocumentParams[]
static GetList ( sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.ACTION, "AssetRetirementService_GetList", sessionId, routeId, [null]);
}
}
export class NFTaxCategoriesService{
// Return type: SAPB1.NFTaxCategoryParams[]
static GetList ( sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.ACTION, "NFTaxCategoriesService_GetList", sessionId, routeId, [null]);
}
}
export class FinancialYearsService{
// Return type: SAPB1.FinancialYearParams[]
static GetFinancialYearList ( sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.ACTION, "FinancialYearsService_GetFinancialYearList", sessionId, routeId, [null]);
}
}
export class MaterialGroupsService{
// Return type: SAPB1.MaterialGroupParams[]
static GetMaterialGroupList ( sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.ACTION, "MaterialGroupsService_GetMaterialGroupList", sessionId, routeId, [null]);
}
}
export class SectionsService{
// Return type: SAPB1.SectionParams[]
static GetSectionList ( sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.ACTION, "SectionsService_GetSectionList", sessionId, routeId, [null]);
}
}
export class WorkflowTaskService{
// Return type: void
static Complete (WorkflowTaskCompleteParams: SAPB1.WorkflowTaskCompleteParams, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.ACTION, "WorkflowTaskService_Complete", sessionId, routeId, [WorkflowTaskCompleteParams]);
}
// Return type: SAPB1.WorkflowTask[]
static GetApprovalTaskList (WorkflowApprovalTaskListParams: SAPB1.WorkflowApprovalTaskListParams, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.ACTION, "WorkflowTaskService_GetApprovalTaskList", sessionId, routeId, [WorkflowApprovalTaskListParams]);
}
}
export class AssetCapitalizationCreditMemoService{
// Return type: void
static Cancel (AssetDocumentParams: SAPB1.AssetDocumentParams, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.ACTION, "AssetCapitalizationCreditMemoService_Cancel", sessionId, routeId, [AssetDocumentParams]);
}
// Return type: SAPB1.AssetDocumentParams[]
static GetList ( sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.ACTION, "AssetCapitalizationCreditMemoService_GetList", sessionId, routeId, [null]);
}
}
export class ChangeLogsService{
// Return type: SAPB1.ChangeLogParams[]
static GetChangeLog (GetChangeLogParams: SAPB1.GetChangeLogParams, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.ACTION, "ChangeLogsService_GetChangeLog", sessionId, routeId, [GetChangeLogParams]);
}
// Return type: SAPB1.ChangeLogDifferenceParams[]
static GetChangeLogDifferences (ShowDifferenceParams: SAPB1.ShowDifferenceParams, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.ACTION, "ChangeLogsService_GetChangeLogDifferences", sessionId, routeId, [ShowDifferenceParams]);
}
}
export class AssetGroupsService{
// Return type: SAPB1.AssetGroupParams[]
static GetList ( sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.ACTION, "AssetGroupsService_GetList", sessionId, routeId, [null]);
}
}
export class CreditLinesService{
// Return type: SAPB1.CreditLine
static GetCreditLine (CreditLineParams: SAPB1.CreditLineParams, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.ACTION, "CreditLinesService_GetCreditLine", sessionId, routeId, [CreditLineParams]);
}
// Return type: SAPB1.CreditLineParams[]
static GetValidCreditLineList ( sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.ACTION, "CreditLinesService_GetValidCreditLineList", sessionId, routeId, [null]);
}
}
export class CampaignResponseTypeService{
// Return type: SAPB1.CampaignResponseTypeParams[]
static GetResponseTypeList ( sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.ACTION, "CampaignResponseTypeService_GetResponseTypeList", sessionId, routeId, [null]);
}
}
export class BusinessPartnerPropertiesService{
// Return type: SAPB1.BusinessPartnerPropertyParams[]
static GetBusinessPartnerPropertyList ( sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.ACTION, "BusinessPartnerPropertiesService_GetBusinessPartnerPropertyList", sessionId, routeId, [null]);
}
}
export class BOEPortfoliosService{
// Return type: SAPB1.BOEPortfolioParams[]
static GetBOEPortfolioList ( sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.ACTION, "BOEPortfoliosService_GetBOEPortfolioList", sessionId, routeId, [null]);
}
}
export class NCMCodesSetupService{
// Return type: SAPB1.NCMCodeSetupParams[]
static GetNCMCodeSetupList ( sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.ACTION, "NCMCodesSetupService_GetNCMCodeSetupList", sessionId, routeId, [null]);
}
}
export class TransactionCodesService{
// Return type: SAPB1.TransactionCodeParams[]
static GetList ( sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.ACTION, "TransactionCodesService_GetList", sessionId, routeId, [null]);
}
}
export class JournalVouchersService{
// Return type: void
static Add (JournalVoucher: SAPB1.JournalEntry[], sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.ACTION, "JournalVouchersService_Add", sessionId, routeId, [JournalVoucher]);
}
}
export class AssetTransferService{
// Return type: void
static Cancel (AssetDocumentParams: SAPB1.AssetDocumentParams, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.ACTION, "AssetTransferService_Cancel", sessionId, routeId, [AssetDocumentParams]);
}
// Return type: SAPB1.AssetDocumentParams[]
static GetList ( sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.ACTION, "AssetTransferService_GetList", sessionId, routeId, [null]);
}
}
export class UnitOfMeasurementsService{
// Return type: SAPB1.UnitOfMeasurementParams[]
static GetList ( sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.ACTION, "UnitOfMeasurementsService_GetList", sessionId, routeId, [null]);
}
}
export class ExtendedTranslationsService{
// Return type: SAPB1.ExtendedTranslationParams[]
static GetExtendedTranslationList ( sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.ACTION, "ExtendedTranslationsService_GetExtendedTranslationList", sessionId, routeId, [null]);
}
}
export class ReportFilterService{
// Return type: SAPB1.TaxReportFilterParams[]
static GetTaxReportFilterList (TaxReportFilterParams: SAPB1.TaxReportFilterParams, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.ACTION, "ReportFilterService_GetTaxReportFilterList", sessionId, routeId, [TaxReportFilterParams]);
}
}
export class PaymentBlocksService{
// Return type: SAPB1.PaymentBlockParams[]
static GetPaymentBlockList ( sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.ACTION, "PaymentBlocksService_GetPaymentBlockList", sessionId, routeId, [null]);
}
}
export class OccurrenceCodesService{
// Return type: SAPB1.OccurenceCodeParams[]
static GetList ( sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.ACTION, "OccurrenceCodesService_GetList", sessionId, routeId, [null]);
}
}
export class AttributeGroupsService{
// Return type: SAPB1.AttributeGroupParams[]
static GetList ( sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.ACTION, "AttributeGroupsService_GetList", sessionId, routeId, [null]);
}
}
export class IntrastatConfigurationService{
// Return type: SAPB1.IntrastatConfigurationParams[]
static GetList ( sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.ACTION, "IntrastatConfigurationService_GetList", sessionId, routeId, [null]);
}
}
export class BlanketAgreementsService{
// Return type: SAPB1.BlanketAgreementParams[]
static GetBlanketAgreementList ( sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.ACTION, "BlanketAgreementsService_GetBlanketAgreementList", sessionId, routeId, [null]);
}
}
export class CorrectionInvoiceService{
// Return type: SAPB1.Document
static GetApprovalTemplates (Document: SAPB1.Document, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.ACTION, "CorrectionInvoiceService_GetApprovalTemplates", sessionId, routeId, [Document]);
}
// Return type: SAPB1.Document
static Preview (Document: SAPB1.Document, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.ACTION, "CorrectionInvoiceService_Preview", sessionId, routeId, [Document]);
}
// Return type: void
static HandleApprovalRequest ( sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.ACTION, "CorrectionInvoiceService_HandleApprovalRequest", sessionId, routeId, [null]);
}
}
export class TaxCodeDeterminationsService{
// Return type: SAPB1.TaxCodeDeterminationParams[]
static GetTaxCodeDeterminationList ( sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.ACTION, "TaxCodeDeterminationsService_GetTaxCodeDeterminationList", sessionId, routeId, [null]);
}
}
export class InventoryTransferRequestsService{
// Return type: SAPB1.StockTransfer
static GetApprovalTemplates (StockTransfer: SAPB1.StockTransfer, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.ACTION, "InventoryTransferRequestsService_GetApprovalTemplates", sessionId, routeId, [StockTransfer]);
}
// Return type: void
static HandleApprovalRequest ( sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.ACTION, "InventoryTransferRequestsService_HandleApprovalRequest", sessionId, routeId, [null]);
}
}
export class BankChargesAllocationCodesService{
// Return type: SAPB1.BankChargesAllocationCodeParams[]
static GetBankChargesAllocationCodeList ( sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.ACTION, "BankChargesAllocationCodesService_GetBankChargesAllocationCodeList", sessionId, routeId, [null]);
}
}
export class QuotationsService{
// Return type: SAPB1.Document
static GetApprovalTemplates (Document: SAPB1.Document, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.ACTION, "QuotationsService_GetApprovalTemplates", sessionId, routeId, [Document]);
}
// Return type: SAPB1.Document
static Preview (Document: SAPB1.Document, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.ACTION, "QuotationsService_Preview", sessionId, routeId, [Document]);
}
// Return type: void
static HandleApprovalRequest ( sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.ACTION, "QuotationsService_HandleApprovalRequest", sessionId, routeId, [null]);
}
}
export class ApprovalTemplatesService{
// Return type: SAPB1.ApprovalTemplateParams[]
static GetApprovalTemplateList ( sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.ACTION, "ApprovalTemplatesService_GetApprovalTemplateList", sessionId, routeId, [null]);
}
}
export class TargetGroupsService{
// Return type: SAPB1.TargetGroupParams[]
static GetList ( sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.ACTION, "TargetGroupsService_GetList", sessionId, routeId, [null]);
}
}
export class BOELinesService{
// Return type: SAPB1.BOELine
static GetBOELine (BOELineParams: SAPB1.BOELineParams, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.ACTION, "BOELinesService_GetBOELine", sessionId, routeId, [BOELineParams]);
}
}
export class BOEInstructionsService{
// Return type: SAPB1.BOEInstructionParams[]
static GetBOEInstructionList ( sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.ACTION, "BOEInstructionsService_GetBOEInstructionList", sessionId, routeId, [null]);
}
}
export class AccrualTypesService{
// Return type: SAPB1.AccrualTypeParams[]
static GetAccrualTypeList ( sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.ACTION, "AccrualTypesService_GetAccrualTypeList", sessionId, routeId, [null]);
}
}
export class BOEDocumentTypesService{
// Return type: SAPB1.BOEDocumentTypeParams[]
static GetBOEDocumentTypeList ( sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.ACTION, "BOEDocumentTypesService_GetBOEDocumentTypeList", sessionId, routeId, [null]);
}
}
export class EmployeeRolesSetupService{
// Return type: SAPB1.EmployeeRoleSetupParams[]
static GetEmployeeRoleSetupList ( sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.ACTION, "EmployeeRolesSetupService_GetEmployeeRoleSetupList", sessionId, routeId, [null]);
}
}
export class StatesService{
// Return type: SAPB1.StateParams[]
static GetStateList ( sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.ACTION, "StatesService_GetStateList", sessionId, routeId, [null]);
}
}
export class ActivitiesService{
// Return type: SAPB1.ActivityParams[]
static GetActivityList ( sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.ACTION, "ActivitiesService_GetActivityList", sessionId, routeId, [null]);
}
// Return type: SAPB1.Activity
static GetSingleInstanceFromSeries (ActivityInstanceParams: SAPB1.ActivityInstanceParams, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.ACTION, "ActivitiesService_GetSingleInstanceFromSeries", sessionId, routeId, [ActivityInstanceParams]);
}
// Return type: SAPB1.ActivityParams
static UpdateSingleInstanceInSeries (Activity: SAPB1.Activity, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.ACTION, "ActivitiesService_UpdateSingleInstanceInSeries", sessionId, routeId, [Activity]);
}
// Return type: void
static DeleteSingleInstanceFromSeries (ActivityInstanceParams: SAPB1.ActivityInstanceParams, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.ACTION, "ActivitiesService_DeleteSingleInstanceFromSeries", sessionId, routeId, [ActivityInstanceParams]);
}
// Return type: SAPB1.ActivityInstanceParams[]
static GetTopNActivityInstances (ActivityInstancesListParams: SAPB1.ActivityInstancesListParams, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.ACTION, "ActivitiesService_GetTopNActivityInstances", sessionId, routeId, [ActivityInstancesListParams]);
}
}
export class DownPaymentsService{
// Return type: SAPB1.Document
static GetApprovalTemplates (Document: SAPB1.Document, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.ACTION, "DownPaymentsService_GetApprovalTemplates", sessionId, routeId, [Document]);
}
// Return type: SAPB1.Document
static Preview (Document: SAPB1.Document, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.ACTION, "DownPaymentsService_Preview", sessionId, routeId, [Document]);
}
// Return type: void
static HandleApprovalRequest ( sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.ACTION, "DownPaymentsService_HandleApprovalRequest", sessionId, routeId, [null]);
}
}
export class SalesOpportunityInterestsSetupService{
// Return type: SAPB1.SalesOpportunityInterestSetupParams[]
static GetSalesOpportunityInterestSetupList ( sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.ACTION, "SalesOpportunityInterestsSetupService_GetSalesOpportunityInterestSetupList", sessionId, routeId, [null]);
}
}
export class ApprovalStagesService{
// Return type: SAPB1.ApprovalStageParams[]
static GetApprovalStageList ( sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.ACTION, "ApprovalStagesService_GetApprovalStageList", sessionId, routeId, [null]);
}
}
export class ServiceCallSolutionStatusService{
// Return type: SAPB1.ServiceCallSolutionStatusParams[]
static GetServiceCallSolutionStatusList ( sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.ACTION, "ServiceCallSolutionStatusService_GetServiceCallSolutionStatusList", sessionId, routeId, [null]);
}
}
export class DeductionTaxSubGroupsService{
// Return type: SAPB1.DeductionTaxSubGroupParams[]
static GetDeductionTaxSubGroupList ( sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.ACTION, "DeductionTaxSubGroupsService_GetDeductionTaxSubGroupList", sessionId, routeId, [null]);
}
}
export class DashboardPackagesService{
// Return type: SAPB1.DashboardPackageParams
static ImportDashboardPackage (DashboardPackageImportParams: SAPB1.DashboardPackageImportParams, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.ACTION, "DashboardPackagesService_ImportDashboardPackage", sessionId, routeId, [DashboardPackageImportParams]);
}
}
export class PaymentCalculationService{
// Return type: SAPB1.PaymentAmountParams[]
static GetPaymentAmount (PaymentBPCode: SAPB1.PaymentBPCode,PaymentInvoiceEntries: SAPB1.PaymentInvoiceEntry[], sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.ACTION, "PaymentCalculationService_GetPaymentAmount", sessionId, routeId, [PaymentBPCode,PaymentInvoiceEntries]);
}
}
export class FixedAssetItemsService{
// Return type: SAPB1.FixedAssetValues[]
static GetAssetValuesList (FixedAssetValuesParams: SAPB1.FixedAssetValuesParams, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.ACTION, "FixedAssetItemsService_GetAssetValuesList", sessionId, routeId, [FixedAssetValuesParams]);
}
// Return type: SAPB1.FixedAssetEndBalance
static GetAssetEndBalance (FixedAssetValuesParams: SAPB1.FixedAssetValuesParams, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.ACTION, "FixedAssetItemsService_GetAssetEndBalance", sessionId, routeId, [FixedAssetValuesParams]);
}
// Return type: void
static UpdateAssetEndBalance (FixedAssetValuesParams: SAPB1.FixedAssetValuesParams,FixedAssetEndBalance: SAPB1.FixedAssetEndBalance, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.ACTION, "FixedAssetItemsService_UpdateAssetEndBalance", sessionId, routeId, [FixedAssetValuesParams,FixedAssetEndBalance]);
}
}
export class CampaignsService{
// Return type: SAPB1.CampaignParams[]
static GetList ( sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.ACTION, "CampaignsService_GetList", sessionId, routeId, [null]);
}
}
export class MessagesService{
// Return type: SAPB1.MessageHeader[]
static GetInbox ( sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.ACTION, "MessagesService_GetInbox", sessionId, routeId, [null]);
}
// Return type: SAPB1.MessageHeader[]
static GetOutbox ( sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.ACTION, "MessagesService_GetOutbox", sessionId, routeId, [null]);
}
// Return type: SAPB1.MessageHeader[]
static GetSentMessages ( sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.ACTION, "MessagesService_GetSentMessages", sessionId, routeId, [null]);
}
}
export class SalesOpportunityCompetitorsSetupService{
// Return type: SAPB1.SalesOpportunityCompetitorSetupParams[]
static GetSalesOpportunityCompetitorSetupList ( sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.ACTION, "SalesOpportunityCompetitorsSetupService_GetSalesOpportunityCompetitorSetupList", sessionId, routeId, [null]);
}
}
export class AlternativeItemsService{
// Return type: SAPB1.OriginalItemParams
static AddItem (OriginalItem: SAPB1.OriginalItem, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.ACTION, "AlternativeItemsService_AddItem", sessionId, routeId, [OriginalItem]);
}
// Return type: void
static UpdateItem (OriginalItem: SAPB1.OriginalItem, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.ACTION, "AlternativeItemsService_UpdateItem", sessionId, routeId, [OriginalItem]);
}
// Return type: void
static DeleteItem (OriginalItemParams: SAPB1.OriginalItemParams, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.ACTION, "AlternativeItemsService_DeleteItem", sessionId, routeId, [OriginalItemParams]);
}
// Return type: SAPB1.OriginalItem
static GetItem (OriginalItemParams: SAPB1.OriginalItemParams, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.ACTION, "AlternativeItemsService_GetItem", sessionId, routeId, [OriginalItemParams]);
}
}
export class ServiceCallProblemSubTypesService{
// Return type: SAPB1.ServiceCallProblemSubTypeParams[]
static GetServiceCallProblemSubTypeList ( sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.ACTION, "ServiceCallProblemSubTypesService_GetServiceCallProblemSubTypeList", sessionId, routeId, [null]);
}
}
export class BinLocationAttributesService{
// Return type: SAPB1.BinLocationAttributeParams[]
static GetList ( sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.ACTION, "BinLocationAttributesService_GetList", sessionId, routeId, [null]);
}
}
export class TrackingNotesService{
// Return type: SAPB1.TrackingNoteParams[]
static GetList ( sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.ACTION, "TrackingNotesService_GetList", sessionId, routeId, [null]);
}
}
export class ChartOfAccountsEntity{
static Add(obj: SAPB1.ChartOfAccount, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.ADD, "ChartOfAccounts", sessionId, routeId, [obj]);
}
static Update(obj: SAPB1.ChartOfAccount, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.UPDATE, "ChartOfAccounts('" + obj.Code + "')", sessionId, routeId, [obj]);
}
static Delete(obj: SAPB1.ChartOfAccountKey, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.DELETE, "ChartOfAccounts('" + obj.Code + "')", sessionId, routeId, [obj]);
}
static Get(obj: SAPB1.ChartOfAccountKey, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.GET, "ChartOfAccounts('" + obj.Code + "')", sessionId, routeId, [obj]);
}
}
export class BusinessPartnerGroupsEntity{
static Add(obj: SAPB1.BusinessPartnerGroup, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.ADD, "BusinessPartnerGroups", sessionId, routeId, [obj]);
}
static Update(obj: SAPB1.BusinessPartnerGroup, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.UPDATE, "BusinessPartnerGroups(" + obj.Code + ")", sessionId, routeId, [obj]);
}
static Delete(obj: SAPB1.BusinessPartnerGroupKey, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.DELETE, "BusinessPartnerGroups(" + obj.Code + ")", sessionId, routeId, [obj]);
}
static Get(obj: SAPB1.BusinessPartnerGroupKey, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.GET, "BusinessPartnerGroups(" + obj.Code + ")", sessionId, routeId, [obj]);
}
}
export class SalesOpportunitySourcesSetupEntity{
static Add(obj: SAPB1.SalesOpportunitySourceSetup, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.ADD, "SalesOpportunitySourcesSetup", sessionId, routeId, [obj]);
}
static Update(obj: SAPB1.SalesOpportunitySourceSetup, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.UPDATE, "SalesOpportunitySourcesSetup(" + obj.SequenceNo + ")", sessionId, routeId, [obj]);
}
static Delete(obj: SAPB1.SalesOpportunitySourceSetupKey, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.DELETE, "SalesOpportunitySourcesSetup(" + obj.SequenceNo + ")", sessionId, routeId, [obj]);
}
static Get(obj: SAPB1.SalesOpportunitySourceSetupKey, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.GET, "SalesOpportunitySourcesSetup(" + obj.SequenceNo + ")", sessionId, routeId, [obj]);
}
}
export class BankStatementsEntity{
static Add(obj: SAPB1.BankStatement, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.ADD, "BankStatements", sessionId, routeId, [obj]);
}
static Update(obj: SAPB1.BankStatement, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.UPDATE, "BankStatements(" + obj.InternalNumber + ")", sessionId, routeId, [obj]);
}
static Delete(obj: SAPB1.BankStatementKey, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.DELETE, "BankStatements(" + obj.InternalNumber + ")", sessionId, routeId, [obj]);
}
static Get(obj: SAPB1.BankStatementKey, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.GET, "BankStatements(" + obj.InternalNumber + ")", sessionId, routeId, [obj]);
}
}
export class BatchNumberDetailsEntity{
static Add(obj: SAPB1.BatchNumberDetail, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.ADD, "BatchNumberDetails", sessionId, routeId, [obj]);
}
static Update(obj: SAPB1.BatchNumberDetail, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.UPDATE, "BatchNumberDetails(" + obj.DocEntry + ")", sessionId, routeId, [obj]);
}
static Delete(obj: SAPB1.BatchNumberDetailKey, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.DELETE, "BatchNumberDetails(" + obj.DocEntry + ")", sessionId, routeId, [obj]);
}
static Get(obj: SAPB1.BatchNumberDetailKey, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.GET, "BatchNumberDetails(" + obj.DocEntry + ")", sessionId, routeId, [obj]);
}
}
export class SerialNumberDetailsEntity{
static Add(obj: SAPB1.SerialNumberDetail, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.ADD, "SerialNumberDetails", sessionId, routeId, [obj]);
}
static Update(obj: SAPB1.SerialNumberDetail, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.UPDATE, "SerialNumberDetails(" + obj.DocEntry + ")", sessionId, routeId, [obj]);
}
static Delete(obj: SAPB1.SerialNumberDetailKey, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.DELETE, "SerialNumberDetails(" + obj.DocEntry + ")", sessionId, routeId, [obj]);
}
static Get(obj: SAPB1.SerialNumberDetailKey, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.GET, "SerialNumberDetails(" + obj.DocEntry + ")", sessionId, routeId, [obj]);
}
}
export class InventoryPostingsEntity{
static Add(obj: SAPB1.InventoryPosting, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.ADD, "InventoryPostings", sessionId, routeId, [obj]);
}
static Update(obj: SAPB1.InventoryPosting, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.UPDATE, "InventoryPostings(" + obj.DocumentEntry + ")", sessionId, routeId, [obj]);
}
static Delete(obj: SAPB1.InventoryPostingKey, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.DELETE, "InventoryPostings(" + obj.DocumentEntry + ")", sessionId, routeId, [obj]);
}
static Get(obj: SAPB1.InventoryPostingKey, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.GET, "InventoryPostings(" + obj.DocumentEntry + ")", sessionId, routeId, [obj]);
}
}
export class FinancialYearsEntity{
static Add(obj: SAPB1.FinancialYear, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.ADD, "FinancialYears", sessionId, routeId, [obj]);
}
static Update(obj: SAPB1.FinancialYear, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.UPDATE, "FinancialYears(" + obj.AbsEntry + ")", sessionId, routeId, [obj]);
}
static Delete(obj: SAPB1.FinancialYearKey, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.DELETE, "FinancialYears(" + obj.AbsEntry + ")", sessionId, routeId, [obj]);
}
static Get(obj: SAPB1.FinancialYearKey, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.GET, "FinancialYears(" + obj.AbsEntry + ")", sessionId, routeId, [obj]);
}
}
export class SectionsEntity{
static Add(obj: SAPB1.Section, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.ADD, "Sections", sessionId, routeId, [obj]);
}
static Update(obj: SAPB1.Section, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.UPDATE, "Sections(" + obj.AbsEntry + ")", sessionId, routeId, [obj]);
}
static Delete(obj: SAPB1.SectionKey, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.DELETE, "Sections(" + obj.AbsEntry + ")", sessionId, routeId, [obj]);
}
static Get(obj: SAPB1.SectionKey, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.GET, "Sections(" + obj.AbsEntry + ")", sessionId, routeId, [obj]);
}
}
export class CertificateSeriesEntity{
static Add(obj: SAPB1.CertificateSeries, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.ADD, "CertificateSeries", sessionId, routeId, [obj]);
}
static Update(obj: SAPB1.CertificateSeries, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.UPDATE, "CertificateSeries(" + obj.AbsEntry + ")", sessionId, routeId, [obj]);
}
static Delete(obj: SAPB1.CertificateSeriesKey, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.DELETE, "CertificateSeries(" + obj.AbsEntry + ")", sessionId, routeId, [obj]);
}
static Get(obj: SAPB1.CertificateSeriesKey, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.GET, "CertificateSeries(" + obj.AbsEntry + ")", sessionId, routeId, [obj]);
}
}
export class NatureOfAssesseesEntity{
static Add(obj: SAPB1.NatureOfAssessee, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.ADD, "NatureOfAssessees", sessionId, routeId, [obj]);
}
static Update(obj: SAPB1.NatureOfAssessee, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.UPDATE, "NatureOfAssessees(" + obj.AbsEntry + ")", sessionId, routeId, [obj]);
}
static Delete(obj: SAPB1.NatureOfAssesseeKey, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.DELETE, "NatureOfAssessees(" + obj.AbsEntry + ")", sessionId, routeId, [obj]);
}
static Get(obj: SAPB1.NatureOfAssesseeKey, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.GET, "NatureOfAssessees(" + obj.AbsEntry + ")", sessionId, routeId, [obj]);
}
}
export class ReportTypesEntity{
static Add(obj: SAPB1.ReportType, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.ADD, "ReportTypes", sessionId, routeId, [obj]);
}
static Update(obj: SAPB1.ReportType, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.UPDATE, "ReportTypes('" + obj.TypeCode + "')", sessionId, routeId, [obj]);
}
static Delete(obj: SAPB1.ReportTypeKey, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.DELETE, "ReportTypes('" + obj.TypeCode + "')", sessionId, routeId, [obj]);
}
static Get(obj: SAPB1.ReportTypeKey, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.GET, "ReportTypes('" + obj.TypeCode + "')", sessionId, routeId, [obj]);
}
}
export class UnitOfMeasurementGroupsEntity{
static Add(obj: SAPB1.UnitOfMeasurementGroup, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.ADD, "UnitOfMeasurementGroups", sessionId, routeId, [obj]);
}
static Update(obj: SAPB1.UnitOfMeasurementGroup, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.UPDATE, "UnitOfMeasurementGroups(" + obj.AbsEntry + ")", sessionId, routeId, [obj]);
}
static Delete(obj: SAPB1.UnitOfMeasurementGroupKey, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.DELETE, "UnitOfMeasurementGroups(" + obj.AbsEntry + ")", sessionId, routeId, [obj]);
}
static Get(obj: SAPB1.UnitOfMeasurementGroupKey, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.GET, "UnitOfMeasurementGroups(" + obj.AbsEntry + ")", sessionId, routeId, [obj]);
}
}
export class UnitOfMeasurementsEntity{
static Add(obj: SAPB1.UnitOfMeasurement, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.ADD, "UnitOfMeasurements", sessionId, routeId, [obj]);
}
static Update(obj: SAPB1.UnitOfMeasurement, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.UPDATE, "UnitOfMeasurements(" + obj.AbsEntry + ")", sessionId, routeId, [obj]);
}
static Delete(obj: SAPB1.UnitOfMeasurementKey, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.DELETE, "UnitOfMeasurements(" + obj.AbsEntry + ")", sessionId, routeId, [obj]);
}
static Get(obj: SAPB1.UnitOfMeasurementKey, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.GET, "UnitOfMeasurements(" + obj.AbsEntry + ")", sessionId, routeId, [obj]);
}
}
export class BinLocationFieldsEntity{
static Add(obj: SAPB1.BinLocationField, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.ADD, "BinLocationFields", sessionId, routeId, [obj]);
}
static Update(obj: SAPB1.BinLocationField, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.UPDATE, "BinLocationFields(" + obj.AbsEntry + ")", sessionId, routeId, [obj]);
}
static Delete(obj: SAPB1.BinLocationFieldKey, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.DELETE, "BinLocationFields(" + obj.AbsEntry + ")", sessionId, routeId, [obj]);
}
static Get(obj: SAPB1.BinLocationFieldKey, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.GET, "BinLocationFields(" + obj.AbsEntry + ")", sessionId, routeId, [obj]);
}
}
export class BinLocationAttributesEntity{
static Add(obj: SAPB1.BinLocationAttribute, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.ADD, "BinLocationAttributes", sessionId, routeId, [obj]);
}
static Update(obj: SAPB1.BinLocationAttribute, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.UPDATE, "BinLocationAttributes(" + obj.AbsEntry + ")", sessionId, routeId, [obj]);
}
static Delete(obj: SAPB1.BinLocationAttributeKey, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.DELETE, "BinLocationAttributes(" + obj.AbsEntry + ")", sessionId, routeId, [obj]);
}
static Get(obj: SAPB1.BinLocationAttributeKey, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.GET, "BinLocationAttributes(" + obj.AbsEntry + ")", sessionId, routeId, [obj]);
}
}
export class WarehouseSublevelCodesEntity{
static Add(obj: SAPB1.WarehouseSublevelCode, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.ADD, "WarehouseSublevelCodes", sessionId, routeId, [obj]);
}
static Update(obj: SAPB1.WarehouseSublevelCode, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.UPDATE, "WarehouseSublevelCodes(" + obj.AbsEntry + ")", sessionId, routeId, [obj]);
}
static Delete(obj: SAPB1.WarehouseSublevelCodeKey, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.DELETE, "WarehouseSublevelCodes(" + obj.AbsEntry + ")", sessionId, routeId, [obj]);
}
static Get(obj: SAPB1.WarehouseSublevelCodeKey, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.GET, "WarehouseSublevelCodes(" + obj.AbsEntry + ")", sessionId, routeId, [obj]);
}
}
export class BinLocationsEntity{
static Add(obj: SAPB1.BinLocation, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.ADD, "BinLocations", sessionId, routeId, [obj]);
}
static Update(obj: SAPB1.BinLocation, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.UPDATE, "BinLocations(" + obj.AbsEntry + ")", sessionId, routeId, [obj]);
}
static Delete(obj: SAPB1.BinLocationKey, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.DELETE, "BinLocations(" + obj.AbsEntry + ")", sessionId, routeId, [obj]);
}
static Get(obj: SAPB1.BinLocationKey, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.GET, "BinLocations(" + obj.AbsEntry + ")", sessionId, routeId, [obj]);
}
}
export class ActivitiesEntity{
static Add(obj: SAPB1.Activity, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.ADD, "Activities", sessionId, routeId, [obj]);
}
static Update(obj: SAPB1.Activity, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.UPDATE, "Activities(" + obj.ActivityCode + ")", sessionId, routeId, [obj]);
}
static Delete(obj: SAPB1.ActivityKey, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.DELETE, "Activities(" + obj.ActivityCode + ")", sessionId, routeId, [obj]);
}
static Get(obj: SAPB1.ActivityKey, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.GET, "Activities(" + obj.ActivityCode + ")", sessionId, routeId, [obj]);
}
}
export class SalesStagesEntity{
static Add(obj: SAPB1.SalesStage, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.ADD, "SalesStages", sessionId, routeId, [obj]);
}
static Update(obj: SAPB1.SalesStage, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.UPDATE, "SalesStages(" + obj.SequenceNo + ")", sessionId, routeId, [obj]);
}
static Delete(obj: SAPB1.SalesStageKey, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.DELETE, "SalesStages(" + obj.SequenceNo + ")", sessionId, routeId, [obj]);
}
static Get(obj: SAPB1.SalesStageKey, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.GET, "SalesStages(" + obj.SequenceNo + ")", sessionId, routeId, [obj]);
}
}
export class SalesOpportunityReasonsSetupEntity{
static Add(obj: SAPB1.SalesOpportunityReasonSetup, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.ADD, "SalesOpportunityReasonsSetup", sessionId, routeId, [obj]);
}
static Update(obj: SAPB1.SalesOpportunityReasonSetup, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.UPDATE, "SalesOpportunityReasonsSetup(" + obj.SequenceNo + ")", sessionId, routeId, [obj]);
}
static Delete(obj: SAPB1.SalesOpportunityReasonSetupKey, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.DELETE, "SalesOpportunityReasonsSetup(" + obj.SequenceNo + ")", sessionId, routeId, [obj]);
}
static Get(obj: SAPB1.SalesOpportunityReasonSetupKey, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.GET, "SalesOpportunityReasonsSetup(" + obj.SequenceNo + ")", sessionId, routeId, [obj]);
}
}
export class ActivityTypesEntity{
static Add(obj: SAPB1.ActivityType, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.ADD, "ActivityTypes", sessionId, routeId, [obj]);
}
static Update(obj: SAPB1.ActivityType, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.UPDATE, "ActivityTypes(" + obj.Code + ")", sessionId, routeId, [obj]);
}
static Delete(obj: SAPB1.ActivityTypeKey, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.DELETE, "ActivityTypes(" + obj.Code + ")", sessionId, routeId, [obj]);
}
static Get(obj: SAPB1.ActivityTypeKey, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.GET, "ActivityTypes(" + obj.Code + ")", sessionId, routeId, [obj]);
}
}
export class ActivityLocationsEntity{
static Add(obj: SAPB1.ActivityLocation, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.ADD, "ActivityLocations", sessionId, routeId, [obj]);
}
static Update(obj: SAPB1.ActivityLocation, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.UPDATE, "ActivityLocations(" + obj.Code + ")", sessionId, routeId, [obj]);
}
static Delete(obj: SAPB1.ActivityLocationKey, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.DELETE, "ActivityLocations(" + obj.Code + ")", sessionId, routeId, [obj]);
}
static Get(obj: SAPB1.ActivityLocationKey, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.GET, "ActivityLocations(" + obj.Code + ")", sessionId, routeId, [obj]);
}
}
export class PartnersSetupsEntity{
static Add(obj: SAPB1.PartnersSetupParams, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.ADD, "PartnersSetups", sessionId, routeId, [obj]);
}
static Update(obj: SAPB1.PartnersSetupParams, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.UPDATE, "PartnersSetups(" + obj.PartnerID + ")", sessionId, routeId, [obj]);
}
static Delete(obj: SAPB1.PartnersSetupParamsKey, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.DELETE, "PartnersSetups(" + obj.PartnerID + ")", sessionId, routeId, [obj]);
}
static Get(obj: SAPB1.PartnersSetupParamsKey, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.GET, "PartnersSetups(" + obj.PartnerID + ")", sessionId, routeId, [obj]);
}
}
export class SalesOpportunityCompetitorsSetupEntity{
static Add(obj: SAPB1.SalesOpportunityCompetitorSetup, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.ADD, "SalesOpportunityCompetitorsSetup", sessionId, routeId, [obj]);
}
static Update(obj: SAPB1.SalesOpportunityCompetitorSetup, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.UPDATE, "SalesOpportunityCompetitorsSetup(" + obj.SequenceNo + ")", sessionId, routeId, [obj]);
}
static Delete(obj: SAPB1.SalesOpportunityCompetitorSetupKey, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.DELETE, "SalesOpportunityCompetitorsSetup(" + obj.SequenceNo + ")", sessionId, routeId, [obj]);
}
static Get(obj: SAPB1.SalesOpportunityCompetitorSetupKey, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.GET, "SalesOpportunityCompetitorsSetup(" + obj.SequenceNo + ")", sessionId, routeId, [obj]);
}
}
export class DraftsEntity{
static Add(obj: SAPB1.Document, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.ADD, "Drafts", sessionId, routeId, [obj]);
}
static Update(obj: SAPB1.Document, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.UPDATE, "Drafts(" + obj.DocEntry + ")", sessionId, routeId, [obj]);
}
static Delete(obj: SAPB1.DocumentKey, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.DELETE, "Drafts(" + obj.DocEntry + ")", sessionId, routeId, [obj]);
}
static Get(obj: SAPB1.DocumentKey, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.GET, "Drafts(" + obj.DocEntry + ")", sessionId, routeId, [obj]);
}
static Close(obj: SAPB1.Document, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.ACTION, "Drafts(" + obj.DocEntry + ")/Close", sessionId, routeId, [obj]);
}
static Cancel(obj: SAPB1.Document, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.ACTION, "Drafts(" + obj.DocEntry + ")/Cancel", sessionId, routeId, [obj]);
}
static Reopen(obj: SAPB1.Document, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.ACTION, "Drafts(" + obj.DocEntry + ")/Reopen", sessionId, routeId, [obj]);
}
static SaveDraftToDocument(obj: SAPB1.Document, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.ACTION, "Drafts(" + obj.DocEntry + ")/SaveDraftToDocument", sessionId, routeId, [obj]);
}
static CreateCancellationDocument(obj: SAPB1.Document, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.ACTION, "Drafts(" + obj.DocEntry + ")/CreateCancellationDocument", sessionId, routeId, [obj]);
}
}
export class DeductionTaxHierarchiesEntity{
static Add(obj: SAPB1.DeductionTaxHierarchy, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.ADD, "DeductionTaxHierarchies", sessionId, routeId, [obj]);
}
static Update(obj: SAPB1.DeductionTaxHierarchy, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.UPDATE, "DeductionTaxHierarchies(" + obj.AbsEntry + ")", sessionId, routeId, [obj]);
}
static Delete(obj: SAPB1.DeductionTaxHierarchyKey, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.DELETE, "DeductionTaxHierarchies(" + obj.AbsEntry + ")", sessionId, routeId, [obj]);
}
static Get(obj: SAPB1.DeductionTaxHierarchyKey, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.GET, "DeductionTaxHierarchies(" + obj.AbsEntry + ")", sessionId, routeId, [obj]);
}
}
export class TaxWebSitesEntity{
static Add(obj: SAPB1.TaxWebSite, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.ADD, "TaxWebSites", sessionId, routeId, [obj]);
}
static Update(obj: SAPB1.TaxWebSite, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.UPDATE, "TaxWebSites(" + obj.AbsEntry + ")", sessionId, routeId, [obj]);
}
static Delete(obj: SAPB1.TaxWebSiteKey, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.DELETE, "TaxWebSites(" + obj.AbsEntry + ")", sessionId, routeId, [obj]);
}
static Get(obj: SAPB1.TaxWebSiteKey, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.GET, "TaxWebSites(" + obj.AbsEntry + ")", sessionId, routeId, [obj]);
}
static SetAsDefault(obj: SAPB1.TaxWebSite, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.ACTION, "TaxWebSites(" + obj.AbsEntry + ")/SetAsDefault", sessionId, routeId, [obj]);
}
}
export class DeductionTaxGroupsEntity{
static Add(obj: SAPB1.DeductionTaxGroup, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.ADD, "DeductionTaxGroups", sessionId, routeId, [obj]);
}
static Update(obj: SAPB1.DeductionTaxGroup, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.UPDATE, "DeductionTaxGroups(" + obj.GroupKey + ")", sessionId, routeId, [obj]);
}
static Delete(obj: SAPB1.DeductionTaxGroupKey, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.DELETE, "DeductionTaxGroups(" + obj.GroupKey + ")", sessionId, routeId, [obj]);
}
static Get(obj: SAPB1.DeductionTaxGroupKey, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.GET, "DeductionTaxGroups(" + obj.GroupKey + ")", sessionId, routeId, [obj]);
}
}
export class StockTransferDraftsEntity{
static Add(obj: SAPB1.StockTransfer, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.ADD, "StockTransferDrafts", sessionId, routeId, [obj]);
}
static Update(obj: SAPB1.StockTransfer, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.UPDATE, "StockTransferDrafts(" + obj.DocEntry + ")", sessionId, routeId, [obj]);
}
static Delete(obj: SAPB1.StockTransferKey, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.DELETE, "StockTransferDrafts(" + obj.DocEntry + ")", sessionId, routeId, [obj]);
}
static Get(obj: SAPB1.StockTransferKey, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.GET, "StockTransferDrafts(" + obj.DocEntry + ")", sessionId, routeId, [obj]);
}
static Cancel(obj: SAPB1.StockTransfer, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.ACTION, "StockTransferDrafts(" + obj.DocEntry + ")/Cancel", sessionId, routeId, [obj]);
}
static Close(obj: SAPB1.StockTransfer, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.ACTION, "StockTransferDrafts(" + obj.DocEntry + ")/Close", sessionId, routeId, [obj]);
}
static SaveDraftToDocument(obj: SAPB1.StockTransfer, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.ACTION, "StockTransferDrafts(" + obj.DocEntry + ")/SaveDraftToDocument", sessionId, routeId, [obj]);
}
}
export class BranchesEntity{
static Add(obj: SAPB1.Branch, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.ADD, "Branches", sessionId, routeId, [obj]);
}
static Update(obj: SAPB1.Branch, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.UPDATE, "Branches(" + obj.Code + ")", sessionId, routeId, [obj]);
}
static Delete(obj: SAPB1.BranchKey, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.DELETE, "Branches(" + obj.Code + ")", sessionId, routeId, [obj]);
}
static Get(obj: SAPB1.BranchKey, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.GET, "Branches(" + obj.Code + ")", sessionId, routeId, [obj]);
}
}
export class DepartmentsEntity{
static Add(obj: SAPB1.Department, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.ADD, "Departments", sessionId, routeId, [obj]);
}
static Update(obj: SAPB1.Department, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.UPDATE, "Departments(" + obj.Code + ")", sessionId, routeId, [obj]);
}
static Delete(obj: SAPB1.DepartmentKey, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.DELETE, "Departments(" + obj.Code + ")", sessionId, routeId, [obj]);
}
static Get(obj: SAPB1.DepartmentKey, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.GET, "Departments(" + obj.Code + ")", sessionId, routeId, [obj]);
}
}
export class UsersEntity{
static Add(obj: SAPB1.User, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.ADD, "Users", sessionId, routeId, [obj]);
}
static Update(obj: SAPB1.User, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.UPDATE, "Users(" + obj.InternalKey + ")", sessionId, routeId, [obj]);
}
static Delete(obj: SAPB1.UserKey, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.DELETE, "Users(" + obj.InternalKey + ")", sessionId, routeId, [obj]);
}
static Get(obj: SAPB1.UserKey, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.GET, "Users(" + obj.InternalKey + ")", sessionId, routeId, [obj]);
}
static Close(obj: SAPB1.User, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.ACTION, "Users(" + obj.InternalKey + ")/Close", sessionId, routeId, [obj]);
}
}
export class ApprovalStagesEntity{
static Add(obj: SAPB1.ApprovalStage, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.ADD, "ApprovalStages", sessionId, routeId, [obj]);
}
static Update(obj: SAPB1.ApprovalStage, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.UPDATE, "ApprovalStages(" + obj.Code + ")", sessionId, routeId, [obj]);
}
static Delete(obj: SAPB1.ApprovalStageKey, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.DELETE, "ApprovalStages(" + obj.Code + ")", sessionId, routeId, [obj]);
}
static Get(obj: SAPB1.ApprovalStageKey, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.GET, "ApprovalStages(" + obj.Code + ")", sessionId, routeId, [obj]);
}
}
export class ApprovalTemplatesEntity{
static Add(obj: SAPB1.ApprovalTemplate, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.ADD, "ApprovalTemplates", sessionId, routeId, [obj]);
}
static Update(obj: SAPB1.ApprovalTemplate, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.UPDATE, "ApprovalTemplates(" + obj.Code + ")", sessionId, routeId, [obj]);
}
static Delete(obj: SAPB1.ApprovalTemplateKey, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.DELETE, "ApprovalTemplates(" + obj.Code + ")", sessionId, routeId, [obj]);
}
static Get(obj: SAPB1.ApprovalTemplateKey, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.GET, "ApprovalTemplates(" + obj.Code + ")", sessionId, routeId, [obj]);
}
}
export class CockpitsEntity{
static Add(obj: SAPB1.Cockpit, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.ADD, "Cockpits", sessionId, routeId, [obj]);
}
static Update(obj: SAPB1.Cockpit, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.UPDATE, "Cockpits(" + obj.AbsEntry + ")", sessionId, routeId, [obj]);
}
static Delete(obj: SAPB1.CockpitKey, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.DELETE, "Cockpits(" + obj.AbsEntry + ")", sessionId, routeId, [obj]);
}
static Get(obj: SAPB1.CockpitKey, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.GET, "Cockpits(" + obj.AbsEntry + ")", sessionId, routeId, [obj]);
}
}
export class ApprovalRequestsEntity{
static Add(obj: SAPB1.ApprovalRequest, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.ADD, "ApprovalRequests", sessionId, routeId, [obj]);
}
static Update(obj: SAPB1.ApprovalRequest, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.UPDATE, "ApprovalRequests(" + obj.Code + ")", sessionId, routeId, [obj]);
}
static Delete(obj: SAPB1.ApprovalRequestKey, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.DELETE, "ApprovalRequests(" + obj.Code + ")", sessionId, routeId, [obj]);
}
static Get(obj: SAPB1.ApprovalRequestKey, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.GET, "ApprovalRequests(" + obj.Code + ")", sessionId, routeId, [obj]);
}
}
export class AdditionalExpensesEntity{
static Add(obj: SAPB1.AdditionalExpense, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.ADD, "AdditionalExpenses", sessionId, routeId, [obj]);
}
static Update(obj: SAPB1.AdditionalExpense, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.UPDATE, "AdditionalExpenses(" + obj.ExpensCode + ")", sessionId, routeId, [obj]);
}
static Delete(obj: SAPB1.AdditionalExpenseKey, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.DELETE, "AdditionalExpenses(" + obj.ExpensCode + ")", sessionId, routeId, [obj]);
}
static Get(obj: SAPB1.AdditionalExpenseKey, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.GET, "AdditionalExpenses(" + obj.ExpensCode + ")", sessionId, routeId, [obj]);
}
}
export class InventoryTransferRequestsEntity{
static Add(obj: SAPB1.StockTransfer, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.ADD, "InventoryTransferRequests", sessionId, routeId, [obj]);
}
static Update(obj: SAPB1.StockTransfer, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.UPDATE, "InventoryTransferRequests(" + obj.DocEntry + ")", sessionId, routeId, [obj]);
}
static Delete(obj: SAPB1.StockTransferKey, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.DELETE, "InventoryTransferRequests(" + obj.DocEntry + ")", sessionId, routeId, [obj]);
}
static Get(obj: SAPB1.StockTransferKey, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.GET, "InventoryTransferRequests(" + obj.DocEntry + ")", sessionId, routeId, [obj]);
}
static Cancel(obj: SAPB1.StockTransfer, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.ACTION, "InventoryTransferRequests(" + obj.DocEntry + ")/Cancel", sessionId, routeId, [obj]);
}
static Close(obj: SAPB1.StockTransfer, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.ACTION, "InventoryTransferRequests(" + obj.DocEntry + ")/Close", sessionId, routeId, [obj]);
}
static SaveDraftToDocument(obj: SAPB1.StockTransfer, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.ACTION, "InventoryTransferRequests(" + obj.DocEntry + ")/SaveDraftToDocument", sessionId, routeId, [obj]);
}
}
export class BlanketAgreementsEntity{
static Add(obj: SAPB1.BlanketAgreement, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.ADD, "BlanketAgreements", sessionId, routeId, [obj]);
}
static Update(obj: SAPB1.BlanketAgreement, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.UPDATE, "BlanketAgreements(" + obj.AgreementNo + ")", sessionId, routeId, [obj]);
}
static Delete(obj: SAPB1.BlanketAgreementKey, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.DELETE, "BlanketAgreements(" + obj.AgreementNo + ")", sessionId, routeId, [obj]);
}
static Get(obj: SAPB1.BlanketAgreementKey, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.GET, "BlanketAgreements(" + obj.AgreementNo + ")", sessionId, routeId, [obj]);
}
static CancelBlanketAgreement(obj: SAPB1.BlanketAgreement, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.ACTION, "BlanketAgreements(" + obj.AgreementNo + ")/CancelBlanketAgreement", sessionId, routeId, [obj]);
}
static GetRelatedDocuments(obj: SAPB1.BlanketAgreement, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.ACTION, "BlanketAgreements(" + obj.AgreementNo + ")/GetRelatedDocuments", sessionId, routeId, [obj]);
}
}
export class SalesTaxAuthoritiesEntity{
static Add(obj: SAPB1.SalesTaxAuthority, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.ADD, "SalesTaxAuthorities", sessionId, routeId, [obj]);
}
static Update(obj: SAPB1.SalesTaxAuthority, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.UPDATE, "SalesTaxAuthorities(" + obj.Type + ", '" + obj.Code + "')", sessionId, routeId, [obj]);
}
static Delete(obj: SAPB1.SalesTaxAuthorityKey, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.DELETE, "SalesTaxAuthorities(" + obj.Type + ", '" + obj.Code + "')", sessionId, routeId, [obj]);
}
static Get(obj: SAPB1.SalesTaxAuthorityKey, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.GET, "SalesTaxAuthorities(" + obj.Type + ", '" + obj.Code + "')", sessionId, routeId, [obj]);
}
}
export class SalesTaxAuthoritiesTypesEntity{
static Add(obj: SAPB1.SalesTaxAuthoritiesType, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.ADD, "SalesTaxAuthoritiesTypes", sessionId, routeId, [obj]);
}
static Update(obj: SAPB1.SalesTaxAuthoritiesType, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.UPDATE, "SalesTaxAuthoritiesTypes(" + obj.Numerator + ")", sessionId, routeId, [obj]);
}
static Delete(obj: SAPB1.SalesTaxAuthoritiesTypeKey, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.DELETE, "SalesTaxAuthoritiesTypes(" + obj.Numerator + ")", sessionId, routeId, [obj]);
}
static Get(obj: SAPB1.SalesTaxAuthoritiesTypeKey, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.GET, "SalesTaxAuthoritiesTypes(" + obj.Numerator + ")", sessionId, routeId, [obj]);
}
}
export class SalesTaxCodesEntity{
static Add(obj: SAPB1.SalesTaxCode, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.ADD, "SalesTaxCodes", sessionId, routeId, [obj]);
}
static Update(obj: SAPB1.SalesTaxCode, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.UPDATE, "SalesTaxCodes('" + obj.Code + "')", sessionId, routeId, [obj]);
}
static Delete(obj: SAPB1.SalesTaxCodeKey, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.DELETE, "SalesTaxCodes('" + obj.Code + "')", sessionId, routeId, [obj]);
}
static Get(obj: SAPB1.SalesTaxCodeKey, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.GET, "SalesTaxCodes('" + obj.Code + "')", sessionId, routeId, [obj]);
}
}
export class CountriesEntity{
static Add(obj: SAPB1.Country, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.ADD, "Countries", sessionId, routeId, [obj]);
}
static Update(obj: SAPB1.Country, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.UPDATE, "Countries('" + obj.Code + "')", sessionId, routeId, [obj]);
}
static Delete(obj: SAPB1.CountryKey, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.DELETE, "Countries('" + obj.Code + "')", sessionId, routeId, [obj]);
}
static Get(obj: SAPB1.CountryKey, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.GET, "Countries('" + obj.Code + "')", sessionId, routeId, [obj]);
}
}
export class InvoicesEntity{
static Add(obj: SAPB1.Document, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.ADD, "Invoices", sessionId, routeId, [obj]);
}
static Update(obj: SAPB1.Document, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.UPDATE, "Invoices(" + obj.DocEntry + ")", sessionId, routeId, [obj]);
}
static Delete(obj: SAPB1.DocumentKey, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.DELETE, "Invoices(" + obj.DocEntry + ")", sessionId, routeId, [obj]);
}
static Get(obj: SAPB1.DocumentKey, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.GET, "Invoices(" + obj.DocEntry + ")", sessionId, routeId, [obj]);
}
static Close(obj: SAPB1.Document, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.ACTION, "Invoices(" + obj.DocEntry + ")/Close", sessionId, routeId, [obj]);
}
static Cancel(obj: SAPB1.Document, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.ACTION, "Invoices(" + obj.DocEntry + ")/Cancel", sessionId, routeId, [obj]);
}
static Reopen(obj: SAPB1.Document, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.ACTION, "Invoices(" + obj.DocEntry + ")/Reopen", sessionId, routeId, [obj]);
}
static SaveDraftToDocument(obj: SAPB1.Document, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.ACTION, "Invoices(" + obj.DocEntry + ")/SaveDraftToDocument", sessionId, routeId, [obj]);
}
static CreateCancellationDocument(obj: SAPB1.Document, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.ACTION, "Invoices(" + obj.DocEntry + ")/CreateCancellationDocument", sessionId, routeId, [obj]);
}
}
export class StatesEntity{
static Add(obj: SAPB1.State, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.ADD, "States", sessionId, routeId, [obj]);
}
static Update(obj: SAPB1.State, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.UPDATE, "States('" + obj.Code + "', '" + obj.Country + "')", sessionId, routeId, [obj]);
}
static Delete(obj: SAPB1.StateKey, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.DELETE, "States('" + obj.Code + "', '" + obj.Country + "')", sessionId, routeId, [obj]);
}
static Get(obj: SAPB1.StateKey, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.GET, "States('" + obj.Code + "', '" + obj.Country + "')", sessionId, routeId, [obj]);
}
}
export class KPIsEntity{
static Add(obj: SAPB1.KPI, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.ADD, "KPIs", sessionId, routeId, [obj]);
}
static Update(obj: SAPB1.KPI, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.UPDATE, "KPIs('" + obj.KPICode + "')", sessionId, routeId, [obj]);
}
static Delete(obj: SAPB1.KPIKey, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.DELETE, "KPIs('" + obj.KPICode + "')", sessionId, routeId, [obj]);
}
static Get(obj: SAPB1.KPIKey, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.GET, "KPIs('" + obj.KPICode + "')", sessionId, routeId, [obj]);
}
}
export class TargetGroupsEntity{
static Add(obj: SAPB1.TargetGroup, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.ADD, "TargetGroups", sessionId, routeId, [obj]);
}
static Update(obj: SAPB1.TargetGroup, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.UPDATE, "TargetGroups('" + obj.TargetGroupCode + "')", sessionId, routeId, [obj]);
}
static Delete(obj: SAPB1.TargetGroupKey, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.DELETE, "TargetGroups('" + obj.TargetGroupCode + "')", sessionId, routeId, [obj]);
}
static Get(obj: SAPB1.TargetGroupKey, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.GET, "TargetGroups('" + obj.TargetGroupCode + "')", sessionId, routeId, [obj]);
}
}
export class ExtendedTranslationsEntity{
static Add(obj: SAPB1.ExtendedTranslation, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.ADD, "ExtendedTranslations", sessionId, routeId, [obj]);
}
static Update(obj: SAPB1.ExtendedTranslation, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.UPDATE, "ExtendedTranslations(" + obj.DocEntry + ")", sessionId, routeId, [obj]);
}
static Delete(obj: SAPB1.ExtendedTranslationKey, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.DELETE, "ExtendedTranslations(" + obj.DocEntry + ")", sessionId, routeId, [obj]);
}
static Get(obj: SAPB1.ExtendedTranslationKey, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.GET, "ExtendedTranslations(" + obj.DocEntry + ")", sessionId, routeId, [obj]);
}
}
export class CampaignsEntity{
static Add(obj: SAPB1.Campaign, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.ADD, "Campaigns", sessionId, routeId, [obj]);
}
static Update(obj: SAPB1.Campaign, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.UPDATE, "Campaigns(" + obj.CampaignNumber + ")", sessionId, routeId, [obj]);
}
static Delete(obj: SAPB1.CampaignKey, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.DELETE, "Campaigns(" + obj.CampaignNumber + ")", sessionId, routeId, [obj]);
}
static Get(obj: SAPB1.CampaignKey, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.GET, "Campaigns(" + obj.CampaignNumber + ")", sessionId, routeId, [obj]);
}
static Cancel(obj: SAPB1.Campaign, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.ACTION, "Campaigns(" + obj.CampaignNumber + ")/Cancel", sessionId, routeId, [obj]);
}
}
export class RetornoCodesEntity{
static Add(obj: SAPB1.RetornoCode, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.ADD, "RetornoCodes", sessionId, routeId, [obj]);
}
static Update(obj: SAPB1.RetornoCode, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.UPDATE, "RetornoCodes(" + obj.AbsEntry + ")", sessionId, routeId, [obj]);
}
static Delete(obj: SAPB1.RetornoCodeKey, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.DELETE, "RetornoCodes(" + obj.AbsEntry + ")", sessionId, routeId, [obj]);
}
static Get(obj: SAPB1.RetornoCodeKey, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.GET, "RetornoCodes(" + obj.AbsEntry + ")", sessionId, routeId, [obj]);
}
}
export class OccurrenceCodesEntity{
static Add(obj: SAPB1.OccurenceCode, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.ADD, "OccurrenceCodes", sessionId, routeId, [obj]);
}
static Update(obj: SAPB1.OccurenceCode, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.UPDATE, "OccurrenceCodes(" + obj.AbsEntry + ")", sessionId, routeId, [obj]);
}
static Delete(obj: SAPB1.OccurenceCodeKey, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.DELETE, "OccurrenceCodes(" + obj.AbsEntry + ")", sessionId, routeId, [obj]);
}
static Get(obj: SAPB1.OccurenceCodeKey, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.GET, "OccurrenceCodes(" + obj.AbsEntry + ")", sessionId, routeId, [obj]);
}
}
export class CashDiscountsEntity{
static Add(obj: SAPB1.CashDiscount, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.ADD, "CashDiscounts", sessionId, routeId, [obj]);
}
static Update(obj: SAPB1.CashDiscount, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.UPDATE, "CashDiscounts('" + obj.Code + "')", sessionId, routeId, [obj]);
}
static Delete(obj: SAPB1.CashDiscountKey, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.DELETE, "CashDiscounts('" + obj.Code + "')", sessionId, routeId, [obj]);
}
static Get(obj: SAPB1.CashDiscountKey, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.GET, "CashDiscounts('" + obj.Code + "')", sessionId, routeId, [obj]);
}
}
export class QueryCategoriesEntity{
static Add(obj: SAPB1.QueryCategory, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.ADD, "QueryCategories", sessionId, routeId, [obj]);
}
static Update(obj: SAPB1.QueryCategory, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.UPDATE, "QueryCategories(" + obj.Code + ")", sessionId, routeId, [obj]);
}
static Delete(obj: SAPB1.QueryCategoryKey, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.DELETE, "QueryCategories(" + obj.Code + ")", sessionId, routeId, [obj]);
}
static Get(obj: SAPB1.QueryCategoryKey, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.GET, "QueryCategories(" + obj.Code + ")", sessionId, routeId, [obj]);
}
}
export class ResourceCapacitiesEntity{
static Add(obj: SAPB1.ResourceCapacity, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.ADD, "ResourceCapacities", sessionId, routeId, [obj]);
}
static Update(obj: SAPB1.ResourceCapacity, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.UPDATE, "ResourceCapacities(" + obj.Id + ")", sessionId, routeId, [obj]);
}
static Delete(obj: SAPB1.ResourceCapacityKey, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.DELETE, "ResourceCapacities(" + obj.Id + ")", sessionId, routeId, [obj]);
}
static Get(obj: SAPB1.ResourceCapacityKey, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.GET, "ResourceCapacities(" + obj.Id + ")", sessionId, routeId, [obj]);
}
}
export class FactoringIndicatorsEntity{
static Add(obj: SAPB1.FactoringIndicator, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.ADD, "FactoringIndicators", sessionId, routeId, [obj]);
}
static Update(obj: SAPB1.FactoringIndicator, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.UPDATE, "FactoringIndicators('" + obj.IndicatorCode + "')", sessionId, routeId, [obj]);
}
static Delete(obj: SAPB1.FactoringIndicatorKey, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.DELETE, "FactoringIndicators('" + obj.IndicatorCode + "')", sessionId, routeId, [obj]);
}
static Get(obj: SAPB1.FactoringIndicatorKey, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.GET, "FactoringIndicators('" + obj.IndicatorCode + "')", sessionId, routeId, [obj]);
}
}
export class CreditNotesEntity{
static Add(obj: SAPB1.Document, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.ADD, "CreditNotes", sessionId, routeId, [obj]);
}
static Update(obj: SAPB1.Document, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.UPDATE, "CreditNotes(" + obj.DocEntry + ")", sessionId, routeId, [obj]);
}
static Delete(obj: SAPB1.DocumentKey, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.DELETE, "CreditNotes(" + obj.DocEntry + ")", sessionId, routeId, [obj]);
}
static Get(obj: SAPB1.DocumentKey, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.GET, "CreditNotes(" + obj.DocEntry + ")", sessionId, routeId, [obj]);
}
static Close(obj: SAPB1.Document, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.ACTION, "CreditNotes(" + obj.DocEntry + ")/Close", sessionId, routeId, [obj]);
}
static Cancel(obj: SAPB1.Document, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.ACTION, "CreditNotes(" + obj.DocEntry + ")/Cancel", sessionId, routeId, [obj]);
}
static Reopen(obj: SAPB1.Document, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.ACTION, "CreditNotes(" + obj.DocEntry + ")/Reopen", sessionId, routeId, [obj]);
}
static SaveDraftToDocument(obj: SAPB1.Document, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.ACTION, "CreditNotes(" + obj.DocEntry + ")/SaveDraftToDocument", sessionId, routeId, [obj]);
}
static CreateCancellationDocument(obj: SAPB1.Document, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.ACTION, "CreditNotes(" + obj.DocEntry + ")/CreateCancellationDocument", sessionId, routeId, [obj]);
}
}
export class PaymentDraftsEntity{
static Add(obj: SAPB1.Payment, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.ADD, "PaymentDrafts", sessionId, routeId, [obj]);
}
static Update(obj: SAPB1.Payment, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.UPDATE, "PaymentDrafts(" + obj.DocEntry + ")", sessionId, routeId, [obj]);
}
static Delete(obj: SAPB1.PaymentKey, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.DELETE, "PaymentDrafts(" + obj.DocEntry + ")", sessionId, routeId, [obj]);
}
static Get(obj: SAPB1.PaymentKey, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.GET, "PaymentDrafts(" + obj.DocEntry + ")", sessionId, routeId, [obj]);
}
static Cancel(obj: SAPB1.Payment, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.ACTION, "PaymentDrafts(" + obj.DocEntry + ")/Cancel", sessionId, routeId, [obj]);
}
static SaveDraftToDocument(obj: SAPB1.Payment, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.ACTION, "PaymentDrafts(" + obj.DocEntry + ")/SaveDraftToDocument", sessionId, routeId, [obj]);
}
static GetApprovalTemplates(obj: SAPB1.Payment, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.ACTION, "PaymentDrafts(" + obj.DocEntry + ")/GetApprovalTemplates", sessionId, routeId, [obj]);
}
static CancelbyCurrentSystemDate(obj: SAPB1.Payment, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.ACTION, "PaymentDrafts(" + obj.DocEntry + ")/CancelbyCurrentSystemDate", sessionId, routeId, [obj]);
}
}
export class DNFCodeSetupEntity{
static Add(obj: SAPB1.DNFCodeSetup, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.ADD, "DNFCodeSetup", sessionId, routeId, [obj]);
}
static Update(obj: SAPB1.DNFCodeSetup, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.UPDATE, "DNFCodeSetup(" + obj.AbsEntry + ")", sessionId, routeId, [obj]);
}
static Delete(obj: SAPB1.DNFCodeSetupKey, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.DELETE, "DNFCodeSetup(" + obj.AbsEntry + ")", sessionId, routeId, [obj]);
}
static Get(obj: SAPB1.DNFCodeSetupKey, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.GET, "DNFCodeSetup(" + obj.AbsEntry + ")", sessionId, routeId, [obj]);
}
}
export class AccountSegmentationsEntity{
static Add(obj: SAPB1.AccountSegmentation, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.ADD, "AccountSegmentations", sessionId, routeId, [obj]);
}
static Update(obj: SAPB1.AccountSegmentation, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.UPDATE, "AccountSegmentations(" + obj.Numerator + ")", sessionId, routeId, [obj]);
}
static Delete(obj: SAPB1.AccountSegmentationKey, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.DELETE, "AccountSegmentations(" + obj.Numerator + ")", sessionId, routeId, [obj]);
}
static Get(obj: SAPB1.AccountSegmentationKey, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.GET, "AccountSegmentations(" + obj.Numerator + ")", sessionId, routeId, [obj]);
}
}
export class AccountSegmentationCategoriesEntity{
static Add(obj: SAPB1.AccountSegmentationCategory, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.ADD, "AccountSegmentationCategories", sessionId, routeId, [obj]);
}
static Update(obj: SAPB1.AccountSegmentationCategory, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.UPDATE, "AccountSegmentationCategories(" + obj.SegmentID + ", '" + obj.Code + "')", sessionId, routeId, [obj]);
}
static Delete(obj: SAPB1.AccountSegmentationCategoryKey, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.DELETE, "AccountSegmentationCategories(" + obj.SegmentID + ", '" + obj.Code + "')", sessionId, routeId, [obj]);
}
static Get(obj: SAPB1.AccountSegmentationCategoryKey, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.GET, "AccountSegmentationCategories(" + obj.SegmentID + ", '" + obj.Code + "')", sessionId, routeId, [obj]);
}
}
export class WarehouseLocationsEntity{
static Add(obj: SAPB1.WarehouseLocation, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.ADD, "WarehouseLocations", sessionId, routeId, [obj]);
}
static Update(obj: SAPB1.WarehouseLocation, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.UPDATE, "WarehouseLocations(" + obj.Code + ")", sessionId, routeId, [obj]);
}
static Delete(obj: SAPB1.WarehouseLocationKey, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.DELETE, "WarehouseLocations(" + obj.Code + ")", sessionId, routeId, [obj]);
}
static Get(obj: SAPB1.WarehouseLocationKey, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.GET, "WarehouseLocations(" + obj.Code + ")", sessionId, routeId, [obj]);
}
}
export class Forms1099Entity{
static Add(obj: SAPB1.Forms1099, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.ADD, "Forms1099", sessionId, routeId, [obj]);
}
static Update(obj: SAPB1.Forms1099, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.UPDATE, "Forms1099(" + obj.FormCode + ")", sessionId, routeId, [obj]);
}
static Delete(obj: SAPB1.Forms1099Key, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.DELETE, "Forms1099(" + obj.FormCode + ")", sessionId, routeId, [obj]);
}
static Get(obj: SAPB1.Forms1099Key, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.GET, "Forms1099(" + obj.FormCode + ")", sessionId, routeId, [obj]);
}
}
export class InventoryCyclesEntity{
static Add(obj: SAPB1.InventoryCycles, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.ADD, "InventoryCycles", sessionId, routeId, [obj]);
}
static Update(obj: SAPB1.InventoryCycles, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.UPDATE, "InventoryCycles(" + obj.CycleCode + ")", sessionId, routeId, [obj]);
}
static Delete(obj: SAPB1.InventoryCyclesKey, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.DELETE, "InventoryCycles(" + obj.CycleCode + ")", sessionId, routeId, [obj]);
}
static Get(obj: SAPB1.InventoryCyclesKey, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.GET, "InventoryCycles(" + obj.CycleCode + ")", sessionId, routeId, [obj]);
}
}
export class WizardPaymentMethodsEntity{
static Add(obj: SAPB1.WizardPaymentMethod, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.ADD, "WizardPaymentMethods", sessionId, routeId, [obj]);
}
static Update(obj: SAPB1.WizardPaymentMethod, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.UPDATE, "WizardPaymentMethods('" + obj.PaymentMethodCode + "')", sessionId, routeId, [obj]);
}
static Delete(obj: SAPB1.WizardPaymentMethodKey, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.DELETE, "WizardPaymentMethods('" + obj.PaymentMethodCode + "')", sessionId, routeId, [obj]);
}
static Get(obj: SAPB1.WizardPaymentMethodKey, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.GET, "WizardPaymentMethods('" + obj.PaymentMethodCode + "')", sessionId, routeId, [obj]);
}
}
export class DepreciationTypesEntity{
static Add(obj: SAPB1.DepreciationType, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.ADD, "DepreciationTypes", sessionId, routeId, [obj]);
}
static Update(obj: SAPB1.DepreciationType, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.UPDATE, "DepreciationTypes('" + obj.Code + "')", sessionId, routeId, [obj]);
}
static Delete(obj: SAPB1.DepreciationTypeKey, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.DELETE, "DepreciationTypes('" + obj.Code + "')", sessionId, routeId, [obj]);
}
static Get(obj: SAPB1.DepreciationTypeKey, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.GET, "DepreciationTypes('" + obj.Code + "')", sessionId, routeId, [obj]);
}
}
export class FAAccountDeterminationsEntity{
static Add(obj: SAPB1.FAAccountDetermination, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.ADD, "FAAccountDeterminations", sessionId, routeId, [obj]);
}
static Update(obj: SAPB1.FAAccountDetermination, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.UPDATE, "FAAccountDeterminations('" + obj.Code + "')", sessionId, routeId, [obj]);
}
static Delete(obj: SAPB1.FAAccountDeterminationKey, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.DELETE, "FAAccountDeterminations('" + obj.Code + "')", sessionId, routeId, [obj]);
}
static Get(obj: SAPB1.FAAccountDeterminationKey, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.GET, "FAAccountDeterminations('" + obj.Code + "')", sessionId, routeId, [obj]);
}
}
export class DepreciationAreasEntity{
static Add(obj: SAPB1.DepreciationArea, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.ADD, "DepreciationAreas", sessionId, routeId, [obj]);
}
static Update(obj: SAPB1.DepreciationArea, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.UPDATE, "DepreciationAreas('" + obj.Code + "')", sessionId, routeId, [obj]);
}
static Delete(obj: SAPB1.DepreciationAreaKey, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.DELETE, "DepreciationAreas('" + obj.Code + "')", sessionId, routeId, [obj]);
}
static Get(obj: SAPB1.DepreciationAreaKey, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.GET, "DepreciationAreas('" + obj.Code + "')", sessionId, routeId, [obj]);
}
}
export class DepreciationTypePoolsEntity{
static Add(obj: SAPB1.DepreciationTypePool, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.ADD, "DepreciationTypePools", sessionId, routeId, [obj]);
}
static Update(obj: SAPB1.DepreciationTypePool, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.UPDATE, "DepreciationTypePools('" + obj.Code + "')", sessionId, routeId, [obj]);
}
static Delete(obj: SAPB1.DepreciationTypePoolKey, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.DELETE, "DepreciationTypePools('" + obj.Code + "')", sessionId, routeId, [obj]);
}
static Get(obj: SAPB1.DepreciationTypePoolKey, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.GET, "DepreciationTypePools('" + obj.Code + "')", sessionId, routeId, [obj]);
}
}
export class AssetClassesEntity{
static Add(obj: SAPB1.AssetClass, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.ADD, "AssetClasses", sessionId, routeId, [obj]);
}
static Update(obj: SAPB1.AssetClass, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.UPDATE, "AssetClasses('" + obj.Code + "')", sessionId, routeId, [obj]);
}
static Delete(obj: SAPB1.AssetClassKey, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.DELETE, "AssetClasses('" + obj.Code + "')", sessionId, routeId, [obj]);
}
static Get(obj: SAPB1.AssetClassKey, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.GET, "AssetClasses('" + obj.Code + "')", sessionId, routeId, [obj]);
}
}
export class IntrastatConfigurationEntity{
static Add(obj: SAPB1.IntrastatConfiguration, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.ADD, "IntrastatConfiguration", sessionId, routeId, [obj]);
}
static Update(obj: SAPB1.IntrastatConfiguration, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.UPDATE, "IntrastatConfiguration(" + obj.AbsEntry + ")", sessionId, routeId, [obj]);
}
static Delete(obj: SAPB1.IntrastatConfigurationKey, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.DELETE, "IntrastatConfiguration(" + obj.AbsEntry + ")", sessionId, routeId, [obj]);
}
static Get(obj: SAPB1.IntrastatConfigurationKey, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.GET, "IntrastatConfiguration(" + obj.AbsEntry + ")", sessionId, routeId, [obj]);
}
}
export class AssetGroupsEntity{
static Add(obj: SAPB1.AssetGroup, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.ADD, "AssetGroups", sessionId, routeId, [obj]);
}
static Update(obj: SAPB1.AssetGroup, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.UPDATE, "AssetGroups('" + obj.Code + "')", sessionId, routeId, [obj]);
}
static Delete(obj: SAPB1.AssetGroupKey, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.DELETE, "AssetGroups('" + obj.Code + "')", sessionId, routeId, [obj]);
}
static Get(obj: SAPB1.AssetGroupKey, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.GET, "AssetGroups('" + obj.Code + "')", sessionId, routeId, [obj]);
}
}
export class DeterminationCriteriasEntity{
static Add(obj: SAPB1.DeterminationCriteria, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.ADD, "DeterminationCriterias", sessionId, routeId, [obj]);
}
static Update(obj: SAPB1.DeterminationCriteria, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.UPDATE, "DeterminationCriterias(" + obj.DmcId + ")", sessionId, routeId, [obj]);
}
static Delete(obj: SAPB1.DeterminationCriteriaKey, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.DELETE, "DeterminationCriterias(" + obj.DmcId + ")", sessionId, routeId, [obj]);
}
static Get(obj: SAPB1.DeterminationCriteriaKey, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.GET, "DeterminationCriterias(" + obj.DmcId + ")", sessionId, routeId, [obj]);
}
}
export class AssetCapitalizationEntity{
static Add(obj: SAPB1.AssetDocument, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.ADD, "AssetCapitalization", sessionId, routeId, [obj]);
}
static Update(obj: SAPB1.AssetDocument, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.UPDATE, "AssetCapitalization(" + obj.DocEntry + ")", sessionId, routeId, [obj]);
}
static Delete(obj: SAPB1.AssetDocumentKey, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.DELETE, "AssetCapitalization(" + obj.DocEntry + ")", sessionId, routeId, [obj]);
}
static Get(obj: SAPB1.AssetDocumentKey, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.GET, "AssetCapitalization(" + obj.DocEntry + ")", sessionId, routeId, [obj]);
}
}
export class GLAccountAdvancedRulesEntity{
static Add(obj: SAPB1.GLAccountAdvancedRule, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.ADD, "GLAccountAdvancedRules", sessionId, routeId, [obj]);
}
static Update(obj: SAPB1.GLAccountAdvancedRule, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.UPDATE, "GLAccountAdvancedRules(" + obj.AbsoluteEntry + ")", sessionId, routeId, [obj]);
}
static Delete(obj: SAPB1.GLAccountAdvancedRuleKey, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.DELETE, "GLAccountAdvancedRules(" + obj.AbsoluteEntry + ")", sessionId, routeId, [obj]);
}
static Get(obj: SAPB1.GLAccountAdvancedRuleKey, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.GET, "GLAccountAdvancedRules(" + obj.AbsoluteEntry + ")", sessionId, routeId, [obj]);
}
}
export class AssetCapitalizationCreditMemoEntity{
static Add(obj: SAPB1.AssetDocument, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.ADD, "AssetCapitalizationCreditMemo", sessionId, routeId, [obj]);
}
static Update(obj: SAPB1.AssetDocument, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.UPDATE, "AssetCapitalizationCreditMemo(" + obj.DocEntry + ")", sessionId, routeId, [obj]);
}
static Delete(obj: SAPB1.AssetDocumentKey, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.DELETE, "AssetCapitalizationCreditMemo(" + obj.DocEntry + ")", sessionId, routeId, [obj]);
}
static Get(obj: SAPB1.AssetDocumentKey, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.GET, "AssetCapitalizationCreditMemo(" + obj.DocEntry + ")", sessionId, routeId, [obj]);
}
}
export class BarCodesEntity{
static Add(obj: SAPB1.BarCode, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.ADD, "BarCodes", sessionId, routeId, [obj]);
}
static Update(obj: SAPB1.BarCode, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.UPDATE, "BarCodes(" + obj.AbsEntry + ")", sessionId, routeId, [obj]);
}
static Delete(obj: SAPB1.BarCodeKey, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.DELETE, "BarCodes(" + obj.AbsEntry + ")", sessionId, routeId, [obj]);
}
static Get(obj: SAPB1.BarCodeKey, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.GET, "BarCodes(" + obj.AbsEntry + ")", sessionId, routeId, [obj]);
}
}
export class InventoryCountingsEntity{
static Add(obj: SAPB1.InventoryCounting, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.ADD, "InventoryCountings", sessionId, routeId, [obj]);
}
static Update(obj: SAPB1.InventoryCounting, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.UPDATE, "InventoryCountings(" + obj.DocumentEntry + ")", sessionId, routeId, [obj]);
}
static Delete(obj: SAPB1.InventoryCountingKey, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.DELETE, "InventoryCountings(" + obj.DocumentEntry + ")", sessionId, routeId, [obj]);
}
static Get(obj: SAPB1.InventoryCountingKey, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.GET, "InventoryCountings(" + obj.DocumentEntry + ")", sessionId, routeId, [obj]);
}
static Close(obj: SAPB1.InventoryCounting, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.ACTION, "InventoryCountings(" + obj.DocumentEntry + ")/Close", sessionId, routeId, [obj]);
}
}
export class AssetManualDepreciationEntity{
static Add(obj: SAPB1.AssetDocument, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.ADD, "AssetManualDepreciation", sessionId, routeId, [obj]);
}
static Update(obj: SAPB1.AssetDocument, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.UPDATE, "AssetManualDepreciation(" + obj.DocEntry + ")", sessionId, routeId, [obj]);
}
static Delete(obj: SAPB1.AssetDocumentKey, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.DELETE, "AssetManualDepreciation(" + obj.DocEntry + ")", sessionId, routeId, [obj]);
}
static Get(obj: SAPB1.AssetDocumentKey, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.GET, "AssetManualDepreciation(" + obj.DocEntry + ")", sessionId, routeId, [obj]);
}
}
export class EnhancedDiscountGroupsEntity{
static Add(obj: SAPB1.EnhancedDiscountGroup, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.ADD, "EnhancedDiscountGroups", sessionId, routeId, [obj]);
}
static Update(obj: SAPB1.EnhancedDiscountGroup, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.UPDATE, "EnhancedDiscountGroups(" + obj.AbsEntry + ")", sessionId, routeId, [obj]);
}
static Delete(obj: SAPB1.EnhancedDiscountGroupKey, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.DELETE, "EnhancedDiscountGroups(" + obj.AbsEntry + ")", sessionId, routeId, [obj]);
}
static Get(obj: SAPB1.EnhancedDiscountGroupKey, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.GET, "EnhancedDiscountGroups(" + obj.AbsEntry + ")", sessionId, routeId, [obj]);
}
}
export class AssetTransferEntity{
static Add(obj: SAPB1.AssetDocument, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.ADD, "AssetTransfer", sessionId, routeId, [obj]);
}
static Update(obj: SAPB1.AssetDocument, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.UPDATE, "AssetTransfer(" + obj.DocEntry + ")", sessionId, routeId, [obj]);
}
static Delete(obj: SAPB1.AssetDocumentKey, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.DELETE, "AssetTransfer(" + obj.DocEntry + ")", sessionId, routeId, [obj]);
}
static Get(obj: SAPB1.AssetDocumentKey, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.GET, "AssetTransfer(" + obj.DocEntry + ")", sessionId, routeId, [obj]);
}
}
export class CycleCountDeterminationsEntity{
static Add(obj: SAPB1.CycleCountDetermination, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.ADD, "CycleCountDeterminations", sessionId, routeId, [obj]);
}
static Update(obj: SAPB1.CycleCountDetermination, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.UPDATE, "CycleCountDeterminations('" + obj.WarehouseCode + "')", sessionId, routeId, [obj]);
}
static Delete(obj: SAPB1.CycleCountDeterminationKey, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.DELETE, "CycleCountDeterminations('" + obj.WarehouseCode + "')", sessionId, routeId, [obj]);
}
static Get(obj: SAPB1.CycleCountDeterminationKey, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.GET, "CycleCountDeterminations('" + obj.WarehouseCode + "')", sessionId, routeId, [obj]);
}
}
export class AssetRetirementEntity{
static Add(obj: SAPB1.AssetDocument, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.ADD, "AssetRetirement", sessionId, routeId, [obj]);
}
static Update(obj: SAPB1.AssetDocument, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.UPDATE, "AssetRetirement(" + obj.DocEntry + ")", sessionId, routeId, [obj]);
}
static Delete(obj: SAPB1.AssetDocumentKey, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.DELETE, "AssetRetirement(" + obj.DocEntry + ")", sessionId, routeId, [obj]);
}
static Get(obj: SAPB1.AssetDocumentKey, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.GET, "AssetRetirement(" + obj.DocEntry + ")", sessionId, routeId, [obj]);
}
}
export class PurchaseRequestsEntity{
static Add(obj: SAPB1.Document, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.ADD, "PurchaseRequests", sessionId, routeId, [obj]);
}
static Update(obj: SAPB1.Document, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.UPDATE, "PurchaseRequests(" + obj.DocEntry + ")", sessionId, routeId, [obj]);
}
static Delete(obj: SAPB1.DocumentKey, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.DELETE, "PurchaseRequests(" + obj.DocEntry + ")", sessionId, routeId, [obj]);
}
static Get(obj: SAPB1.DocumentKey, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.GET, "PurchaseRequests(" + obj.DocEntry + ")", sessionId, routeId, [obj]);
}
static Close(obj: SAPB1.Document, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.ACTION, "PurchaseRequests(" + obj.DocEntry + ")/Close", sessionId, routeId, [obj]);
}
static Cancel(obj: SAPB1.Document, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.ACTION, "PurchaseRequests(" + obj.DocEntry + ")/Cancel", sessionId, routeId, [obj]);
}
static Reopen(obj: SAPB1.Document, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.ACTION, "PurchaseRequests(" + obj.DocEntry + ")/Reopen", sessionId, routeId, [obj]);
}
static SaveDraftToDocument(obj: SAPB1.Document, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.ACTION, "PurchaseRequests(" + obj.DocEntry + ")/SaveDraftToDocument", sessionId, routeId, [obj]);
}
static CreateCancellationDocument(obj: SAPB1.Document, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.ACTION, "PurchaseRequests(" + obj.DocEntry + ")/CreateCancellationDocument", sessionId, routeId, [obj]);
}
}
export class AssetDepreciationGroupsEntity{
static Add(obj: SAPB1.AssetDepreciationGroup, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.ADD, "AssetDepreciationGroups", sessionId, routeId, [obj]);
}
static Update(obj: SAPB1.AssetDepreciationGroup, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.UPDATE, "AssetDepreciationGroups('" + obj.Code + "')", sessionId, routeId, [obj]);
}
static Delete(obj: SAPB1.AssetDepreciationGroupKey, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.DELETE, "AssetDepreciationGroups('" + obj.Code + "')", sessionId, routeId, [obj]);
}
static Get(obj: SAPB1.AssetDepreciationGroupKey, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.GET, "AssetDepreciationGroups('" + obj.Code + "')", sessionId, routeId, [obj]);
}
}
export class AttributeGroupsEntity{
static Add(obj: SAPB1.AttributeGroup, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.ADD, "AttributeGroups", sessionId, routeId, [obj]);
}
static Update(obj: SAPB1.AttributeGroup, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.UPDATE, "AttributeGroups(" + obj.Code + ")", sessionId, routeId, [obj]);
}
static Delete(obj: SAPB1.AttributeGroupKey, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.DELETE, "AttributeGroups(" + obj.Code + ")", sessionId, routeId, [obj]);
}
static Get(obj: SAPB1.AttributeGroupKey, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.GET, "AttributeGroups(" + obj.Code + ")", sessionId, routeId, [obj]);
}
}
export class IntegrationPackagesConfigureEntity{
static Add(obj: SAPB1.IntegrationPackageConfigure, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.ADD, "IntegrationPackagesConfigure", sessionId, routeId, [obj]);
}
static Update(obj: SAPB1.IntegrationPackageConfigure, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.UPDATE, "IntegrationPackagesConfigure(" + obj.AbsEntry + ")", sessionId, routeId, [obj]);
}
static Delete(obj: SAPB1.IntegrationPackageConfigureKey, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.DELETE, "IntegrationPackagesConfigure(" + obj.AbsEntry + ")", sessionId, routeId, [obj]);
}
static Get(obj: SAPB1.IntegrationPackageConfigureKey, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.GET, "IntegrationPackagesConfigure(" + obj.AbsEntry + ")", sessionId, routeId, [obj]);
}
}
export class DeliveryNotesEntity{
static Add(obj: SAPB1.Document, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.ADD, "DeliveryNotes", sessionId, routeId, [obj]);
}
static Update(obj: SAPB1.Document, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.UPDATE, "DeliveryNotes(" + obj.DocEntry + ")", sessionId, routeId, [obj]);
}
static Delete(obj: SAPB1.DocumentKey, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.DELETE, "DeliveryNotes(" + obj.DocEntry + ")", sessionId, routeId, [obj]);
}
static Get(obj: SAPB1.DocumentKey, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.GET, "DeliveryNotes(" + obj.DocEntry + ")", sessionId, routeId, [obj]);
}
static Close(obj: SAPB1.Document, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.ACTION, "DeliveryNotes(" + obj.DocEntry + ")/Close", sessionId, routeId, [obj]);
}
static Cancel(obj: SAPB1.Document, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.ACTION, "DeliveryNotes(" + obj.DocEntry + ")/Cancel", sessionId, routeId, [obj]);
}
static Reopen(obj: SAPB1.Document, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.ACTION, "DeliveryNotes(" + obj.DocEntry + ")/Reopen", sessionId, routeId, [obj]);
}
static SaveDraftToDocument(obj: SAPB1.Document, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.ACTION, "DeliveryNotes(" + obj.DocEntry + ")/SaveDraftToDocument", sessionId, routeId, [obj]);
}
static CreateCancellationDocument(obj: SAPB1.Document, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.ACTION, "DeliveryNotes(" + obj.DocEntry + ")/CreateCancellationDocument", sessionId, routeId, [obj]);
}
}
export class BPPrioritiesEntity{
static Add(obj: SAPB1.BPPriority, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.ADD, "BPPriorities", sessionId, routeId, [obj]);
}
static Update(obj: SAPB1.BPPriority, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.UPDATE, "BPPriorities(" + obj.Priority + ")", sessionId, routeId, [obj]);
}
static Delete(obj: SAPB1.BPPriorityKey, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.DELETE, "BPPriorities(" + obj.Priority + ")", sessionId, routeId, [obj]);
}
static Get(obj: SAPB1.BPPriorityKey, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.GET, "BPPriorities(" + obj.Priority + ")", sessionId, routeId, [obj]);
}
}
export class DunningLettersEntity{
static Add(obj: SAPB1.DunningLetter, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.ADD, "DunningLetters", sessionId, routeId, [obj]);
}
static Update(obj: SAPB1.DunningLetter, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.UPDATE, "DunningLetters(" + obj.RowNumber + ")", sessionId, routeId, [obj]);
}
static Delete(obj: SAPB1.DunningLetterKey, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.DELETE, "DunningLetters(" + obj.RowNumber + ")", sessionId, routeId, [obj]);
}
static Get(obj: SAPB1.DunningLetterKey, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.GET, "DunningLetters(" + obj.RowNumber + ")", sessionId, routeId, [obj]);
}
}
export class UserFieldsMDEntity{
static Add(obj: SAPB1.UserFieldMD, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.ADD, "UserFieldsMD", sessionId, routeId, [obj]);
}
static Update(obj: SAPB1.UserFieldMD, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.UPDATE, "UserFieldsMD('" + obj.TableName + "', " + obj.FieldID + ")", sessionId, routeId, [obj]);
}
static Delete(obj: SAPB1.UserFieldMDKey, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.DELETE, "UserFieldsMD('" + obj.TableName + "', " + obj.FieldID + ")", sessionId, routeId, [obj]);
}
static Get(obj: SAPB1.UserFieldMDKey, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.GET, "UserFieldsMD('" + obj.TableName + "', " + obj.FieldID + ")", sessionId, routeId, [obj]);
}
}
export class UserTablesMDEntity{
static Add(obj: SAPB1.UserTablesMD, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.ADD, "UserTablesMD", sessionId, routeId, [obj]);
}
static Update(obj: SAPB1.UserTablesMD, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.UPDATE, "UserTablesMD('" + obj.TableName + "')", sessionId, routeId, [obj]);
}
static Delete(obj: SAPB1.UserTablesMDKey, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.DELETE, "UserTablesMD('" + obj.TableName + "')", sessionId, routeId, [obj]);
}
static Get(obj: SAPB1.UserTablesMDKey, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.GET, "UserTablesMD('" + obj.TableName + "')", sessionId, routeId, [obj]);
}
}
export class PickListsEntity{
static Add(obj: SAPB1.PickList, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.ADD, "PickLists", sessionId, routeId, [obj]);
}
static Update(obj: SAPB1.PickList, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.UPDATE, "PickLists(" + obj.Absoluteentry + ")", sessionId, routeId, [obj]);
}
static Delete(obj: SAPB1.PickListKey, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.DELETE, "PickLists(" + obj.Absoluteentry + ")", sessionId, routeId, [obj]);
}
static Get(obj: SAPB1.PickListKey, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.GET, "PickLists(" + obj.Absoluteentry + ")", sessionId, routeId, [obj]);
}
static GetReleasedAllocation(obj: SAPB1.PickList, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.ACTION, "PickLists(" + obj.Absoluteentry + ")/GetReleasedAllocation", sessionId, routeId, [obj]);
}
}
export class EmployeeIDTypeEntity{
static Add(obj: SAPB1.EmployeeIDType, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.ADD, "EmployeeIDType", sessionId, routeId, [obj]);
}
static Update(obj: SAPB1.EmployeeIDType, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.UPDATE, "EmployeeIDType('" + obj.IDType + "')", sessionId, routeId, [obj]);
}
static Delete(obj: SAPB1.EmployeeIDTypeKey, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.DELETE, "EmployeeIDType('" + obj.IDType + "')", sessionId, routeId, [obj]);
}
static Get(obj: SAPB1.EmployeeIDTypeKey, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.GET, "EmployeeIDType('" + obj.IDType + "')", sessionId, routeId, [obj]);
}
}
export class JournalEntryDocumentTypesEntity{
static Add(obj: SAPB1.JournalEntryDocumentType, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.ADD, "JournalEntryDocumentTypes", sessionId, routeId, [obj]);
}
static Update(obj: SAPB1.JournalEntryDocumentType, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.UPDATE, "JournalEntryDocumentTypes('" + obj.JournalEntryType + "')", sessionId, routeId, [obj]);
}
static Delete(obj: SAPB1.JournalEntryDocumentTypeKey, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.DELETE, "JournalEntryDocumentTypes('" + obj.JournalEntryType + "')", sessionId, routeId, [obj]);
}
static Get(obj: SAPB1.JournalEntryDocumentTypeKey, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.GET, "JournalEntryDocumentTypes('" + obj.JournalEntryType + "')", sessionId, routeId, [obj]);
}
}
export class PaymentRunExportEntity{
static Add(obj: SAPB1.PaymentRunExport, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.ADD, "PaymentRunExport", sessionId, routeId, [obj]);
}
static Update(obj: SAPB1.PaymentRunExport, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.UPDATE, "PaymentRunExport(" + obj.AbsoluteEntry + ")", sessionId, routeId, [obj]);
}
static Delete(obj: SAPB1.PaymentRunExportKey, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.DELETE, "PaymentRunExport(" + obj.AbsoluteEntry + ")", sessionId, routeId, [obj]);
}
static Get(obj: SAPB1.PaymentRunExportKey, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.GET, "PaymentRunExport(" + obj.AbsoluteEntry + ")", sessionId, routeId, [obj]);
}
}
export class PaymentBlocksEntity{
static Add(obj: SAPB1.PaymentBlock, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.ADD, "PaymentBlocks", sessionId, routeId, [obj]);
}
static Update(obj: SAPB1.PaymentBlock, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.UPDATE, "PaymentBlocks(" + obj.AbsEntry + ")", sessionId, routeId, [obj]);
}
static Delete(obj: SAPB1.PaymentBlockKey, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.DELETE, "PaymentBlocks(" + obj.AbsEntry + ")", sessionId, routeId, [obj]);
}
static Get(obj: SAPB1.PaymentBlockKey, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.GET, "PaymentBlocks(" + obj.AbsEntry + ")", sessionId, routeId, [obj]);
}
}
export class ReturnsEntity{
static Add(obj: SAPB1.Document, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.ADD, "Returns", sessionId, routeId, [obj]);
}
static Update(obj: SAPB1.Document, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.UPDATE, "Returns(" + obj.DocEntry + ")", sessionId, routeId, [obj]);
}
static Delete(obj: SAPB1.DocumentKey, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.DELETE, "Returns(" + obj.DocEntry + ")", sessionId, routeId, [obj]);
}
static Get(obj: SAPB1.DocumentKey, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.GET, "Returns(" + obj.DocEntry + ")", sessionId, routeId, [obj]);
}
static Close(obj: SAPB1.Document, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.ACTION, "Returns(" + obj.DocEntry + ")/Close", sessionId, routeId, [obj]);
}
static Cancel(obj: SAPB1.Document, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.ACTION, "Returns(" + obj.DocEntry + ")/Cancel", sessionId, routeId, [obj]);
}
static Reopen(obj: SAPB1.Document, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.ACTION, "Returns(" + obj.DocEntry + ")/Reopen", sessionId, routeId, [obj]);
}
static SaveDraftToDocument(obj: SAPB1.Document, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.ACTION, "Returns(" + obj.DocEntry + ")/SaveDraftToDocument", sessionId, routeId, [obj]);
}
static CreateCancellationDocument(obj: SAPB1.Document, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.ACTION, "Returns(" + obj.DocEntry + ")/CreateCancellationDocument", sessionId, routeId, [obj]);
}
}
export class UserQueriesEntity{
static Add(obj: SAPB1.UserQuery, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.ADD, "UserQueries", sessionId, routeId, [obj]);
}
static Update(obj: SAPB1.UserQuery, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.UPDATE, "UserQueries(" + obj.InternalKey + ", " + obj.QueryCategory + ")", sessionId, routeId, [obj]);
}
static Delete(obj: SAPB1.UserQueryKey, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.DELETE, "UserQueries(" + obj.InternalKey + ", " + obj.QueryCategory + ")", sessionId, routeId, [obj]);
}
static Get(obj: SAPB1.UserQueryKey, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.GET, "UserQueries(" + obj.InternalKey + ", " + obj.QueryCategory + ")", sessionId, routeId, [obj]);
}
}
export class MaterialRevaluationEntity{
static Add(obj: SAPB1.MaterialRevaluation, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.ADD, "MaterialRevaluation", sessionId, routeId, [obj]);
}
static Update(obj: SAPB1.MaterialRevaluation, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.UPDATE, "MaterialRevaluation(" + obj.DocEntry + ")", sessionId, routeId, [obj]);
}
static Delete(obj: SAPB1.MaterialRevaluationKey, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.DELETE, "MaterialRevaluation(" + obj.DocEntry + ")", sessionId, routeId, [obj]);
}
static Get(obj: SAPB1.MaterialRevaluationKey, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.GET, "MaterialRevaluation(" + obj.DocEntry + ")", sessionId, routeId, [obj]);
}
static Cancel(obj: SAPB1.MaterialRevaluation, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.ACTION, "MaterialRevaluation(" + obj.DocEntry + ")/Cancel", sessionId, routeId, [obj]);
}
static Close(obj: SAPB1.MaterialRevaluation, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.ACTION, "MaterialRevaluation(" + obj.DocEntry + ")/Close", sessionId, routeId, [obj]);
}
}
export class CorrectionInvoiceEntity{
static Add(obj: SAPB1.Document, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.ADD, "CorrectionInvoice", sessionId, routeId, [obj]);
}
static Update(obj: SAPB1.Document, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.UPDATE, "CorrectionInvoice(" + obj.DocEntry + ")", sessionId, routeId, [obj]);
}
static Delete(obj: SAPB1.DocumentKey, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.DELETE, "CorrectionInvoice(" + obj.DocEntry + ")", sessionId, routeId, [obj]);
}
static Get(obj: SAPB1.DocumentKey, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.GET, "CorrectionInvoice(" + obj.DocEntry + ")", sessionId, routeId, [obj]);
}
static Close(obj: SAPB1.Document, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.ACTION, "CorrectionInvoice(" + obj.DocEntry + ")/Close", sessionId, routeId, [obj]);
}
static Cancel(obj: SAPB1.Document, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.ACTION, "CorrectionInvoice(" + obj.DocEntry + ")/Cancel", sessionId, routeId, [obj]);
}
static Reopen(obj: SAPB1.Document, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.ACTION, "CorrectionInvoice(" + obj.DocEntry + ")/Reopen", sessionId, routeId, [obj]);
}
static SaveDraftToDocument(obj: SAPB1.Document, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.ACTION, "CorrectionInvoice(" + obj.DocEntry + ")/SaveDraftToDocument", sessionId, routeId, [obj]);
}
static CreateCancellationDocument(obj: SAPB1.Document, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.ACTION, "CorrectionInvoice(" + obj.DocEntry + ")/CreateCancellationDocument", sessionId, routeId, [obj]);
}
}
export class CorrectionInvoiceReversalEntity{
static Add(obj: SAPB1.Document, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.ADD, "CorrectionInvoiceReversal", sessionId, routeId, [obj]);
}
static Update(obj: SAPB1.Document, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.UPDATE, "CorrectionInvoiceReversal(" + obj.DocEntry + ")", sessionId, routeId, [obj]);
}
static Delete(obj: SAPB1.DocumentKey, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.DELETE, "CorrectionInvoiceReversal(" + obj.DocEntry + ")", sessionId, routeId, [obj]);
}
static Get(obj: SAPB1.DocumentKey, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.GET, "CorrectionInvoiceReversal(" + obj.DocEntry + ")", sessionId, routeId, [obj]);
}
static Close(obj: SAPB1.Document, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.ACTION, "CorrectionInvoiceReversal(" + obj.DocEntry + ")/Close", sessionId, routeId, [obj]);
}
static Cancel(obj: SAPB1.Document, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.ACTION, "CorrectionInvoiceReversal(" + obj.DocEntry + ")/Cancel", sessionId, routeId, [obj]);
}
static Reopen(obj: SAPB1.Document, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.ACTION, "CorrectionInvoiceReversal(" + obj.DocEntry + ")/Reopen", sessionId, routeId, [obj]);
}
static SaveDraftToDocument(obj: SAPB1.Document, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.ACTION, "CorrectionInvoiceReversal(" + obj.DocEntry + ")/SaveDraftToDocument", sessionId, routeId, [obj]);
}
static CreateCancellationDocument(obj: SAPB1.Document, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.ACTION, "CorrectionInvoiceReversal(" + obj.DocEntry + ")/CreateCancellationDocument", sessionId, routeId, [obj]);
}
}
export class CorrectionPurchaseInvoiceEntity{
static Add(obj: SAPB1.Document, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.ADD, "CorrectionPurchaseInvoice", sessionId, routeId, [obj]);
}
static Update(obj: SAPB1.Document, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.UPDATE, "CorrectionPurchaseInvoice(" + obj.DocEntry + ")", sessionId, routeId, [obj]);
}
static Delete(obj: SAPB1.DocumentKey, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.DELETE, "CorrectionPurchaseInvoice(" + obj.DocEntry + ")", sessionId, routeId, [obj]);
}
static Get(obj: SAPB1.DocumentKey, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.GET, "CorrectionPurchaseInvoice(" + obj.DocEntry + ")", sessionId, routeId, [obj]);
}
static Close(obj: SAPB1.Document, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.ACTION, "CorrectionPurchaseInvoice(" + obj.DocEntry + ")/Close", sessionId, routeId, [obj]);
}
static Cancel(obj: SAPB1.Document, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.ACTION, "CorrectionPurchaseInvoice(" + obj.DocEntry + ")/Cancel", sessionId, routeId, [obj]);
}
static Reopen(obj: SAPB1.Document, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.ACTION, "CorrectionPurchaseInvoice(" + obj.DocEntry + ")/Reopen", sessionId, routeId, [obj]);
}
static SaveDraftToDocument(obj: SAPB1.Document, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.ACTION, "CorrectionPurchaseInvoice(" + obj.DocEntry + ")/SaveDraftToDocument", sessionId, routeId, [obj]);
}
static CreateCancellationDocument(obj: SAPB1.Document, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.ACTION, "CorrectionPurchaseInvoice(" + obj.DocEntry + ")/CreateCancellationDocument", sessionId, routeId, [obj]);
}
}
export class CorrectionPurchaseInvoiceReversalEntity{
static Add(obj: SAPB1.Document, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.ADD, "CorrectionPurchaseInvoiceReversal", sessionId, routeId, [obj]);
}
static Update(obj: SAPB1.Document, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.UPDATE, "CorrectionPurchaseInvoiceReversal(" + obj.DocEntry + ")", sessionId, routeId, [obj]);
}
static Delete(obj: SAPB1.DocumentKey, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.DELETE, "CorrectionPurchaseInvoiceReversal(" + obj.DocEntry + ")", sessionId, routeId, [obj]);
}
static Get(obj: SAPB1.DocumentKey, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.GET, "CorrectionPurchaseInvoiceReversal(" + obj.DocEntry + ")", sessionId, routeId, [obj]);
}
static Close(obj: SAPB1.Document, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.ACTION, "CorrectionPurchaseInvoiceReversal(" + obj.DocEntry + ")/Close", sessionId, routeId, [obj]);
}
static Cancel(obj: SAPB1.Document, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.ACTION, "CorrectionPurchaseInvoiceReversal(" + obj.DocEntry + ")/Cancel", sessionId, routeId, [obj]);
}
static Reopen(obj: SAPB1.Document, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.ACTION, "CorrectionPurchaseInvoiceReversal(" + obj.DocEntry + ")/Reopen", sessionId, routeId, [obj]);
}
static SaveDraftToDocument(obj: SAPB1.Document, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.ACTION, "CorrectionPurchaseInvoiceReversal(" + obj.DocEntry + ")/SaveDraftToDocument", sessionId, routeId, [obj]);
}
static CreateCancellationDocument(obj: SAPB1.Document, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.ACTION, "CorrectionPurchaseInvoiceReversal(" + obj.DocEntry + ")/CreateCancellationDocument", sessionId, routeId, [obj]);
}
}
export class ServiceCallStatusEntity{
static Add(obj: SAPB1.ServiceCallStatus, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.ADD, "ServiceCallStatus", sessionId, routeId, [obj]);
}
static Update(obj: SAPB1.ServiceCallStatus, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.UPDATE, "ServiceCallStatus(" + obj.StatusId + ")", sessionId, routeId, [obj]);
}
static Delete(obj: SAPB1.ServiceCallStatusKey, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.DELETE, "ServiceCallStatus(" + obj.StatusId + ")", sessionId, routeId, [obj]);
}
static Get(obj: SAPB1.ServiceCallStatusKey, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.GET, "ServiceCallStatus(" + obj.StatusId + ")", sessionId, routeId, [obj]);
}
}
export class ServiceCallTypesEntity{
static Add(obj: SAPB1.ServiceCallType, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.ADD, "ServiceCallTypes", sessionId, routeId, [obj]);
}
static Update(obj: SAPB1.ServiceCallType, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.UPDATE, "ServiceCallTypes(" + obj.CallTypeID + ")", sessionId, routeId, [obj]);
}
static Delete(obj: SAPB1.ServiceCallTypeKey, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.DELETE, "ServiceCallTypes(" + obj.CallTypeID + ")", sessionId, routeId, [obj]);
}
static Get(obj: SAPB1.ServiceCallTypeKey, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.GET, "ServiceCallTypes(" + obj.CallTypeID + ")", sessionId, routeId, [obj]);
}
}
export class ServiceCallProblemTypesEntity{
static Add(obj: SAPB1.ServiceCallProblemType, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.ADD, "ServiceCallProblemTypes", sessionId, routeId, [obj]);
}
static Update(obj: SAPB1.ServiceCallProblemType, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.UPDATE, "ServiceCallProblemTypes(" + obj.ProblemTypeID + ")", sessionId, routeId, [obj]);
}
static Delete(obj: SAPB1.ServiceCallProblemTypeKey, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.DELETE, "ServiceCallProblemTypes(" + obj.ProblemTypeID + ")", sessionId, routeId, [obj]);
}
static Get(obj: SAPB1.ServiceCallProblemTypeKey, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.GET, "ServiceCallProblemTypes(" + obj.ProblemTypeID + ")", sessionId, routeId, [obj]);
}
}
export class OrdersEntity{
static Add(obj: SAPB1.Document, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.ADD, "Orders", sessionId, routeId, [obj]);
}
static Update(obj: SAPB1.Document, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.UPDATE, "Orders(" + obj.DocEntry + ")", sessionId, routeId, [obj]);
}
static Delete(obj: SAPB1.DocumentKey, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.DELETE, "Orders(" + obj.DocEntry + ")", sessionId, routeId, [obj]);
}
static Get(obj: SAPB1.DocumentKey, sessionId: string, routeId: string):SLCallObject {
return callSL(B1ObjActionEnum.GET, "Orders(" + obj.DocEntry + ")", sessionId, routeId, [obj]);
}
static Close(obj: SAPB1.Document, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.ACTION, "Orders(" + obj.DocEntry + ")/Close", sessionId, routeId, [obj]);
}
static Cancel(obj: SAPB1.Document, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.ACTION, "Orders(" + obj.DocEntry + ")/Cancel", sessionId, routeId, [obj]);
}
static Reopen(obj: SAPB1.Document, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.ACTION, "Orders(" + obj.DocEntry + ")/Reopen", sessionId, routeId, [obj]);
}
static SaveDraftToDocument(obj: SAPB1.Document, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.ACTION, "Orders(" + obj.DocEntry + ")/SaveDraftToDocument", sessionId, routeId, [obj]);
}
static CreateCancellationDocument(obj: SAPB1.Document, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.ACTION, "Orders(" + obj.DocEntry + ")/CreateCancellationDocument", sessionId, routeId, [obj]);
}
}
export class ContractTemplatesEntity{
static Add(obj: SAPB1.ContractTemplate, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.ADD, "ContractTemplates", sessionId, routeId, [obj]);
}
static Update(obj: SAPB1.ContractTemplate, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.UPDATE, "ContractTemplates('" + obj.TemplateName + "')", sessionId, routeId, [obj]);
}
static Delete(obj: SAPB1.ContractTemplateKey, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.DELETE, "ContractTemplates('" + obj.TemplateName + "')", sessionId, routeId, [obj]);
}
static Get(obj: SAPB1.ContractTemplateKey, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.GET, "ContractTemplates('" + obj.TemplateName + "')", sessionId, routeId, [obj]);
}
}
export class EmployeesInfoEntity{
static Add(obj: SAPB1.EmployeeInfo, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.ADD, "EmployeesInfo", sessionId, routeId, [obj]);
}
static Update(obj: SAPB1.EmployeeInfo, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.UPDATE, "EmployeesInfo(" + obj.EmployeeID + ")", sessionId, routeId, [obj]);
}
static Delete(obj: SAPB1.EmployeeInfoKey, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.DELETE, "EmployeesInfo(" + obj.EmployeeID + ")", sessionId, routeId, [obj]);
}
static Get(obj: SAPB1.EmployeeInfoKey, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.GET, "EmployeesInfo(" + obj.EmployeeID + ")", sessionId, routeId, [obj]);
}
static Cancel(obj: SAPB1.EmployeeInfo, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.ACTION, "EmployeesInfo(" + obj.EmployeeID + ")/Cancel", sessionId, routeId, [obj]);
}
static Close(obj: SAPB1.EmployeeInfo, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.ACTION, "EmployeesInfo(" + obj.EmployeeID + ")/Close", sessionId, routeId, [obj]);
}
}
export class EmployeeRolesSetupEntity{
static Add(obj: SAPB1.EmployeeRoleSetup, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.ADD, "EmployeeRolesSetup", sessionId, routeId, [obj]);
}
static Update(obj: SAPB1.EmployeeRoleSetup, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.UPDATE, "EmployeeRolesSetup(" + obj.TypeID + ")", sessionId, routeId, [obj]);
}
static Delete(obj: SAPB1.EmployeeRoleSetupKey, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.DELETE, "EmployeeRolesSetup(" + obj.TypeID + ")", sessionId, routeId, [obj]);
}
static Get(obj: SAPB1.EmployeeRoleSetupKey, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.GET, "EmployeeRolesSetup(" + obj.TypeID + ")", sessionId, routeId, [obj]);
}
}
export class BrazilMultiIndexersEntity{
static Add(obj: SAPB1.BrazilMultiIndexer, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.ADD, "BrazilMultiIndexers", sessionId, routeId, [obj]);
}
static Update(obj: SAPB1.BrazilMultiIndexer, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.UPDATE, "BrazilMultiIndexers(" + obj.ID + ")", sessionId, routeId, [obj]);
}
static Delete(obj: SAPB1.BrazilMultiIndexerKey, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.DELETE, "BrazilMultiIndexers(" + obj.ID + ")", sessionId, routeId, [obj]);
}
static Get(obj: SAPB1.BrazilMultiIndexerKey, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.GET, "BrazilMultiIndexers(" + obj.ID + ")", sessionId, routeId, [obj]);
}
static GetIndexerTypeList(obj: SAPB1.BrazilMultiIndexer, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.ACTION, "BrazilMultiIndexers(" + obj.ID + ")/GetIndexerTypeList", sessionId, routeId, [obj]);
}
}
export class EmployeeStatusEntity{
static Add(obj: SAPB1.EmployeeStatus, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.ADD, "EmployeeStatus", sessionId, routeId, [obj]);
}
static Update(obj: SAPB1.EmployeeStatus, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.UPDATE, "EmployeeStatus(" + obj.StatusId + ")", sessionId, routeId, [obj]);
}
static Delete(obj: SAPB1.EmployeeStatusKey, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.DELETE, "EmployeeStatus(" + obj.StatusId + ")", sessionId, routeId, [obj]);
}
static Get(obj: SAPB1.EmployeeStatusKey, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.GET, "EmployeeStatus(" + obj.StatusId + ")", sessionId, routeId, [obj]);
}
}
export class TerminationReasonEntity{
static Add(obj: SAPB1.TerminationReason, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.ADD, "TerminationReason", sessionId, routeId, [obj]);
}
static Update(obj: SAPB1.TerminationReason, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.UPDATE, "TerminationReason(" + obj.ReasonID + ")", sessionId, routeId, [obj]);
}
static Delete(obj: SAPB1.TerminationReasonKey, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.DELETE, "TerminationReason(" + obj.ReasonID + ")", sessionId, routeId, [obj]);
}
static Get(obj: SAPB1.TerminationReasonKey, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.GET, "TerminationReason(" + obj.ReasonID + ")", sessionId, routeId, [obj]);
}
}
export class CustomerEquipmentCardsEntity{
static Add(obj: SAPB1.CustomerEquipmentCard, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.ADD, "CustomerEquipmentCards", sessionId, routeId, [obj]);
}
static Update(obj: SAPB1.CustomerEquipmentCard, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.UPDATE, "CustomerEquipmentCards(" + obj.EquipmentCardNum + ")", sessionId, routeId, [obj]);
}
static Delete(obj: SAPB1.CustomerEquipmentCardKey, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.DELETE, "CustomerEquipmentCards(" + obj.EquipmentCardNum + ")", sessionId, routeId, [obj]);
}
static Get(obj: SAPB1.CustomerEquipmentCardKey, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.GET, "CustomerEquipmentCards(" + obj.EquipmentCardNum + ")", sessionId, routeId, [obj]);
}
}
export class WithholdingTaxCodesEntity{
static Add(obj: SAPB1.WithholdingTaxCode, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.ADD, "WithholdingTaxCodes", sessionId, routeId, [obj]);
}
static Update(obj: SAPB1.WithholdingTaxCode, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.UPDATE, "WithholdingTaxCodes('" + obj.WTCode + "')", sessionId, routeId, [obj]);
}
static Delete(obj: SAPB1.WithholdingTaxCodeKey, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.DELETE, "WithholdingTaxCodes('" + obj.WTCode + "')", sessionId, routeId, [obj]);
}
static Get(obj: SAPB1.WithholdingTaxCodeKey, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.GET, "WithholdingTaxCodes('" + obj.WTCode + "')", sessionId, routeId, [obj]);
}
}
export class PurchaseInvoicesEntity{
static Add(obj: SAPB1.Document, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.ADD, "PurchaseInvoices", sessionId, routeId, [obj]);
}
static Update(obj: SAPB1.Document, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.UPDATE, "PurchaseInvoices(" + obj.DocEntry + ")", sessionId, routeId, [obj]);
}
static Delete(obj: SAPB1.DocumentKey, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.DELETE, "PurchaseInvoices(" + obj.DocEntry + ")", sessionId, routeId, [obj]);
}
static Get(obj: SAPB1.DocumentKey, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.GET, "PurchaseInvoices(" + obj.DocEntry + ")", sessionId, routeId, [obj]);
}
static Close(obj: SAPB1.Document, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.ACTION, "PurchaseInvoices(" + obj.DocEntry + ")/Close", sessionId, routeId, [obj]);
}
static Cancel(obj: SAPB1.Document, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.ACTION, "PurchaseInvoices(" + obj.DocEntry + ")/Cancel", sessionId, routeId, [obj]);
}
static Reopen(obj: SAPB1.Document, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.ACTION, "PurchaseInvoices(" + obj.DocEntry + ")/Reopen", sessionId, routeId, [obj]);
}
static SaveDraftToDocument(obj: SAPB1.Document, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.ACTION, "PurchaseInvoices(" + obj.DocEntry + ")/SaveDraftToDocument", sessionId, routeId, [obj]);
}
static CreateCancellationDocument(obj: SAPB1.Document, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.ACTION, "PurchaseInvoices(" + obj.DocEntry + ")/CreateCancellationDocument", sessionId, routeId, [obj]);
}
}
export class ReportFilterEntity{
static Add(obj: SAPB1.TaxReportFilter, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.ADD, "ReportFilter", sessionId, routeId, [obj]);
}
static Update(obj: SAPB1.TaxReportFilter, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.UPDATE, "ReportFilter(" + obj.Code + ")", sessionId, routeId, [obj]);
}
static Delete(obj: SAPB1.TaxReportFilterKey, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.DELETE, "ReportFilter(" + obj.Code + ")", sessionId, routeId, [obj]);
}
static Get(obj: SAPB1.TaxReportFilterKey, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.GET, "ReportFilter(" + obj.Code + ")", sessionId, routeId, [obj]);
}
}
export class BillOfExchangeTransactionsEntity{
static Add(obj: SAPB1.BillOfExchangeTransaction, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.ADD, "BillOfExchangeTransactions", sessionId, routeId, [obj]);
}
static Update(obj: SAPB1.BillOfExchangeTransaction, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.UPDATE, "BillOfExchangeTransactions(" + obj.BOETransactionkey + ")", sessionId, routeId, [obj]);
}
static Delete(obj: SAPB1.BillOfExchangeTransactionKey, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.DELETE, "BillOfExchangeTransactions(" + obj.BOETransactionkey + ")", sessionId, routeId, [obj]);
}
static Get(obj: SAPB1.BillOfExchangeTransactionKey, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.GET, "BillOfExchangeTransactions(" + obj.BOETransactionkey + ")", sessionId, routeId, [obj]);
}
}
export class ServiceCallSolutionStatusEntity{
static Add(obj: SAPB1.ServiceCallSolutionStatus, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.ADD, "ServiceCallSolutionStatus", sessionId, routeId, [obj]);
}
static Update(obj: SAPB1.ServiceCallSolutionStatus, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.UPDATE, "ServiceCallSolutionStatus(" + obj.StatusId + ")", sessionId, routeId, [obj]);
}
static Delete(obj: SAPB1.ServiceCallSolutionStatusKey, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.DELETE, "ServiceCallSolutionStatus(" + obj.StatusId + ")", sessionId, routeId, [obj]);
}
static Get(obj: SAPB1.ServiceCallSolutionStatusKey, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.GET, "ServiceCallSolutionStatus(" + obj.StatusId + ")", sessionId, routeId, [obj]);
}
}
export class KnowledgeBaseSolutionsEntity{
static Add(obj: SAPB1.KnowledgeBaseSolution, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.ADD, "KnowledgeBaseSolutions", sessionId, routeId, [obj]);
}
static Update(obj: SAPB1.KnowledgeBaseSolution, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.UPDATE, "KnowledgeBaseSolutions(" + obj.SolutionCode + ")", sessionId, routeId, [obj]);
}
static Delete(obj: SAPB1.KnowledgeBaseSolutionKey, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.DELETE, "KnowledgeBaseSolutions(" + obj.SolutionCode + ")", sessionId, routeId, [obj]);
}
static Get(obj: SAPB1.KnowledgeBaseSolutionKey, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.GET, "KnowledgeBaseSolutions(" + obj.SolutionCode + ")", sessionId, routeId, [obj]);
}
}
export class PurchaseCreditNotesEntity{
static Add(obj: SAPB1.Document, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.ADD, "PurchaseCreditNotes", sessionId, routeId, [obj]);
}
static Update(obj: SAPB1.Document, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.UPDATE, "PurchaseCreditNotes(" + obj.DocEntry + ")", sessionId, routeId, [obj]);
}
static Delete(obj: SAPB1.DocumentKey, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.DELETE, "PurchaseCreditNotes(" + obj.DocEntry + ")", sessionId, routeId, [obj]);
}
static Get(obj: SAPB1.DocumentKey, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.GET, "PurchaseCreditNotes(" + obj.DocEntry + ")", sessionId, routeId, [obj]);
}
static Close(obj: SAPB1.Document, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.ACTION, "PurchaseCreditNotes(" + obj.DocEntry + ")/Close", sessionId, routeId, [obj]);
}
static Cancel(obj: SAPB1.Document, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.ACTION, "PurchaseCreditNotes(" + obj.DocEntry + ")/Cancel", sessionId, routeId, [obj]);
}
static Reopen(obj: SAPB1.Document, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.ACTION, "PurchaseCreditNotes(" + obj.DocEntry + ")/Reopen", sessionId, routeId, [obj]);
}
static SaveDraftToDocument(obj: SAPB1.Document, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.ACTION, "PurchaseCreditNotes(" + obj.DocEntry + ")/SaveDraftToDocument", sessionId, routeId, [obj]);
}
static CreateCancellationDocument(obj: SAPB1.Document, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.ACTION, "PurchaseCreditNotes(" + obj.DocEntry + ")/CreateCancellationDocument", sessionId, routeId, [obj]);
}
}
export class ServiceContractsEntity{
static Add(obj: SAPB1.ServiceContract, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.ADD, "ServiceContracts", sessionId, routeId, [obj]);
}
static Update(obj: SAPB1.ServiceContract, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.UPDATE, "ServiceContracts(" + obj.ContractID + ")", sessionId, routeId, [obj]);
}
static Delete(obj: SAPB1.ServiceContractKey, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.DELETE, "ServiceContracts(" + obj.ContractID + ")", sessionId, routeId, [obj]);
}
static Get(obj: SAPB1.ServiceContractKey, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.GET, "ServiceContracts(" + obj.ContractID + ")", sessionId, routeId, [obj]);
}
static Cancel(obj: SAPB1.ServiceContract, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.ACTION, "ServiceContracts(" + obj.ContractID + ")/Cancel", sessionId, routeId, [obj]);
}
static Close(obj: SAPB1.ServiceContract, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.ACTION, "ServiceContracts(" + obj.ContractID + ")/Close", sessionId, routeId, [obj]);
}
}
export class ServiceCallsEntity{
static Add(obj: SAPB1.ServiceCall, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.ADD, "ServiceCalls", sessionId, routeId, [obj]);
}
static Update(obj: SAPB1.ServiceCall, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.UPDATE, "ServiceCalls(" + obj.ServiceCallID + ")", sessionId, routeId, [obj]);
}
static Delete(obj: SAPB1.ServiceCallKey, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.DELETE, "ServiceCalls(" + obj.ServiceCallID + ")", sessionId, routeId, [obj]);
}
static Get(obj: SAPB1.ServiceCallKey, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.GET, "ServiceCalls(" + obj.ServiceCallID + ")", sessionId, routeId, [obj]);
}
static Close(obj: SAPB1.ServiceCall, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.ACTION, "ServiceCalls(" + obj.ServiceCallID + ")/Close", sessionId, routeId, [obj]);
}
}
export class ServiceCallOriginsEntity{
static Add(obj: SAPB1.ServiceCallOrigin, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.ADD, "ServiceCallOrigins", sessionId, routeId, [obj]);
}
static Update(obj: SAPB1.ServiceCallOrigin, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.UPDATE, "ServiceCallOrigins(" + obj.OriginID + ")", sessionId, routeId, [obj]);
}
static Delete(obj: SAPB1.ServiceCallOriginKey, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.DELETE, "ServiceCallOrigins(" + obj.OriginID + ")", sessionId, routeId, [obj]);
}
static Get(obj: SAPB1.ServiceCallOriginKey, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.GET, "ServiceCallOrigins(" + obj.OriginID + ")", sessionId, routeId, [obj]);
}
}
export class UserKeysMDEntity{
static Add(obj: SAPB1.UserKeysMD, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.ADD, "UserKeysMD", sessionId, routeId, [obj]);
}
static Update(obj: SAPB1.UserKeysMD, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.UPDATE, "UserKeysMD('" + obj.TableName + "', " + obj.KeyIndex + ")", sessionId, routeId, [obj]);
}
static Delete(obj: SAPB1.UserKeysMDKey, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.DELETE, "UserKeysMD('" + obj.TableName + "', " + obj.KeyIndex + ")", sessionId, routeId, [obj]);
}
static Get(obj: SAPB1.UserKeysMDKey, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.GET, "UserKeysMD('" + obj.TableName + "', " + obj.KeyIndex + ")", sessionId, routeId, [obj]);
}
}
export class QueueEntity{
static Add(obj: SAPB1.Queue, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.ADD, "Queue", sessionId, routeId, [obj]);
}
static Update(obj: SAPB1.Queue, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.UPDATE, "Queue('" + obj.QueueID + "')", sessionId, routeId, [obj]);
}
static Delete(obj: SAPB1.QueueKey, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.DELETE, "Queue('" + obj.QueueID + "')", sessionId, routeId, [obj]);
}
static Get(obj: SAPB1.QueueKey, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.GET, "Queue('" + obj.QueueID + "')", sessionId, routeId, [obj]);
}
}
export class DunningTermsEntity{
static Add(obj: SAPB1.DunningTerm, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.ADD, "DunningTerms", sessionId, routeId, [obj]);
}
static Update(obj: SAPB1.DunningTerm, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.UPDATE, "DunningTerms('" + obj.Code + "')", sessionId, routeId, [obj]);
}
static Delete(obj: SAPB1.DunningTermKey, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.DELETE, "DunningTerms('" + obj.Code + "')", sessionId, routeId, [obj]);
}
static Get(obj: SAPB1.DunningTermKey, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.GET, "DunningTerms('" + obj.Code + "')", sessionId, routeId, [obj]);
}
}
export class SalesForecastEntity{
static Add(obj: SAPB1.SalesForecast, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.ADD, "SalesForecast", sessionId, routeId, [obj]);
}
static Update(obj: SAPB1.SalesForecast, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.UPDATE, "SalesForecast(" + obj.Numerator + ")", sessionId, routeId, [obj]);
}
static Delete(obj: SAPB1.SalesForecastKey, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.DELETE, "SalesForecast(" + obj.Numerator + ")", sessionId, routeId, [obj]);
}
static Get(obj: SAPB1.SalesForecastKey, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.GET, "SalesForecast(" + obj.Numerator + ")", sessionId, routeId, [obj]);
}
}
export class TrackingNotesEntity{
static Add(obj: SAPB1.TrackingNote, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.ADD, "TrackingNotes", sessionId, routeId, [obj]);
}
static Update(obj: SAPB1.TrackingNote, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.UPDATE, "TrackingNotes(" + obj.TrackingNoteNumber + ")", sessionId, routeId, [obj]);
}
static Delete(obj: SAPB1.TrackingNoteKey, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.DELETE, "TrackingNotes(" + obj.TrackingNoteNumber + ")", sessionId, routeId, [obj]);
}
static Get(obj: SAPB1.TrackingNoteKey, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.GET, "TrackingNotes(" + obj.TrackingNoteNumber + ")", sessionId, routeId, [obj]);
}
}
export class BusinessPartnersEntity{
static Add(obj: SAPB1.BusinessPartner, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.ADD, "BusinessPartners", sessionId, routeId, [obj]);
}
static Update(obj: SAPB1.BusinessPartner, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.UPDATE, "BusinessPartners('" + obj.CardCode + "')", sessionId, routeId, [obj]);
}
static Delete(obj: SAPB1.BusinessPartnerKey, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.DELETE, "BusinessPartners('" + obj.CardCode + "')", sessionId, routeId, [obj]);
}
static Get(obj: SAPB1.BusinessPartnerKey, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.GET, "BusinessPartners('" + obj.CardCode + "')", sessionId, routeId, [obj]);
}
}
export class PurchaseDeliveryNotesEntity{
static Add(obj: SAPB1.Document, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.ADD, "PurchaseDeliveryNotes", sessionId, routeId, [obj]);
}
static Update(obj: SAPB1.Document, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.UPDATE, "PurchaseDeliveryNotes(" + obj.DocEntry + ")", sessionId, routeId, [obj]);
}
static Delete(obj: SAPB1.DocumentKey, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.DELETE, "PurchaseDeliveryNotes(" + obj.DocEntry + ")", sessionId, routeId, [obj]);
}
static Get(obj: SAPB1.DocumentKey, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.GET, "PurchaseDeliveryNotes(" + obj.DocEntry + ")", sessionId, routeId, [obj]);
}
static Close(obj: SAPB1.Document, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.ACTION, "PurchaseDeliveryNotes(" + obj.DocEntry + ")/Close", sessionId, routeId, [obj]);
}
static Cancel(obj: SAPB1.Document, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.ACTION, "PurchaseDeliveryNotes(" + obj.DocEntry + ")/Cancel", sessionId, routeId, [obj]);
}
static Reopen(obj: SAPB1.Document, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.ACTION, "PurchaseDeliveryNotes(" + obj.DocEntry + ")/Reopen", sessionId, routeId, [obj]);
}
static SaveDraftToDocument(obj: SAPB1.Document, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.ACTION, "PurchaseDeliveryNotes(" + obj.DocEntry + ")/SaveDraftToDocument", sessionId, routeId, [obj]);
}
static CreateCancellationDocument(obj: SAPB1.Document, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.ACTION, "PurchaseDeliveryNotes(" + obj.DocEntry + ")/CreateCancellationDocument", sessionId, routeId, [obj]);
}
}
export class TerritoriesEntity{
static Add(obj: SAPB1.Territory, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.ADD, "Territories", sessionId, routeId, [obj]);
}
static Update(obj: SAPB1.Territory, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.UPDATE, "Territories(" + obj.TerritoryID + ")", sessionId, routeId, [obj]);
}
static Delete(obj: SAPB1.TerritoryKey, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.DELETE, "Territories(" + obj.TerritoryID + ")", sessionId, routeId, [obj]);
}
static Get(obj: SAPB1.TerritoryKey, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.GET, "Territories(" + obj.TerritoryID + ")", sessionId, routeId, [obj]);
}
}
export class IndustriesEntity{
static Add(obj: SAPB1.Industry, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.ADD, "Industries", sessionId, routeId, [obj]);
}
static Update(obj: SAPB1.Industry, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.UPDATE, "Industries(" + obj.IndustryCode + ")", sessionId, routeId, [obj]);
}
static Delete(obj: SAPB1.IndustryKey, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.DELETE, "Industries(" + obj.IndustryCode + ")", sessionId, routeId, [obj]);
}
static Get(obj: SAPB1.IndustryKey, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.GET, "Industries(" + obj.IndustryCode + ")", sessionId, routeId, [obj]);
}
}
export class ProductionOrdersEntity{
static Add(obj: SAPB1.ProductionOrder, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.ADD, "ProductionOrders", sessionId, routeId, [obj]);
}
static Update(obj: SAPB1.ProductionOrder, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.UPDATE, "ProductionOrders(" + obj.AbsoluteEntry + ")", sessionId, routeId, [obj]);
}
static Delete(obj: SAPB1.ProductionOrderKey, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.DELETE, "ProductionOrders(" + obj.AbsoluteEntry + ")", sessionId, routeId, [obj]);
}
static Get(obj: SAPB1.ProductionOrderKey, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.GET, "ProductionOrders(" + obj.AbsoluteEntry + ")", sessionId, routeId, [obj]);
}
static Cancel(obj: SAPB1.ProductionOrder, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.ACTION, "ProductionOrders(" + obj.AbsoluteEntry + ")/Cancel", sessionId, routeId, [obj]);
}
}
export class DownPaymentsEntity{
static Add(obj: SAPB1.Document, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.ADD, "DownPayments", sessionId, routeId, [obj]);
}
static Update(obj: SAPB1.Document, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.UPDATE, "DownPayments(" + obj.DocEntry + ")", sessionId, routeId, [obj]);
}
static Delete(obj: SAPB1.DocumentKey, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.DELETE, "DownPayments(" + obj.DocEntry + ")", sessionId, routeId, [obj]);
}
static Get(obj: SAPB1.DocumentKey, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.GET, "DownPayments(" + obj.DocEntry + ")", sessionId, routeId, [obj]);
}
static Close(obj: SAPB1.Document, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.ACTION, "DownPayments(" + obj.DocEntry + ")/Close", sessionId, routeId, [obj]);
}
static Cancel(obj: SAPB1.Document, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.ACTION, "DownPayments(" + obj.DocEntry + ")/Cancel", sessionId, routeId, [obj]);
}
static Reopen(obj: SAPB1.Document, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.ACTION, "DownPayments(" + obj.DocEntry + ")/Reopen", sessionId, routeId, [obj]);
}
static SaveDraftToDocument(obj: SAPB1.Document, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.ACTION, "DownPayments(" + obj.DocEntry + ")/SaveDraftToDocument", sessionId, routeId, [obj]);
}
static CreateCancellationDocument(obj: SAPB1.Document, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.ACTION, "DownPayments(" + obj.DocEntry + ")/CreateCancellationDocument", sessionId, routeId, [obj]);
}
}
export class PurchaseDownPaymentsEntity{
static Add(obj: SAPB1.Document, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.ADD, "PurchaseDownPayments", sessionId, routeId, [obj]);
}
static Update(obj: SAPB1.Document, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.UPDATE, "PurchaseDownPayments(" + obj.DocEntry + ")", sessionId, routeId, [obj]);
}
static Delete(obj: SAPB1.DocumentKey, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.DELETE, "PurchaseDownPayments(" + obj.DocEntry + ")", sessionId, routeId, [obj]);
}
static Get(obj: SAPB1.DocumentKey, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.GET, "PurchaseDownPayments(" + obj.DocEntry + ")", sessionId, routeId, [obj]);
}
static Close(obj: SAPB1.Document, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.ACTION, "PurchaseDownPayments(" + obj.DocEntry + ")/Close", sessionId, routeId, [obj]);
}
static Cancel(obj: SAPB1.Document, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.ACTION, "PurchaseDownPayments(" + obj.DocEntry + ")/Cancel", sessionId, routeId, [obj]);
}
static Reopen(obj: SAPB1.Document, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.ACTION, "PurchaseDownPayments(" + obj.DocEntry + ")/Reopen", sessionId, routeId, [obj]);
}
static SaveDraftToDocument(obj: SAPB1.Document, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.ACTION, "PurchaseDownPayments(" + obj.DocEntry + ")/SaveDraftToDocument", sessionId, routeId, [obj]);
}
static CreateCancellationDocument(obj: SAPB1.Document, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.ACTION, "PurchaseDownPayments(" + obj.DocEntry + ")/CreateCancellationDocument", sessionId, routeId, [obj]);
}
}
export class PackagesTypesEntity{
static Add(obj: SAPB1.PackagesType, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.ADD, "PackagesTypes", sessionId, routeId, [obj]);
}
static Update(obj: SAPB1.PackagesType, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.UPDATE, "PackagesTypes(" + obj.Code + ")", sessionId, routeId, [obj]);
}
static Delete(obj: SAPB1.PackagesTypeKey, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.DELETE, "PackagesTypes(" + obj.Code + ")", sessionId, routeId, [obj]);
}
static Get(obj: SAPB1.PackagesTypeKey, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.GET, "PackagesTypes(" + obj.Code + ")", sessionId, routeId, [obj]);
}
}
export class UserObjectsMDEntity{
static Add(obj: SAPB1.UserObjectsMD, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.ADD, "UserObjectsMD", sessionId, routeId, [obj]);
}
static Update(obj: SAPB1.UserObjectsMD, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.UPDATE, "UserObjectsMD('" + obj.Code + "')", sessionId, routeId, [obj]);
}
static Delete(obj: SAPB1.UserObjectsMDKey, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.DELETE, "UserObjectsMD('" + obj.Code + "')", sessionId, routeId, [obj]);
}
static Get(obj: SAPB1.UserObjectsMDKey, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.GET, "UserObjectsMD('" + obj.Code + "')", sessionId, routeId, [obj]);
}
}
export class PurchaseReturnsEntity{
static Add(obj: SAPB1.Document, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.ADD, "PurchaseReturns", sessionId, routeId, [obj]);
}
static Update(obj: SAPB1.Document, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.UPDATE, "PurchaseReturns(" + obj.DocEntry + ")", sessionId, routeId, [obj]);
}
static Delete(obj: SAPB1.DocumentKey, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.DELETE, "PurchaseReturns(" + obj.DocEntry + ")", sessionId, routeId, [obj]);
}
static Get(obj: SAPB1.DocumentKey, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.GET, "PurchaseReturns(" + obj.DocEntry + ")", sessionId, routeId, [obj]);
}
static Close(obj: SAPB1.Document, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.ACTION, "PurchaseReturns(" + obj.DocEntry + ")/Close", sessionId, routeId, [obj]);
}
static Cancel(obj: SAPB1.Document, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.ACTION, "PurchaseReturns(" + obj.DocEntry + ")/Cancel", sessionId, routeId, [obj]);
}
static Reopen(obj: SAPB1.Document, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.ACTION, "PurchaseReturns(" + obj.DocEntry + ")/Reopen", sessionId, routeId, [obj]);
}
static SaveDraftToDocument(obj: SAPB1.Document, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.ACTION, "PurchaseReturns(" + obj.DocEntry + ")/SaveDraftToDocument", sessionId, routeId, [obj]);
}
static CreateCancellationDocument(obj: SAPB1.Document, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.ACTION, "PurchaseReturns(" + obj.DocEntry + ")/CreateCancellationDocument", sessionId, routeId, [obj]);
}
}
export class EmployeePositionEntity{
static Add(obj: SAPB1.EmployeePosition, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.ADD, "EmployeePosition", sessionId, routeId, [obj]);
}
static Update(obj: SAPB1.EmployeePosition, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.UPDATE, "EmployeePosition(" + obj.PositionID + ")", sessionId, routeId, [obj]);
}
static Delete(obj: SAPB1.EmployeePositionKey, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.DELETE, "EmployeePosition(" + obj.PositionID + ")", sessionId, routeId, [obj]);
}
static Get(obj: SAPB1.EmployeePositionKey, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.GET, "EmployeePosition(" + obj.PositionID + ")", sessionId, routeId, [obj]);
}
}
export class TeamsEntity{
static Add(obj: SAPB1.Team, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.ADD, "Teams", sessionId, routeId, [obj]);
}
static Update(obj: SAPB1.Team, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.UPDATE, "Teams(" + obj.TeamID + ")", sessionId, routeId, [obj]);
}
static Delete(obj: SAPB1.TeamKey, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.DELETE, "Teams(" + obj.TeamID + ")", sessionId, routeId, [obj]);
}
static Get(obj: SAPB1.TeamKey, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.GET, "Teams(" + obj.TeamID + ")", sessionId, routeId, [obj]);
}
}
export class RelationshipsEntity{
static Add(obj: SAPB1.Relationship, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.ADD, "Relationships", sessionId, routeId, [obj]);
}
static Update(obj: SAPB1.Relationship, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.UPDATE, "Relationships(" + obj.RelationshipCode + ")", sessionId, routeId, [obj]);
}
static Delete(obj: SAPB1.RelationshipKey, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.DELETE, "Relationships(" + obj.RelationshipCode + ")", sessionId, routeId, [obj]);
}
static Get(obj: SAPB1.RelationshipKey, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.GET, "Relationships(" + obj.RelationshipCode + ")", sessionId, routeId, [obj]);
}
}
export class UserPermissionTreeEntity{
static Add(obj: SAPB1.UserPermissionTree, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.ADD, "UserPermissionTree", sessionId, routeId, [obj]);
}
static Update(obj: SAPB1.UserPermissionTree, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.UPDATE, "UserPermissionTree('" + obj.PermissionID + "')", sessionId, routeId, [obj]);
}
static Delete(obj: SAPB1.UserPermissionTreeKey, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.DELETE, "UserPermissionTree('" + obj.PermissionID + "')", sessionId, routeId, [obj]);
}
static Get(obj: SAPB1.UserPermissionTreeKey, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.GET, "UserPermissionTree('" + obj.PermissionID + "')", sessionId, routeId, [obj]);
}
}
export class PredefinedTextsEntity{
static Add(obj: SAPB1.PredefinedText, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.ADD, "PredefinedTexts", sessionId, routeId, [obj]);
}
static Update(obj: SAPB1.PredefinedText, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.UPDATE, "PredefinedTexts(" + obj.Numerator + ")", sessionId, routeId, [obj]);
}
static Delete(obj: SAPB1.PredefinedTextKey, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.DELETE, "PredefinedTexts(" + obj.Numerator + ")", sessionId, routeId, [obj]);
}
static Get(obj: SAPB1.PredefinedTextKey, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.GET, "PredefinedTexts(" + obj.Numerator + ")", sessionId, routeId, [obj]);
}
}
export class ActivityStatusesEntity{
static Add(obj: SAPB1.ActivityStatus, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.ADD, "ActivityStatuses", sessionId, routeId, [obj]);
}
static Update(obj: SAPB1.ActivityStatus, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.UPDATE, "ActivityStatuses(" + obj.StatusId + ")", sessionId, routeId, [obj]);
}
static Delete(obj: SAPB1.ActivityStatusKey, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.DELETE, "ActivityStatuses(" + obj.StatusId + ")", sessionId, routeId, [obj]);
}
static Get(obj: SAPB1.ActivityStatusKey, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.GET, "ActivityStatuses(" + obj.StatusId + ")", sessionId, routeId, [obj]);
}
}
export class ChooseFromListEntity{
static Add(obj: SAPB1.ChooseFromList, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.ADD, "ChooseFromList", sessionId, routeId, [obj]);
}
static Update(obj: SAPB1.ChooseFromList, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.UPDATE, "ChooseFromList('" + obj.ObjectName + "')", sessionId, routeId, [obj]);
}
static Delete(obj: SAPB1.ChooseFromListKey, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.DELETE, "ChooseFromList('" + obj.ObjectName + "')", sessionId, routeId, [obj]);
}
static Get(obj: SAPB1.ChooseFromListKey, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.GET, "ChooseFromList('" + obj.ObjectName + "')", sessionId, routeId, [obj]);
}
}
export class FormattedSearchesEntity{
static Add(obj: SAPB1.FormattedSearche, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.ADD, "FormattedSearches", sessionId, routeId, [obj]);
}
static Update(obj: SAPB1.FormattedSearche, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.UPDATE, "FormattedSearches(" + obj.Index + ")", sessionId, routeId, [obj]);
}
static Delete(obj: SAPB1.FormattedSearcheKey, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.DELETE, "FormattedSearches(" + obj.Index + ")", sessionId, routeId, [obj]);
}
static Get(obj: SAPB1.FormattedSearcheKey, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.GET, "FormattedSearches(" + obj.Index + ")", sessionId, routeId, [obj]);
}
}
export class PurchaseOrdersEntity{
static Add(obj: SAPB1.Document, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.ADD, "PurchaseOrders", sessionId, routeId, [obj]);
}
static Update(obj: SAPB1.Document, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.UPDATE, "PurchaseOrders(" + obj.DocEntry + ")", sessionId, routeId, [obj]);
}
static Delete(obj: SAPB1.DocumentKey, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.DELETE, "PurchaseOrders(" + obj.DocEntry + ")", sessionId, routeId, [obj]);
}
static Get(obj: SAPB1.DocumentKey, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.GET, "PurchaseOrders(" + obj.DocEntry + ")", sessionId, routeId, [obj]);
}
static Close(obj: SAPB1.Document, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.ACTION, "PurchaseOrders(" + obj.DocEntry + ")/Close", sessionId, routeId, [obj]);
}
static Cancel(obj: SAPB1.Document, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.ACTION, "PurchaseOrders(" + obj.DocEntry + ")/Cancel", sessionId, routeId, [obj]);
}
static Reopen(obj: SAPB1.Document, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.ACTION, "PurchaseOrders(" + obj.DocEntry + ")/Reopen", sessionId, routeId, [obj]);
}
static SaveDraftToDocument(obj: SAPB1.Document, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.ACTION, "PurchaseOrders(" + obj.DocEntry + ")/SaveDraftToDocument", sessionId, routeId, [obj]);
}
static CreateCancellationDocument(obj: SAPB1.Document, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.ACTION, "PurchaseOrders(" + obj.DocEntry + ")/CreateCancellationDocument", sessionId, routeId, [obj]);
}
}
export class Attachments2Entity{
static Add(obj: SAPB1.Attachments2, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.ADD, "Attachments2", sessionId, routeId, [obj]);
}
static Update(obj: SAPB1.Attachments2, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.UPDATE, "Attachments2(" + obj.AbsoluteEntry + ")", sessionId, routeId, [obj]);
}
static Delete(obj: SAPB1.Attachments2Key, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.DELETE, "Attachments2(" + obj.AbsoluteEntry + ")", sessionId, routeId, [obj]);
}
static Get(obj: SAPB1.Attachments2Key, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.GET, "Attachments2(" + obj.AbsoluteEntry + ")", sessionId, routeId, [obj]);
}
}
export class UserLanguagesEntity{
static Add(obj: SAPB1.UserLanguage, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.ADD, "UserLanguages", sessionId, routeId, [obj]);
}
static Update(obj: SAPB1.UserLanguage, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.UPDATE, "UserLanguages(" + obj.Code + ")", sessionId, routeId, [obj]);
}
static Delete(obj: SAPB1.UserLanguageKey, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.DELETE, "UserLanguages(" + obj.Code + ")", sessionId, routeId, [obj]);
}
static Get(obj: SAPB1.UserLanguageKey, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.GET, "UserLanguages(" + obj.Code + ")", sessionId, routeId, [obj]);
}
}
export class MultiLanguageTranslationsEntity{
static Add(obj: SAPB1.MultiLanguageTranslation, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.ADD, "MultiLanguageTranslations", sessionId, routeId, [obj]);
}
static Update(obj: SAPB1.MultiLanguageTranslation, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.UPDATE, "MultiLanguageTranslations(" + obj.Numerator + ")", sessionId, routeId, [obj]);
}
static Delete(obj: SAPB1.MultiLanguageTranslationKey, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.DELETE, "MultiLanguageTranslations(" + obj.Numerator + ")", sessionId, routeId, [obj]);
}
static Get(obj: SAPB1.MultiLanguageTranslationKey, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.GET, "MultiLanguageTranslations(" + obj.Numerator + ")", sessionId, routeId, [obj]);
}
}
export class DynamicSystemStringsEntity{
static Add(obj: SAPB1.DynamicSystemString, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.ADD, "DynamicSystemStrings", sessionId, routeId, [obj]);
}
static Update(obj: SAPB1.DynamicSystemString, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.UPDATE, "DynamicSystemStrings('" + obj.FormID + "', '" + obj.ItemID + "', '" + obj.ColumnID + "')", sessionId, routeId, [obj]);
}
static Delete(obj: SAPB1.DynamicSystemStringKey, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.DELETE, "DynamicSystemStrings('" + obj.FormID + "', '" + obj.ItemID + "', '" + obj.ColumnID + "')", sessionId, routeId, [obj]);
}
static Get(obj: SAPB1.DynamicSystemStringKey, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.GET, "DynamicSystemStrings('" + obj.FormID + "', '" + obj.ItemID + "', '" + obj.ColumnID + "')", sessionId, routeId, [obj]);
}
}
export class QuotationsEntity{
static Add(obj: SAPB1.Document, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.ADD, "Quotations", sessionId, routeId, [obj]);
}
static Update(obj: SAPB1.Document, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.UPDATE, "Quotations(" + obj.DocEntry + ")", sessionId, routeId, [obj]);
}
static Delete(obj: SAPB1.DocumentKey, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.DELETE, "Quotations(" + obj.DocEntry + ")", sessionId, routeId, [obj]);
}
static Get(obj: SAPB1.DocumentKey, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.GET, "Quotations(" + obj.DocEntry + ")", sessionId, routeId, [obj]);
}
static Close(obj: SAPB1.Document, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.ACTION, "Quotations(" + obj.DocEntry + ")/Close", sessionId, routeId, [obj]);
}
static Cancel(obj: SAPB1.Document, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.ACTION, "Quotations(" + obj.DocEntry + ")/Cancel", sessionId, routeId, [obj]);
}
static Reopen(obj: SAPB1.Document, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.ACTION, "Quotations(" + obj.DocEntry + ")/Reopen", sessionId, routeId, [obj]);
}
static SaveDraftToDocument(obj: SAPB1.Document, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.ACTION, "Quotations(" + obj.DocEntry + ")/SaveDraftToDocument", sessionId, routeId, [obj]);
}
static CreateCancellationDocument(obj: SAPB1.Document, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.ACTION, "Quotations(" + obj.DocEntry + ")/CreateCancellationDocument", sessionId, routeId, [obj]);
}
}
export class HouseBankAccountsEntity{
static Add(obj: SAPB1.HouseBankAccount, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.ADD, "HouseBankAccounts", sessionId, routeId, [obj]);
}
static Update(obj: SAPB1.HouseBankAccount, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.UPDATE, "HouseBankAccounts(" + obj.AbsoluteEntry + ")", sessionId, routeId, [obj]);
}
static Delete(obj: SAPB1.HouseBankAccountKey, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.DELETE, "HouseBankAccounts(" + obj.AbsoluteEntry + ")", sessionId, routeId, [obj]);
}
static Get(obj: SAPB1.HouseBankAccountKey, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.GET, "HouseBankAccounts(" + obj.AbsoluteEntry + ")", sessionId, routeId, [obj]);
}
}
export class POSDailySummaryEntity{
static Add(obj: SAPB1.POSDailySummary, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.ADD, "POSDailySummary", sessionId, routeId, [obj]);
}
static Update(obj: SAPB1.POSDailySummary, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.UPDATE, "POSDailySummary(" + obj.AbsEntry + ")", sessionId, routeId, [obj]);
}
static Delete(obj: SAPB1.POSDailySummaryKey, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.DELETE, "POSDailySummary(" + obj.AbsEntry + ")", sessionId, routeId, [obj]);
}
static Get(obj: SAPB1.POSDailySummaryKey, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.GET, "POSDailySummary(" + obj.AbsEntry + ")", sessionId, routeId, [obj]);
}
}
export class EmailGroupsEntity{
static Add(obj: SAPB1.EmailGroup, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.ADD, "EmailGroups", sessionId, routeId, [obj]);
}
static Update(obj: SAPB1.EmailGroup, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.UPDATE, "EmailGroups('" + obj.EmailGroupCode + "')", sessionId, routeId, [obj]);
}
static Delete(obj: SAPB1.EmailGroupKey, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.DELETE, "EmailGroups('" + obj.EmailGroupCode + "')", sessionId, routeId, [obj]);
}
static Get(obj: SAPB1.EmailGroupKey, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.GET, "EmailGroups('" + obj.EmailGroupCode + "')", sessionId, routeId, [obj]);
}
}
export class ServiceCallProblemSubTypesEntity{
static Add(obj: SAPB1.ServiceCallProblemSubType, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.ADD, "ServiceCallProblemSubTypes", sessionId, routeId, [obj]);
}
static Update(obj: SAPB1.ServiceCallProblemSubType, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.UPDATE, "ServiceCallProblemSubTypes(" + obj.ProblemSubTypeID + ")", sessionId, routeId, [obj]);
}
static Delete(obj: SAPB1.ServiceCallProblemSubTypeKey, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.DELETE, "ServiceCallProblemSubTypes(" + obj.ProblemSubTypeID + ")", sessionId, routeId, [obj]);
}
static Get(obj: SAPB1.ServiceCallProblemSubTypeKey, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.GET, "ServiceCallProblemSubTypes(" + obj.ProblemSubTypeID + ")", sessionId, routeId, [obj]);
}
}
export class WitholdingTaxDefinitionEntity{
static Add(obj: SAPB1.WTDCode, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.ADD, "WitholdingTaxDefinition", sessionId, routeId, [obj]);
}
static Update(obj: SAPB1.WTDCode, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.UPDATE, "WitholdingTaxDefinition(" + obj.AbsEntry + ")", sessionId, routeId, [obj]);
}
static Delete(obj: SAPB1.WTDCodeKey, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.DELETE, "WitholdingTaxDefinition(" + obj.AbsEntry + ")", sessionId, routeId, [obj]);
}
static Get(obj: SAPB1.WTDCodeKey, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.GET, "WitholdingTaxDefinition(" + obj.AbsEntry + ")", sessionId, routeId, [obj]);
}
}
export class ProjectManagementsEntity{
static Add(obj: SAPB1.PM_ProjectDocumentData, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.ADD, "ProjectManagements", sessionId, routeId, [obj]);
}
static Update(obj: SAPB1.PM_ProjectDocumentData, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.UPDATE, "ProjectManagements(" + obj.AbsEntry + ")", sessionId, routeId, [obj]);
}
static Delete(obj: SAPB1.PM_ProjectDocumentDataKey, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.DELETE, "ProjectManagements(" + obj.AbsEntry + ")", sessionId, routeId, [obj]);
}
static Get(obj: SAPB1.PM_ProjectDocumentDataKey, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.GET, "ProjectManagements(" + obj.AbsEntry + ")", sessionId, routeId, [obj]);
}
static CancelProject(obj: SAPB1.PM_ProjectDocumentData, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.ACTION, "ProjectManagements(" + obj.AbsEntry + ")/CancelProject", sessionId, routeId, [obj]);
}
}
export class ProjectManagementTimeSheetEntity{
static Add(obj: SAPB1.PM_TimeSheetData, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.ADD, "ProjectManagementTimeSheet", sessionId, routeId, [obj]);
}
static Update(obj: SAPB1.PM_TimeSheetData, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.UPDATE, "ProjectManagementTimeSheet(" + obj.AbsEntry + ")", sessionId, routeId, [obj]);
}
static Delete(obj: SAPB1.PM_TimeSheetDataKey, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.DELETE, "ProjectManagementTimeSheet(" + obj.AbsEntry + ")", sessionId, routeId, [obj]);
}
static Get(obj: SAPB1.PM_TimeSheetDataKey, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.GET, "ProjectManagementTimeSheet(" + obj.AbsEntry + ")", sessionId, routeId, [obj]);
}
}
export class AccountCategoryEntity{
static Add(obj: SAPB1.AccountCategory, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.ADD, "AccountCategory", sessionId, routeId, [obj]);
}
static Update(obj: SAPB1.AccountCategory, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.UPDATE, "AccountCategory(" + obj.CategoryCode + ")", sessionId, routeId, [obj]);
}
static Delete(obj: SAPB1.AccountCategoryKey, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.DELETE, "AccountCategory(" + obj.CategoryCode + ")", sessionId, routeId, [obj]);
}
static Get(obj: SAPB1.AccountCategoryKey, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.GET, "AccountCategory(" + obj.CategoryCode + ")", sessionId, routeId, [obj]);
}
}
export class BankChargesAllocationCodesEntity{
static Add(obj: SAPB1.BankChargesAllocationCode, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.ADD, "BankChargesAllocationCodes", sessionId, routeId, [obj]);
}
static Update(obj: SAPB1.BankChargesAllocationCode, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.UPDATE, "BankChargesAllocationCodes('" + obj.Code + "')", sessionId, routeId, [obj]);
}
static Delete(obj: SAPB1.BankChargesAllocationCodeKey, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.DELETE, "BankChargesAllocationCodes('" + obj.Code + "')", sessionId, routeId, [obj]);
}
static Get(obj: SAPB1.BankChargesAllocationCodeKey, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.GET, "BankChargesAllocationCodes('" + obj.Code + "')", sessionId, routeId, [obj]);
}
static SetDefaultBankChargesAllocationCode(obj: SAPB1.BankChargesAllocationCode, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.ACTION, "BankChargesAllocationCodes('" + obj.Code + "')/SetDefaultBankChargesAllocationCode", sessionId, routeId, [obj]);
}
}
export class IncomingPaymentsEntity{
static Add(obj: SAPB1.Payment, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.ADD, "IncomingPayments", sessionId, routeId, [obj]);
}
static Update(obj: SAPB1.Payment, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.UPDATE, "IncomingPayments(" + obj.DocEntry + ")", sessionId, routeId, [obj]);
}
static Delete(obj: SAPB1.PaymentKey, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.DELETE, "IncomingPayments(" + obj.DocEntry + ")", sessionId, routeId, [obj]);
}
static Get(obj: SAPB1.PaymentKey, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.GET, "IncomingPayments(" + obj.DocEntry + ")", sessionId, routeId, [obj]);
}
static Cancel(obj: SAPB1.Payment, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.ACTION, "IncomingPayments(" + obj.DocEntry + ")/Cancel", sessionId, routeId, [obj]);
}
static SaveDraftToDocument(obj: SAPB1.Payment, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.ACTION, "IncomingPayments(" + obj.DocEntry + ")/SaveDraftToDocument", sessionId, routeId, [obj]);
}
static GetApprovalTemplates(obj: SAPB1.Payment, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.ACTION, "IncomingPayments(" + obj.DocEntry + ")/GetApprovalTemplates", sessionId, routeId, [obj]);
}
static CancelbyCurrentSystemDate(obj: SAPB1.Payment, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.ACTION, "IncomingPayments(" + obj.DocEntry + ")/CancelbyCurrentSystemDate", sessionId, routeId, [obj]);
}
}
export class CashFlowLineItemsEntity{
static Add(obj: SAPB1.CashFlowLineItem, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.ADD, "CashFlowLineItems", sessionId, routeId, [obj]);
}
static Update(obj: SAPB1.CashFlowLineItem, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.UPDATE, "CashFlowLineItems(" + obj.LineItemID + ")", sessionId, routeId, [obj]);
}
static Delete(obj: SAPB1.CashFlowLineItemKey, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.DELETE, "CashFlowLineItems(" + obj.LineItemID + ")", sessionId, routeId, [obj]);
}
static Get(obj: SAPB1.CashFlowLineItemKey, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.GET, "CashFlowLineItems(" + obj.LineItemID + ")", sessionId, routeId, [obj]);
}
}
export class CampaignResponseTypeEntity{
static Add(obj: SAPB1.CampaignResponseType, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.ADD, "CampaignResponseType", sessionId, routeId, [obj]);
}
static Update(obj: SAPB1.CampaignResponseType, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.UPDATE, "CampaignResponseType('" + obj.ResponseType + "')", sessionId, routeId, [obj]);
}
static Delete(obj: SAPB1.CampaignResponseTypeKey, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.DELETE, "CampaignResponseType('" + obj.ResponseType + "')", sessionId, routeId, [obj]);
}
static Get(obj: SAPB1.CampaignResponseTypeKey, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.GET, "CampaignResponseType('" + obj.ResponseType + "')", sessionId, routeId, [obj]);
}
}
export class GovPayCodesEntity{
static Add(obj: SAPB1.GovPayCode, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.ADD, "GovPayCodes", sessionId, routeId, [obj]);
}
static Update(obj: SAPB1.GovPayCode, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.UPDATE, "GovPayCodes(" + obj.AbsId + ")", sessionId, routeId, [obj]);
}
static Delete(obj: SAPB1.GovPayCodeKey, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.DELETE, "GovPayCodes(" + obj.AbsId + ")", sessionId, routeId, [obj]);
}
static Get(obj: SAPB1.GovPayCodeKey, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.GET, "GovPayCodes(" + obj.AbsId + ")", sessionId, routeId, [obj]);
}
}
export class TaxInvoiceReportEntity{
static Add(obj: SAPB1.TaxInvoiceReport, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.ADD, "TaxInvoiceReport", sessionId, routeId, [obj]);
}
static Update(obj: SAPB1.TaxInvoiceReport, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.UPDATE, "TaxInvoiceReport('" + obj.TaxInvoiceReportNumber + "')", sessionId, routeId, [obj]);
}
static Delete(obj: SAPB1.TaxInvoiceReportKey, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.DELETE, "TaxInvoiceReport('" + obj.TaxInvoiceReportNumber + "')", sessionId, routeId, [obj]);
}
static Get(obj: SAPB1.TaxInvoiceReportKey, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.GET, "TaxInvoiceReport('" + obj.TaxInvoiceReportNumber + "')", sessionId, routeId, [obj]);
}
static CancelTaxInvoiceReport(obj: SAPB1.TaxInvoiceReport, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.ACTION, "TaxInvoiceReport('" + obj.TaxInvoiceReportNumber + "')/CancelTaxInvoiceReport", sessionId, routeId, [obj]);
}
}
export class BusinessPlacesEntity{
static Add(obj: SAPB1.BusinessPlace, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.ADD, "BusinessPlaces", sessionId, routeId, [obj]);
}
static Update(obj: SAPB1.BusinessPlace, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.UPDATE, "BusinessPlaces(" + obj.BPLID + ")", sessionId, routeId, [obj]);
}
static Delete(obj: SAPB1.BusinessPlaceKey, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.DELETE, "BusinessPlaces(" + obj.BPLID + ")", sessionId, routeId, [obj]);
}
static Get(obj: SAPB1.BusinessPlaceKey, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.GET, "BusinessPlaces(" + obj.BPLID + ")", sessionId, routeId, [obj]);
}
}
export class DepositsEntity{
static Add(obj: SAPB1.Deposit, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.ADD, "Deposits", sessionId, routeId, [obj]);
}
static Update(obj: SAPB1.Deposit, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.UPDATE, "Deposits(" + obj.AbsEntry + ")", sessionId, routeId, [obj]);
}
static Delete(obj: SAPB1.DepositKey, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.DELETE, "Deposits(" + obj.AbsEntry + ")", sessionId, routeId, [obj]);
}
static Get(obj: SAPB1.DepositKey, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.GET, "Deposits(" + obj.AbsEntry + ")", sessionId, routeId, [obj]);
}
static CancelDeposit(obj: SAPB1.Deposit, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.ACTION, "Deposits(" + obj.AbsEntry + ")/CancelDeposit", sessionId, routeId, [obj]);
}
static CancelDepositbyCurrentSystemDate(obj: SAPB1.Deposit, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.ACTION, "Deposits(" + obj.AbsEntry + ")/CancelDepositbyCurrentSystemDate", sessionId, routeId, [obj]);
}
}
export class LocalEraEntity{
static Add(obj: SAPB1.LocalEra, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.ADD, "LocalEra", sessionId, routeId, [obj]);
}
static Update(obj: SAPB1.LocalEra, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.UPDATE, "LocalEra('" + obj.Code + "')", sessionId, routeId, [obj]);
}
static Delete(obj: SAPB1.LocalEraKey, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.DELETE, "LocalEra('" + obj.Code + "')", sessionId, routeId, [obj]);
}
static Get(obj: SAPB1.LocalEraKey, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.GET, "LocalEra('" + obj.Code + "')", sessionId, routeId, [obj]);
}
}
export class DimensionsEntity{
static Add(obj: SAPB1.Dimension, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.ADD, "Dimensions", sessionId, routeId, [obj]);
}
static Update(obj: SAPB1.Dimension, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.UPDATE, "Dimensions(" + obj.DimensionCode + ")", sessionId, routeId, [obj]);
}
static Delete(obj: SAPB1.DimensionKey, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.DELETE, "Dimensions(" + obj.DimensionCode + ")", sessionId, routeId, [obj]);
}
static Get(obj: SAPB1.DimensionKey, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.GET, "Dimensions(" + obj.DimensionCode + ")", sessionId, routeId, [obj]);
}
}
export class ServiceGroupsEntity{
static Add(obj: SAPB1.ServiceGroup, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.ADD, "ServiceGroups", sessionId, routeId, [obj]);
}
static Update(obj: SAPB1.ServiceGroup, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.UPDATE, "ServiceGroups(" + obj.AbsEntry + ")", sessionId, routeId, [obj]);
}
static Delete(obj: SAPB1.ServiceGroupKey, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.DELETE, "ServiceGroups(" + obj.AbsEntry + ")", sessionId, routeId, [obj]);
}
static Get(obj: SAPB1.ServiceGroupKey, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.GET, "ServiceGroups(" + obj.AbsEntry + ")", sessionId, routeId, [obj]);
}
}
export class MaterialGroupsEntity{
static Add(obj: SAPB1.MaterialGroup, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.ADD, "MaterialGroups", sessionId, routeId, [obj]);
}
static Update(obj: SAPB1.MaterialGroup, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.UPDATE, "MaterialGroups(" + obj.AbsEntry + ")", sessionId, routeId, [obj]);
}
static Delete(obj: SAPB1.MaterialGroupKey, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.DELETE, "MaterialGroups(" + obj.AbsEntry + ")", sessionId, routeId, [obj]);
}
static Get(obj: SAPB1.MaterialGroupKey, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.GET, "MaterialGroups(" + obj.AbsEntry + ")", sessionId, routeId, [obj]);
}
}
export class NCMCodesSetupEntity{
static Add(obj: SAPB1.NCMCodeSetup, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.ADD, "NCMCodesSetup", sessionId, routeId, [obj]);
}
static Update(obj: SAPB1.NCMCodeSetup, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.UPDATE, "NCMCodesSetup(" + obj.AbsEntry + ")", sessionId, routeId, [obj]);
}
static Delete(obj: SAPB1.NCMCodeSetupKey, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.DELETE, "NCMCodesSetup(" + obj.AbsEntry + ")", sessionId, routeId, [obj]);
}
static Get(obj: SAPB1.NCMCodeSetupKey, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.GET, "NCMCodesSetup(" + obj.AbsEntry + ")", sessionId, routeId, [obj]);
}
}
export class NFTaxCategoriesEntity{
static Add(obj: SAPB1.NFTaxCategory, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.ADD, "NFTaxCategories", sessionId, routeId, [obj]);
}
static Update(obj: SAPB1.NFTaxCategory, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.UPDATE, "NFTaxCategories(" + obj.AbsId + ")", sessionId, routeId, [obj]);
}
static Delete(obj: SAPB1.NFTaxCategoryKey, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.DELETE, "NFTaxCategories(" + obj.AbsId + ")", sessionId, routeId, [obj]);
}
static Get(obj: SAPB1.NFTaxCategoryKey, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.GET, "NFTaxCategories(" + obj.AbsId + ")", sessionId, routeId, [obj]);
}
}
export class TaxCodeDeterminationsTCDEntity{
static Add(obj: SAPB1.TaxCodeDeterminationTCD, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.ADD, "TaxCodeDeterminationsTCD", sessionId, routeId, [obj]);
}
static Update(obj: SAPB1.TaxCodeDeterminationTCD, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.UPDATE, "TaxCodeDeterminationsTCD(" + obj.AbsId + ")", sessionId, routeId, [obj]);
}
static Delete(obj: SAPB1.TaxCodeDeterminationTCDKey, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.DELETE, "TaxCodeDeterminationsTCD(" + obj.AbsId + ")", sessionId, routeId, [obj]);
}
static Get(obj: SAPB1.TaxCodeDeterminationTCDKey, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.GET, "TaxCodeDeterminationsTCD(" + obj.AbsId + ")", sessionId, routeId, [obj]);
}
}
export class BOEDocumentTypesEntity{
static Add(obj: SAPB1.BOEDocumentType, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.ADD, "BOEDocumentTypes", sessionId, routeId, [obj]);
}
static Update(obj: SAPB1.BOEDocumentType, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.UPDATE, "BOEDocumentTypes(" + obj.DocEntry + ")", sessionId, routeId, [obj]);
}
static Delete(obj: SAPB1.BOEDocumentTypeKey, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.DELETE, "BOEDocumentTypes(" + obj.DocEntry + ")", sessionId, routeId, [obj]);
}
static Get(obj: SAPB1.BOEDocumentTypeKey, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.GET, "BOEDocumentTypes(" + obj.DocEntry + ")", sessionId, routeId, [obj]);
}
}
export class BOEPortfoliosEntity{
static Add(obj: SAPB1.BOEPortfolio, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.ADD, "BOEPortfolios", sessionId, routeId, [obj]);
}
static Update(obj: SAPB1.BOEPortfolio, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.UPDATE, "BOEPortfolios(" + obj.PortfolioEntry + ")", sessionId, routeId, [obj]);
}
static Delete(obj: SAPB1.BOEPortfolioKey, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.DELETE, "BOEPortfolios(" + obj.PortfolioEntry + ")", sessionId, routeId, [obj]);
}
static Get(obj: SAPB1.BOEPortfolioKey, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.GET, "BOEPortfolios(" + obj.PortfolioEntry + ")", sessionId, routeId, [obj]);
}
}
export class BOEInstructionsEntity{
static Add(obj: SAPB1.BOEInstruction, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.ADD, "BOEInstructions", sessionId, routeId, [obj]);
}
static Update(obj: SAPB1.BOEInstruction, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.UPDATE, "BOEInstructions(" + obj.InstructionEntry + ")", sessionId, routeId, [obj]);
}
static Delete(obj: SAPB1.BOEInstructionKey, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.DELETE, "BOEInstructions(" + obj.InstructionEntry + ")", sessionId, routeId, [obj]);
}
static Get(obj: SAPB1.BOEInstructionKey, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.GET, "BOEInstructions(" + obj.InstructionEntry + ")", sessionId, routeId, [obj]);
}
}
export class SalesTaxInvoicesEntity{
static Add(obj: SAPB1.SalesTaxInvoice, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.ADD, "SalesTaxInvoices", sessionId, routeId, [obj]);
}
static Update(obj: SAPB1.SalesTaxInvoice, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.UPDATE, "SalesTaxInvoices(" + obj.DocEntry + ")", sessionId, routeId, [obj]);
}
static Delete(obj: SAPB1.SalesTaxInvoiceKey, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.DELETE, "SalesTaxInvoices(" + obj.DocEntry + ")", sessionId, routeId, [obj]);
}
static Get(obj: SAPB1.SalesTaxInvoiceKey, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.GET, "SalesTaxInvoices(" + obj.DocEntry + ")", sessionId, routeId, [obj]);
}
}
export class PurchaseTaxInvoicesEntity{
static Add(obj: SAPB1.PurchaseTaxInvoice, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.ADD, "PurchaseTaxInvoices", sessionId, routeId, [obj]);
}
static Update(obj: SAPB1.PurchaseTaxInvoice, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.UPDATE, "PurchaseTaxInvoices(" + obj.DocEntry + ")", sessionId, routeId, [obj]);
}
static Delete(obj: SAPB1.PurchaseTaxInvoiceKey, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.DELETE, "PurchaseTaxInvoices(" + obj.DocEntry + ")", sessionId, routeId, [obj]);
}
static Get(obj: SAPB1.PurchaseTaxInvoiceKey, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.GET, "PurchaseTaxInvoices(" + obj.DocEntry + ")", sessionId, routeId, [obj]);
}
}
export class CustomsDeclarationEntity{
static Add(obj: SAPB1.CustomsDeclaration, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.ADD, "CustomsDeclaration", sessionId, routeId, [obj]);
}
static Update(obj: SAPB1.CustomsDeclaration, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.UPDATE, "CustomsDeclaration('" + obj.CCDNum + "')", sessionId, routeId, [obj]);
}
static Delete(obj: SAPB1.CustomsDeclarationKey, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.DELETE, "CustomsDeclaration('" + obj.CCDNum + "')", sessionId, routeId, [obj]);
}
static Get(obj: SAPB1.CustomsDeclarationKey, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.GET, "CustomsDeclaration('" + obj.CCDNum + "')", sessionId, routeId, [obj]);
}
}
export class ResourcesEntity{
static Add(obj: SAPB1.Resource, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.ADD, "Resources", sessionId, routeId, [obj]);
}
static Update(obj: SAPB1.Resource, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.UPDATE, "Resources('" + obj.Code + "')", sessionId, routeId, [obj]);
}
static Delete(obj: SAPB1.ResourceKey, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.DELETE, "Resources('" + obj.Code + "')", sessionId, routeId, [obj]);
}
static Get(obj: SAPB1.ResourceKey, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.GET, "Resources('" + obj.Code + "')", sessionId, routeId, [obj]);
}
static CreateLinkedItem(obj: SAPB1.Resource, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.ACTION, "Resources('" + obj.Code + "')/CreateLinkedItem", sessionId, routeId, [obj]);
}
}
export class ResourcePropertiesEntity{
static Add(obj: SAPB1.ResourceProperty, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.ADD, "ResourceProperties", sessionId, routeId, [obj]);
}
static Update(obj: SAPB1.ResourceProperty, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.UPDATE, "ResourceProperties(" + obj.Code + ")", sessionId, routeId, [obj]);
}
static Delete(obj: SAPB1.ResourcePropertyKey, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.DELETE, "ResourceProperties(" + obj.Code + ")", sessionId, routeId, [obj]);
}
static Get(obj: SAPB1.ResourcePropertyKey, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.GET, "ResourceProperties(" + obj.Code + ")", sessionId, routeId, [obj]);
}
}
export class ResourceGroupsEntity{
static Add(obj: SAPB1.ResourceGroup, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.ADD, "ResourceGroups", sessionId, routeId, [obj]);
}
static Update(obj: SAPB1.ResourceGroup, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.UPDATE, "ResourceGroups(" + obj.Code + ")", sessionId, routeId, [obj]);
}
static Delete(obj: SAPB1.ResourceGroupKey, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.DELETE, "ResourceGroups(" + obj.Code + ")", sessionId, routeId, [obj]);
}
static Get(obj: SAPB1.ResourceGroupKey, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.GET, "ResourceGroups(" + obj.Code + ")", sessionId, routeId, [obj]);
}
}
export class BanksEntity{
static Add(obj: SAPB1.Bank, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.ADD, "Banks", sessionId, routeId, [obj]);
}
static Update(obj: SAPB1.Bank, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.UPDATE, "Banks(" + obj.AbsoluteEntry + ")", sessionId, routeId, [obj]);
}
static Delete(obj: SAPB1.BankKey, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.DELETE, "Banks(" + obj.AbsoluteEntry + ")", sessionId, routeId, [obj]);
}
static Get(obj: SAPB1.BankKey, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.GET, "Banks(" + obj.AbsoluteEntry + ")", sessionId, routeId, [obj]);
}
}
export class JournalEntriesEntity{
static Add(obj: SAPB1.JournalEntry, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.ADD, "JournalEntries", sessionId, routeId, [obj]);
}
static Update(obj: SAPB1.JournalEntry, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.UPDATE, "JournalEntries(" + obj.JdtNum + ")", sessionId, routeId, [obj]);
}
static Delete(obj: SAPB1.JournalEntryKey, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.DELETE, "JournalEntries(" + obj.JdtNum + ")", sessionId, routeId, [obj]);
}
static Get(obj: SAPB1.JournalEntryKey, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.GET, "JournalEntries(" + obj.JdtNum + ")", sessionId, routeId, [obj]);
}
static Cancel(obj: SAPB1.JournalEntry, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.ACTION, "JournalEntries(" + obj.JdtNum + ")/Cancel", sessionId, routeId, [obj]);
}
}
export class StockTakingsEntity{
static Add(obj: SAPB1.StockTaking, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.ADD, "StockTakings", sessionId, routeId, [obj]);
}
static Update(obj: SAPB1.StockTaking, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.UPDATE, "StockTakings('" + obj.ItemCode + "', '" + obj.WarehouseCode + "')", sessionId, routeId, [obj]);
}
static Delete(obj: SAPB1.StockTakingKey, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.DELETE, "StockTakings('" + obj.ItemCode + "', '" + obj.WarehouseCode + "')", sessionId, routeId, [obj]);
}
static Get(obj: SAPB1.StockTakingKey, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.GET, "StockTakings('" + obj.ItemCode + "', '" + obj.WarehouseCode + "')", sessionId, routeId, [obj]);
}
}
export class InventoryOpeningBalancesEntity{
static Add(obj: SAPB1.InventoryOpeningBalance, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.ADD, "InventoryOpeningBalances", sessionId, routeId, [obj]);
}
static Update(obj: SAPB1.InventoryOpeningBalance, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.UPDATE, "InventoryOpeningBalances(" + obj.DocumentEntry + ")", sessionId, routeId, [obj]);
}
static Delete(obj: SAPB1.InventoryOpeningBalanceKey, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.DELETE, "InventoryOpeningBalances(" + obj.DocumentEntry + ")", sessionId, routeId, [obj]);
}
static Get(obj: SAPB1.InventoryOpeningBalanceKey, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.GET, "InventoryOpeningBalances(" + obj.DocumentEntry + ")", sessionId, routeId, [obj]);
}
}
export class ContactsEntity{
static Add(obj: SAPB1.Contact, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.ADD, "Contacts", sessionId, routeId, [obj]);
}
static Update(obj: SAPB1.Contact, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.UPDATE, "Contacts(" + obj.ContactCode + ")", sessionId, routeId, [obj]);
}
static Delete(obj: SAPB1.ContactKey, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.DELETE, "Contacts(" + obj.ContactCode + ")", sessionId, routeId, [obj]);
}
static Get(obj: SAPB1.ContactKey, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.GET, "Contacts(" + obj.ContactCode + ")", sessionId, routeId, [obj]);
}
}
export class CreditCardsEntity{
static Add(obj: SAPB1.CreditCard, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.ADD, "CreditCards", sessionId, routeId, [obj]);
}
static Update(obj: SAPB1.CreditCard, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.UPDATE, "CreditCards(" + obj.CreditCardCode + ")", sessionId, routeId, [obj]);
}
static Delete(obj: SAPB1.CreditCardKey, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.DELETE, "CreditCards(" + obj.CreditCardCode + ")", sessionId, routeId, [obj]);
}
static Get(obj: SAPB1.CreditCardKey, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.GET, "CreditCards(" + obj.CreditCardCode + ")", sessionId, routeId, [obj]);
}
}
export class CurrenciesEntity{
static Add(obj: SAPB1.Currency, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.ADD, "Currencies", sessionId, routeId, [obj]);
}
static Update(obj: SAPB1.Currency, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.UPDATE, "Currencies('" + obj.Code + "')", sessionId, routeId, [obj]);
}
static Delete(obj: SAPB1.CurrencyKey, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.DELETE, "Currencies('" + obj.Code + "')", sessionId, routeId, [obj]);
}
static Get(obj: SAPB1.CurrencyKey, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.GET, "Currencies('" + obj.Code + "')", sessionId, routeId, [obj]);
}
}
export class ItemsEntity{
static Add(obj: SAPB1.Item, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.ADD, "Items", sessionId, routeId, [obj]);
}
static Update(obj: SAPB1.Item, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.UPDATE, "Items('" + obj.ItemCode + "')", sessionId, routeId, [obj]);
}
static Delete(obj: SAPB1.ItemKey, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.DELETE, "Items('" + obj.ItemCode + "')", sessionId, routeId, [obj]);
}
static Get(obj: SAPB1.ItemKey, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.GET, "Items('" + obj.ItemCode + "')", sessionId, routeId, [obj]);
}
static Cancel(obj: SAPB1.Item, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.ACTION, "Items('" + obj.ItemCode + "')/Cancel", sessionId, routeId, [obj]);
}
}
export class PaymentTermsTypesEntity{
static Add(obj: SAPB1.PaymentTermsType, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.ADD, "PaymentTermsTypes", sessionId, routeId, [obj]);
}
static Update(obj: SAPB1.PaymentTermsType, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.UPDATE, "PaymentTermsTypes(" + obj.GroupNumber + ")", sessionId, routeId, [obj]);
}
static Delete(obj: SAPB1.PaymentTermsTypeKey, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.DELETE, "PaymentTermsTypes(" + obj.GroupNumber + ")", sessionId, routeId, [obj]);
}
static Get(obj: SAPB1.PaymentTermsTypeKey, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.GET, "PaymentTermsTypes(" + obj.GroupNumber + ")", sessionId, routeId, [obj]);
}
}
export class FormPreferencesEntity{
static Add(obj: SAPB1.ColumnPreferences, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.ADD, "FormPreferences", sessionId, routeId, [obj]);
}
static Update(obj: SAPB1.ColumnPreferences, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.UPDATE, "FormPreferences(" + obj.User + ", '" + obj.FormID + "', '" + obj.ItemNumber + "', '" + obj.Column + "')", sessionId, routeId, [obj]);
}
static Delete(obj: SAPB1.ColumnPreferencesKey, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.DELETE, "FormPreferences(" + obj.User + ", '" + obj.FormID + "', '" + obj.ItemNumber + "', '" + obj.Column + "')", sessionId, routeId, [obj]);
}
static Get(obj: SAPB1.ColumnPreferencesKey, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.GET, "FormPreferences(" + obj.User + ", '" + obj.FormID + "', '" + obj.ItemNumber + "', '" + obj.Column + "')", sessionId, routeId, [obj]);
}
}
export class ElectronicFileFormatsEntity{
static Add(obj: SAPB1.ElectronicFileFormat, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.ADD, "ElectronicFileFormats", sessionId, routeId, [obj]);
}
static Update(obj: SAPB1.ElectronicFileFormat, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.UPDATE, "ElectronicFileFormats(" + obj.FormatID + ")", sessionId, routeId, [obj]);
}
static Delete(obj: SAPB1.ElectronicFileFormatKey, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.DELETE, "ElectronicFileFormats(" + obj.FormatID + ")", sessionId, routeId, [obj]);
}
static Get(obj: SAPB1.ElectronicFileFormatKey, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.GET, "ElectronicFileFormats(" + obj.FormatID + ")", sessionId, routeId, [obj]);
}
}
export class BankPagesEntity{
static Add(obj: SAPB1.BankPage, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.ADD, "BankPages", sessionId, routeId, [obj]);
}
static Update(obj: SAPB1.BankPage, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.UPDATE, "BankPages('" + obj.AccountCode + "', " + obj.Sequence + ")", sessionId, routeId, [obj]);
}
static Delete(obj: SAPB1.BankPageKey, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.DELETE, "BankPages('" + obj.AccountCode + "', " + obj.Sequence + ")", sessionId, routeId, [obj]);
}
static Get(obj: SAPB1.BankPageKey, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.GET, "BankPages('" + obj.AccountCode + "', " + obj.Sequence + ")", sessionId, routeId, [obj]);
}
}
export class ManufacturersEntity{
static Add(obj: SAPB1.Manufacturer, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.ADD, "Manufacturers", sessionId, routeId, [obj]);
}
static Update(obj: SAPB1.Manufacturer, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.UPDATE, "Manufacturers(" + obj.Code + ")", sessionId, routeId, [obj]);
}
static Delete(obj: SAPB1.ManufacturerKey, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.DELETE, "Manufacturers(" + obj.Code + ")", sessionId, routeId, [obj]);
}
static Get(obj: SAPB1.ManufacturerKey, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.GET, "Manufacturers(" + obj.Code + ")", sessionId, routeId, [obj]);
}
}
export class BusinessPartnerPropertiesEntity{
static Add(obj: SAPB1.BusinessPartnerProperty, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.ADD, "BusinessPartnerProperties", sessionId, routeId, [obj]);
}
static Update(obj: SAPB1.BusinessPartnerProperty, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.UPDATE, "BusinessPartnerProperties(" + obj.PropertyCode + ")", sessionId, routeId, [obj]);
}
static Delete(obj: SAPB1.BusinessPartnerPropertyKey, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.DELETE, "BusinessPartnerProperties(" + obj.PropertyCode + ")", sessionId, routeId, [obj]);
}
static Get(obj: SAPB1.BusinessPartnerPropertyKey, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.GET, "BusinessPartnerProperties(" + obj.PropertyCode + ")", sessionId, routeId, [obj]);
}
}
export class TransactionCodesEntity{
static Add(obj: SAPB1.TransactionCode, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.ADD, "TransactionCodes", sessionId, routeId, [obj]);
}
static Update(obj: SAPB1.TransactionCode, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.UPDATE, "TransactionCodes('" + obj.Code + "')", sessionId, routeId, [obj]);
}
static Delete(obj: SAPB1.TransactionCodeKey, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.DELETE, "TransactionCodes('" + obj.Code + "')", sessionId, routeId, [obj]);
}
static Get(obj: SAPB1.TransactionCodeKey, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.GET, "TransactionCodes('" + obj.Code + "')", sessionId, routeId, [obj]);
}
}
export class VendorPaymentsEntity{
static Add(obj: SAPB1.Payment, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.ADD, "VendorPayments", sessionId, routeId, [obj]);
}
static Update(obj: SAPB1.Payment, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.UPDATE, "VendorPayments(" + obj.DocEntry + ")", sessionId, routeId, [obj]);
}
static Delete(obj: SAPB1.PaymentKey, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.DELETE, "VendorPayments(" + obj.DocEntry + ")", sessionId, routeId, [obj]);
}
static Get(obj: SAPB1.PaymentKey, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.GET, "VendorPayments(" + obj.DocEntry + ")", sessionId, routeId, [obj]);
}
static Cancel(obj: SAPB1.Payment, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.ACTION, "VendorPayments(" + obj.DocEntry + ")/Cancel", sessionId, routeId, [obj]);
}
static SaveDraftToDocument(obj: SAPB1.Payment, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.ACTION, "VendorPayments(" + obj.DocEntry + ")/SaveDraftToDocument", sessionId, routeId, [obj]);
}
static GetApprovalTemplates(obj: SAPB1.Payment, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.ACTION, "VendorPayments(" + obj.DocEntry + ")/GetApprovalTemplates", sessionId, routeId, [obj]);
}
static CancelbyCurrentSystemDate(obj: SAPB1.Payment, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.ACTION, "VendorPayments(" + obj.DocEntry + ")/CancelbyCurrentSystemDate", sessionId, routeId, [obj]);
}
}
export class LandedCostsCodesEntity{
static Add(obj: SAPB1.LandedCostsCode, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.ADD, "LandedCostsCodes", sessionId, routeId, [obj]);
}
static Update(obj: SAPB1.LandedCostsCode, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.UPDATE, "LandedCostsCodes('" + obj.Code + "')", sessionId, routeId, [obj]);
}
static Delete(obj: SAPB1.LandedCostsCodeKey, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.DELETE, "LandedCostsCodes('" + obj.Code + "')", sessionId, routeId, [obj]);
}
static Get(obj: SAPB1.LandedCostsCodeKey, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.GET, "LandedCostsCodes('" + obj.Code + "')", sessionId, routeId, [obj]);
}
}
export class EmployeeTransfersEntity{
static Add(obj: SAPB1.EmployeeTransfer, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.ADD, "EmployeeTransfers", sessionId, routeId, [obj]);
}
static Update(obj: SAPB1.EmployeeTransfer, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.UPDATE, "EmployeeTransfers(" + obj.TransferID + ")", sessionId, routeId, [obj]);
}
static Delete(obj: SAPB1.EmployeeTransferKey, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.DELETE, "EmployeeTransfers(" + obj.TransferID + ")", sessionId, routeId, [obj]);
}
static Get(obj: SAPB1.EmployeeTransferKey, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.GET, "EmployeeTransfers(" + obj.TransferID + ")", sessionId, routeId, [obj]);
}
}
export class ShippingTypesEntity{
static Add(obj: SAPB1.ShippingType, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.ADD, "ShippingTypes", sessionId, routeId, [obj]);
}
static Update(obj: SAPB1.ShippingType, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.UPDATE, "ShippingTypes(" + obj.Code + ")", sessionId, routeId, [obj]);
}
static Delete(obj: SAPB1.ShippingTypeKey, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.DELETE, "ShippingTypes(" + obj.Code + ")", sessionId, routeId, [obj]);
}
static Get(obj: SAPB1.ShippingTypeKey, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.GET, "ShippingTypes(" + obj.Code + ")", sessionId, routeId, [obj]);
}
}
export class VatGroupsEntity{
static Add(obj: SAPB1.VatGroup, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.ADD, "VatGroups", sessionId, routeId, [obj]);
}
static Update(obj: SAPB1.VatGroup, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.UPDATE, "VatGroups('" + obj.Code + "')", sessionId, routeId, [obj]);
}
static Delete(obj: SAPB1.VatGroupKey, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.DELETE, "VatGroups('" + obj.Code + "')", sessionId, routeId, [obj]);
}
static Get(obj: SAPB1.VatGroupKey, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.GET, "VatGroups('" + obj.Code + "')", sessionId, routeId, [obj]);
}
}
export class LengthMeasuresEntity{
static Add(obj: SAPB1.LengthMeasure, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.ADD, "LengthMeasures", sessionId, routeId, [obj]);
}
static Update(obj: SAPB1.LengthMeasure, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.UPDATE, "LengthMeasures(" + obj.UnitCode + ")", sessionId, routeId, [obj]);
}
static Delete(obj: SAPB1.LengthMeasureKey, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.DELETE, "LengthMeasures(" + obj.UnitCode + ")", sessionId, routeId, [obj]);
}
static Get(obj: SAPB1.LengthMeasureKey, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.GET, "LengthMeasures(" + obj.UnitCode + ")", sessionId, routeId, [obj]);
}
}
export class WeightMeasuresEntity{
static Add(obj: SAPB1.WeightMeasure, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.ADD, "WeightMeasures", sessionId, routeId, [obj]);
}
static Update(obj: SAPB1.WeightMeasure, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.UPDATE, "WeightMeasures(" + obj.UnitCode + ")", sessionId, routeId, [obj]);
}
static Delete(obj: SAPB1.WeightMeasureKey, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.DELETE, "WeightMeasures(" + obj.UnitCode + ")", sessionId, routeId, [obj]);
}
static Get(obj: SAPB1.WeightMeasureKey, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.GET, "WeightMeasures(" + obj.UnitCode + ")", sessionId, routeId, [obj]);
}
}
export class ItemGroupsEntity{
static Add(obj: SAPB1.ItemGroups, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.ADD, "ItemGroups", sessionId, routeId, [obj]);
}
static Update(obj: SAPB1.ItemGroups, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.UPDATE, "ItemGroups(" + obj.Number + ")", sessionId, routeId, [obj]);
}
static Delete(obj: SAPB1.ItemGroupsKey, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.DELETE, "ItemGroups(" + obj.Number + ")", sessionId, routeId, [obj]);
}
static Get(obj: SAPB1.ItemGroupsKey, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.GET, "ItemGroups(" + obj.Number + ")", sessionId, routeId, [obj]);
}
}
export class SalesPersonsEntity{
static Add(obj: SAPB1.SalesPerson, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.ADD, "SalesPersons", sessionId, routeId, [obj]);
}
static Update(obj: SAPB1.SalesPerson, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.UPDATE, "SalesPersons(" + obj.SalesEmployeeCode + ")", sessionId, routeId, [obj]);
}
static Delete(obj: SAPB1.SalesPersonKey, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.DELETE, "SalesPersons(" + obj.SalesEmployeeCode + ")", sessionId, routeId, [obj]);
}
static Get(obj: SAPB1.SalesPersonKey, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.GET, "SalesPersons(" + obj.SalesEmployeeCode + ")", sessionId, routeId, [obj]);
}
}
export class DeductionTaxSubGroupsEntity{
static Add(obj: SAPB1.DeductionTaxSubGroup, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.ADD, "DeductionTaxSubGroups", sessionId, routeId, [obj]);
}
static Update(obj: SAPB1.DeductionTaxSubGroup, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.UPDATE, "DeductionTaxSubGroups('" + obj.GroupCode + "')", sessionId, routeId, [obj]);
}
static Delete(obj: SAPB1.DeductionTaxSubGroupKey, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.DELETE, "DeductionTaxSubGroups('" + obj.GroupCode + "')", sessionId, routeId, [obj]);
}
static Get(obj: SAPB1.DeductionTaxSubGroupKey, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.GET, "DeductionTaxSubGroups('" + obj.GroupCode + "')", sessionId, routeId, [obj]);
}
}
export class TaxCodeDeterminationsEntity{
static Add(obj: SAPB1.TaxCodeDetermination, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.ADD, "TaxCodeDeterminations", sessionId, routeId, [obj]);
}
static Update(obj: SAPB1.TaxCodeDetermination, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.UPDATE, "TaxCodeDeterminations(" + obj.DocEntry + ")", sessionId, routeId, [obj]);
}
static Delete(obj: SAPB1.TaxCodeDeterminationKey, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.DELETE, "TaxCodeDeterminations(" + obj.DocEntry + ")", sessionId, routeId, [obj]);
}
static Get(obj: SAPB1.TaxCodeDeterminationKey, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.GET, "TaxCodeDeterminations(" + obj.DocEntry + ")", sessionId, routeId, [obj]);
}
}
export class PurchaseQuotationsEntity{
static Add(obj: SAPB1.Document, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.ADD, "PurchaseQuotations", sessionId, routeId, [obj]);
}
static Update(obj: SAPB1.Document, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.UPDATE, "PurchaseQuotations(" + obj.DocEntry + ")", sessionId, routeId, [obj]);
}
static Delete(obj: SAPB1.DocumentKey, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.DELETE, "PurchaseQuotations(" + obj.DocEntry + ")", sessionId, routeId, [obj]);
}
static Get(obj: SAPB1.DocumentKey, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.GET, "PurchaseQuotations(" + obj.DocEntry + ")", sessionId, routeId, [obj]);
}
static Close(obj: SAPB1.Document, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.ACTION, "PurchaseQuotations(" + obj.DocEntry + ")/Close", sessionId, routeId, [obj]);
}
static Cancel(obj: SAPB1.Document, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.ACTION, "PurchaseQuotations(" + obj.DocEntry + ")/Cancel", sessionId, routeId, [obj]);
}
static Reopen(obj: SAPB1.Document, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.ACTION, "PurchaseQuotations(" + obj.DocEntry + ")/Reopen", sessionId, routeId, [obj]);
}
static SaveDraftToDocument(obj: SAPB1.Document, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.ACTION, "PurchaseQuotations(" + obj.DocEntry + ")/SaveDraftToDocument", sessionId, routeId, [obj]);
}
static CreateCancellationDocument(obj: SAPB1.Document, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.ACTION, "PurchaseQuotations(" + obj.DocEntry + ")/CreateCancellationDocument", sessionId, routeId, [obj]);
}
}
export class CostCenterTypesEntity{
static Add(obj: SAPB1.CostCenterType, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.ADD, "CostCenterTypes", sessionId, routeId, [obj]);
}
static Update(obj: SAPB1.CostCenterType, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.UPDATE, "CostCenterTypes('" + obj.CostCenterTypeCode + "')", sessionId, routeId, [obj]);
}
static Delete(obj: SAPB1.CostCenterTypeKey, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.DELETE, "CostCenterTypes('" + obj.CostCenterTypeCode + "')", sessionId, routeId, [obj]);
}
static Get(obj: SAPB1.CostCenterTypeKey, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.GET, "CostCenterTypes('" + obj.CostCenterTypeCode + "')", sessionId, routeId, [obj]);
}
}
export class RecurringTransactionEntity{
static Add(obj: SAPB1.RclRecurringTransactionParams, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.ADD, "RecurringTransaction", sessionId, routeId, [obj]);
}
static Update(obj: SAPB1.RclRecurringTransactionParams, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.UPDATE, "RecurringTransaction(" + obj.TransactionID + ")", sessionId, routeId, [obj]);
}
static Delete(obj: SAPB1.RclRecurringTransactionParamsKey, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.DELETE, "RecurringTransaction(" + obj.TransactionID + ")", sessionId, routeId, [obj]);
}
static Get(obj: SAPB1.RclRecurringTransactionParamsKey, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.GET, "RecurringTransaction(" + obj.TransactionID + ")", sessionId, routeId, [obj]);
}
}
export class AccrualTypesEntity{
static Add(obj: SAPB1.AccrualType, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.ADD, "AccrualTypes", sessionId, routeId, [obj]);
}
static Update(obj: SAPB1.AccrualType, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.UPDATE, "AccrualTypes('" + obj.Code + "')", sessionId, routeId, [obj]);
}
static Delete(obj: SAPB1.AccrualTypeKey, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.DELETE, "AccrualTypes('" + obj.Code + "')", sessionId, routeId, [obj]);
}
static Get(obj: SAPB1.AccrualTypeKey, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.GET, "AccrualTypes('" + obj.Code + "')", sessionId, routeId, [obj]);
}
}
export class NFModelsEntity{
static Add(obj: SAPB1.NFModel, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.ADD, "NFModels", sessionId, routeId, [obj]);
}
static Update(obj: SAPB1.NFModel, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.UPDATE, "NFModels('" + obj.AbsEntry + "')", sessionId, routeId, [obj]);
}
static Delete(obj: SAPB1.NFModelKey, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.DELETE, "NFModels('" + obj.AbsEntry + "')", sessionId, routeId, [obj]);
}
static Get(obj: SAPB1.NFModelKey, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.GET, "NFModels('" + obj.AbsEntry + "')", sessionId, routeId, [obj]);
}
}
export class BrazilStringIndexersEntity{
static Add(obj: SAPB1.BrazilStringIndexer, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.ADD, "BrazilStringIndexers", sessionId, routeId, [obj]);
}
static Update(obj: SAPB1.BrazilStringIndexer, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.UPDATE, "BrazilStringIndexers(" + obj.ID + ")", sessionId, routeId, [obj]);
}
static Delete(obj: SAPB1.BrazilStringIndexerKey, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.DELETE, "BrazilStringIndexers(" + obj.ID + ")", sessionId, routeId, [obj]);
}
static Get(obj: SAPB1.BrazilStringIndexerKey, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.GET, "BrazilStringIndexers(" + obj.ID + ")", sessionId, routeId, [obj]);
}
static GetIndexerTypeList(obj: SAPB1.BrazilStringIndexer, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.ACTION, "BrazilStringIndexers(" + obj.ID + ")/GetIndexerTypeList", sessionId, routeId, [obj]);
}
}
export class BrazilNumericIndexersEntity{
static Add(obj: SAPB1.BrazilNumericIndexer, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.ADD, "BrazilNumericIndexers", sessionId, routeId, [obj]);
}
static Update(obj: SAPB1.BrazilNumericIndexer, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.UPDATE, "BrazilNumericIndexers(" + obj.ID + ")", sessionId, routeId, [obj]);
}
static Delete(obj: SAPB1.BrazilNumericIndexerKey, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.DELETE, "BrazilNumericIndexers(" + obj.ID + ")", sessionId, routeId, [obj]);
}
static Get(obj: SAPB1.BrazilNumericIndexerKey, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.GET, "BrazilNumericIndexers(" + obj.ID + ")", sessionId, routeId, [obj]);
}
static GetIndexerTypeList(obj: SAPB1.BrazilNumericIndexer, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.ACTION, "BrazilNumericIndexers(" + obj.ID + ")/GetIndexerTypeList", sessionId, routeId, [obj]);
}
}
export class BrazilFuelIndexersEntity{
static Add(obj: SAPB1.BrazilFuelIndexer, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.ADD, "BrazilFuelIndexers", sessionId, routeId, [obj]);
}
static Update(obj: SAPB1.BrazilFuelIndexer, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.UPDATE, "BrazilFuelIndexers(" + obj.FuelID + ")", sessionId, routeId, [obj]);
}
static Delete(obj: SAPB1.BrazilFuelIndexerKey, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.DELETE, "BrazilFuelIndexers(" + obj.FuelID + ")", sessionId, routeId, [obj]);
}
static Get(obj: SAPB1.BrazilFuelIndexerKey, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.GET, "BrazilFuelIndexers(" + obj.FuelID + ")", sessionId, routeId, [obj]);
}
}
export class BrazilBeverageIndexersEntity{
static Add(obj: SAPB1.BrazilBeverageIndexer, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.ADD, "BrazilBeverageIndexers", sessionId, routeId, [obj]);
}
static Update(obj: SAPB1.BrazilBeverageIndexer, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.UPDATE, "BrazilBeverageIndexers(" + obj.BeverageID + ")", sessionId, routeId, [obj]);
}
static Delete(obj: SAPB1.BrazilBeverageIndexerKey, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.DELETE, "BrazilBeverageIndexers(" + obj.BeverageID + ")", sessionId, routeId, [obj]);
}
static Get(obj: SAPB1.BrazilBeverageIndexerKey, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.GET, "BrazilBeverageIndexers(" + obj.BeverageID + ")", sessionId, routeId, [obj]);
}
}
export class LegalDataEntity{
static Add(obj: SAPB1.LegalData, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.ADD, "LegalData", sessionId, routeId, [obj]);
}
static Update(obj: SAPB1.LegalData, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.UPDATE, "LegalData(" + obj.DocEntry + ")", sessionId, routeId, [obj]);
}
static Delete(obj: SAPB1.LegalDataKey, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.DELETE, "LegalData(" + obj.DocEntry + ")", sessionId, routeId, [obj]);
}
static Get(obj: SAPB1.LegalDataKey, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.GET, "LegalData(" + obj.DocEntry + ")", sessionId, routeId, [obj]);
}
}
export class FiscalPrinterEntity{
static Add(obj: SAPB1.FiscalPrinter, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.ADD, "FiscalPrinter", sessionId, routeId, [obj]);
}
static Update(obj: SAPB1.FiscalPrinter, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.UPDATE, "FiscalPrinter('" + obj.EquipmentNo + "')", sessionId, routeId, [obj]);
}
static Delete(obj: SAPB1.FiscalPrinterKey, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.DELETE, "FiscalPrinter('" + obj.EquipmentNo + "')", sessionId, routeId, [obj]);
}
static Get(obj: SAPB1.FiscalPrinterKey, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.GET, "FiscalPrinter('" + obj.EquipmentNo + "')", sessionId, routeId, [obj]);
}
}
export class CustomsGroupsEntity{
static Add(obj: SAPB1.CustomsGroup, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.ADD, "CustomsGroups", sessionId, routeId, [obj]);
}
static Update(obj: SAPB1.CustomsGroup, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.UPDATE, "CustomsGroups(" + obj.Code + ")", sessionId, routeId, [obj]);
}
static Delete(obj: SAPB1.CustomsGroupKey, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.DELETE, "CustomsGroups(" + obj.Code + ")", sessionId, routeId, [obj]);
}
static Get(obj: SAPB1.CustomsGroupKey, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.GET, "CustomsGroups(" + obj.Code + ")", sessionId, routeId, [obj]);
}
}
export class ChecksforPaymentEntity{
static Add(obj: SAPB1.ChecksforPayment, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.ADD, "ChecksforPayment", sessionId, routeId, [obj]);
}
static Update(obj: SAPB1.ChecksforPayment, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.UPDATE, "ChecksforPayment(" + obj.CheckKey + ")", sessionId, routeId, [obj]);
}
static Delete(obj: SAPB1.ChecksforPaymentKey, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.DELETE, "ChecksforPayment(" + obj.CheckKey + ")", sessionId, routeId, [obj]);
}
static Get(obj: SAPB1.ChecksforPaymentKey, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.GET, "ChecksforPayment(" + obj.CheckKey + ")", sessionId, routeId, [obj]);
}
}
export class InventoryGenEntriesEntity{
static Add(obj: SAPB1.Document, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.ADD, "InventoryGenEntries", sessionId, routeId, [obj]);
}
static Update(obj: SAPB1.Document, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.UPDATE, "InventoryGenEntries(" + obj.DocEntry + ")", sessionId, routeId, [obj]);
}
static Delete(obj: SAPB1.DocumentKey, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.DELETE, "InventoryGenEntries(" + obj.DocEntry + ")", sessionId, routeId, [obj]);
}
static Get(obj: SAPB1.DocumentKey, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.GET, "InventoryGenEntries(" + obj.DocEntry + ")", sessionId, routeId, [obj]);
}
static Close(obj: SAPB1.Document, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.ACTION, "InventoryGenEntries(" + obj.DocEntry + ")/Close", sessionId, routeId, [obj]);
}
static Cancel(obj: SAPB1.Document, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.ACTION, "InventoryGenEntries(" + obj.DocEntry + ")/Cancel", sessionId, routeId, [obj]);
}
static Reopen(obj: SAPB1.Document, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.ACTION, "InventoryGenEntries(" + obj.DocEntry + ")/Reopen", sessionId, routeId, [obj]);
}
static SaveDraftToDocument(obj: SAPB1.Document, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.ACTION, "InventoryGenEntries(" + obj.DocEntry + ")/SaveDraftToDocument", sessionId, routeId, [obj]);
}
static CreateCancellationDocument(obj: SAPB1.Document, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.ACTION, "InventoryGenEntries(" + obj.DocEntry + ")/CreateCancellationDocument", sessionId, routeId, [obj]);
}
}
export class PriceListsEntity{
static Add(obj: SAPB1.PriceList, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.ADD, "PriceLists", sessionId, routeId, [obj]);
}
static Update(obj: SAPB1.PriceList, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.UPDATE, "PriceLists(" + obj.PriceListNo + ")", sessionId, routeId, [obj]);
}
static Delete(obj: SAPB1.PriceListKey, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.DELETE, "PriceLists(" + obj.PriceListNo + ")", sessionId, routeId, [obj]);
}
static Get(obj: SAPB1.PriceListKey, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.GET, "PriceLists(" + obj.PriceListNo + ")", sessionId, routeId, [obj]);
}
}
export class InventoryGenExitsEntity{
static Add(obj: SAPB1.Document, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.ADD, "InventoryGenExits", sessionId, routeId, [obj]);
}
static Update(obj: SAPB1.Document, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.UPDATE, "InventoryGenExits(" + obj.DocEntry + ")", sessionId, routeId, [obj]);
}
static Delete(obj: SAPB1.DocumentKey, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.DELETE, "InventoryGenExits(" + obj.DocEntry + ")", sessionId, routeId, [obj]);
}
static Get(obj: SAPB1.DocumentKey, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.GET, "InventoryGenExits(" + obj.DocEntry + ")", sessionId, routeId, [obj]);
}
static Close(obj: SAPB1.Document, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.ACTION, "InventoryGenExits(" + obj.DocEntry + ")/Close", sessionId, routeId, [obj]);
}
static Cancel(obj: SAPB1.Document, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.ACTION, "InventoryGenExits(" + obj.DocEntry + ")/Cancel", sessionId, routeId, [obj]);
}
static Reopen(obj: SAPB1.Document, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.ACTION, "InventoryGenExits(" + obj.DocEntry + ")/Reopen", sessionId, routeId, [obj]);
}
static SaveDraftToDocument(obj: SAPB1.Document, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.ACTION, "InventoryGenExits(" + obj.DocEntry + ")/SaveDraftToDocument", sessionId, routeId, [obj]);
}
static CreateCancellationDocument(obj: SAPB1.Document, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.ACTION, "InventoryGenExits(" + obj.DocEntry + ")/CreateCancellationDocument", sessionId, routeId, [obj]);
}
}
export class ProfitCentersEntity{
static Add(obj: SAPB1.ProfitCenter, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.ADD, "ProfitCenters", sessionId, routeId, [obj]);
}
static Update(obj: SAPB1.ProfitCenter, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.UPDATE, "ProfitCenters('" + obj.CenterCode + "')", sessionId, routeId, [obj]);
}
static Delete(obj: SAPB1.ProfitCenterKey, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.DELETE, "ProfitCenters('" + obj.CenterCode + "')", sessionId, routeId, [obj]);
}
static Get(obj: SAPB1.ProfitCenterKey, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.GET, "ProfitCenters('" + obj.CenterCode + "')", sessionId, routeId, [obj]);
}
}
export class DistributionRulesEntity{
static Add(obj: SAPB1.DistributionRule, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.ADD, "DistributionRules", sessionId, routeId, [obj]);
}
static Update(obj: SAPB1.DistributionRule, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.UPDATE, "DistributionRules('" + obj.FactorCode + "')", sessionId, routeId, [obj]);
}
static Delete(obj: SAPB1.DistributionRuleKey, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.DELETE, "DistributionRules('" + obj.FactorCode + "')", sessionId, routeId, [obj]);
}
static Get(obj: SAPB1.DistributionRuleKey, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.GET, "DistributionRules('" + obj.FactorCode + "')", sessionId, routeId, [obj]);
}
}
export class ProjectsEntity{
static Add(obj: SAPB1.Project, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.ADD, "Projects", sessionId, routeId, [obj]);
}
static Update(obj: SAPB1.Project, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.UPDATE, "Projects('" + obj.Code + "')", sessionId, routeId, [obj]);
}
static Delete(obj: SAPB1.ProjectKey, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.DELETE, "Projects('" + obj.Code + "')", sessionId, routeId, [obj]);
}
static Get(obj: SAPB1.ProjectKey, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.GET, "Projects('" + obj.Code + "')", sessionId, routeId, [obj]);
}
}
export class WarehousesEntity{
static Add(obj: SAPB1.Warehouse, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.ADD, "Warehouses", sessionId, routeId, [obj]);
}
static Update(obj: SAPB1.Warehouse, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.UPDATE, "Warehouses('" + obj.WarehouseCode + "')", sessionId, routeId, [obj]);
}
static Delete(obj: SAPB1.WarehouseKey, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.DELETE, "Warehouses('" + obj.WarehouseCode + "')", sessionId, routeId, [obj]);
}
static Get(obj: SAPB1.WarehouseKey, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.GET, "Warehouses('" + obj.WarehouseCode + "')", sessionId, routeId, [obj]);
}
}
export class CommissionGroupsEntity{
static Add(obj: SAPB1.CommissionGroup, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.ADD, "CommissionGroups", sessionId, routeId, [obj]);
}
static Update(obj: SAPB1.CommissionGroup, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.UPDATE, "CommissionGroups(" + obj.CommissionGroupCode + ")", sessionId, routeId, [obj]);
}
static Delete(obj: SAPB1.CommissionGroupKey, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.DELETE, "CommissionGroups(" + obj.CommissionGroupCode + ")", sessionId, routeId, [obj]);
}
static Get(obj: SAPB1.CommissionGroupKey, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.GET, "CommissionGroups(" + obj.CommissionGroupCode + ")", sessionId, routeId, [obj]);
}
}
export class ProductTreesEntity{
static Add(obj: SAPB1.ProductTree, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.ADD, "ProductTrees", sessionId, routeId, [obj]);
}
static Update(obj: SAPB1.ProductTree, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.UPDATE, "ProductTrees('" + obj.TreeCode + "')", sessionId, routeId, [obj]);
}
static Delete(obj: SAPB1.ProductTreeKey, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.DELETE, "ProductTrees('" + obj.TreeCode + "')", sessionId, routeId, [obj]);
}
static Get(obj: SAPB1.ProductTreeKey, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.GET, "ProductTrees('" + obj.TreeCode + "')", sessionId, routeId, [obj]);
}
}
export class StockTransfersEntity{
static Add(obj: SAPB1.StockTransfer, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.ADD, "StockTransfers", sessionId, routeId, [obj]);
}
static Update(obj: SAPB1.StockTransfer, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.UPDATE, "StockTransfers(" + obj.DocEntry + ")", sessionId, routeId, [obj]);
}
static Delete(obj: SAPB1.StockTransferKey, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.DELETE, "StockTransfers(" + obj.DocEntry + ")", sessionId, routeId, [obj]);
}
static Get(obj: SAPB1.StockTransferKey, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.GET, "StockTransfers(" + obj.DocEntry + ")", sessionId, routeId, [obj]);
}
static Cancel(obj: SAPB1.StockTransfer, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.ACTION, "StockTransfers(" + obj.DocEntry + ")/Cancel", sessionId, routeId, [obj]);
}
static Close(obj: SAPB1.StockTransfer, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.ACTION, "StockTransfers(" + obj.DocEntry + ")/Close", sessionId, routeId, [obj]);
}
static SaveDraftToDocument(obj: SAPB1.StockTransfer, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.ACTION, "StockTransfers(" + obj.DocEntry + ")/SaveDraftToDocument", sessionId, routeId, [obj]);
}
}
export class WorkOrdersEntity{
static Add(obj: SAPB1.WorkOrder, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.ADD, "WorkOrders", sessionId, routeId, [obj]);
}
static Update(obj: SAPB1.WorkOrder, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.UPDATE, "WorkOrders(" + obj.OrderNum + ")", sessionId, routeId, [obj]);
}
static Delete(obj: SAPB1.WorkOrderKey, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.DELETE, "WorkOrders(" + obj.OrderNum + ")", sessionId, routeId, [obj]);
}
static Get(obj: SAPB1.WorkOrderKey, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.GET, "WorkOrders(" + obj.OrderNum + ")", sessionId, routeId, [obj]);
}
}
export class LandedCostsEntity{
static Add(obj: SAPB1.LandedCost, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.ADD, "LandedCosts", sessionId, routeId, [obj]);
}
static Update(obj: SAPB1.LandedCost, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.UPDATE, "LandedCosts(" + obj.DocEntry + ")", sessionId, routeId, [obj]);
}
static Delete(obj: SAPB1.LandedCostKey, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.DELETE, "LandedCosts(" + obj.DocEntry + ")", sessionId, routeId, [obj]);
}
static Get(obj: SAPB1.LandedCostKey, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.GET, "LandedCosts(" + obj.DocEntry + ")", sessionId, routeId, [obj]);
}
static CloseLandedCost(obj: SAPB1.LandedCost, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.ACTION, "LandedCosts(" + obj.DocEntry + ")/CloseLandedCost", sessionId, routeId, [obj]);
}
static CancelLandedCost(obj: SAPB1.LandedCost, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.ACTION, "LandedCosts(" + obj.DocEntry + ")/CancelLandedCost", sessionId, routeId, [obj]);
}
}
export class SpecialPricesEntity{
static Add(obj: SAPB1.SpecialPrice, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.ADD, "SpecialPrices", sessionId, routeId, [obj]);
}
static Update(obj: SAPB1.SpecialPrice, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.UPDATE, "SpecialPrices('" + obj.ItemCode + "', '" + obj.CardCode + "')", sessionId, routeId, [obj]);
}
static Delete(obj: SAPB1.SpecialPriceKey, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.DELETE, "SpecialPrices('" + obj.ItemCode + "', '" + obj.CardCode + "')", sessionId, routeId, [obj]);
}
static Get(obj: SAPB1.SpecialPriceKey, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.GET, "SpecialPrices('" + obj.ItemCode + "', '" + obj.CardCode + "')", sessionId, routeId, [obj]);
}
}
export class CreditPaymentMethodsEntity{
static Add(obj: SAPB1.CreditPaymentMethod, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.ADD, "CreditPaymentMethods", sessionId, routeId, [obj]);
}
static Update(obj: SAPB1.CreditPaymentMethod, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.UPDATE, "CreditPaymentMethods(" + obj.PaymentMethodCode + ")", sessionId, routeId, [obj]);
}
static Delete(obj: SAPB1.CreditPaymentMethodKey, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.DELETE, "CreditPaymentMethods(" + obj.PaymentMethodCode + ")", sessionId, routeId, [obj]);
}
static Get(obj: SAPB1.CreditPaymentMethodKey, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.GET, "CreditPaymentMethods(" + obj.PaymentMethodCode + ")", sessionId, routeId, [obj]);
}
}
export class CreditCardPaymentsEntity{
static Add(obj: SAPB1.CreditCardPayment, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.ADD, "CreditCardPayments", sessionId, routeId, [obj]);
}
static Update(obj: SAPB1.CreditCardPayment, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.UPDATE, "CreditCardPayments('" + obj.DueDateCode + "')", sessionId, routeId, [obj]);
}
static Delete(obj: SAPB1.CreditCardPaymentKey, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.DELETE, "CreditCardPayments('" + obj.DueDateCode + "')", sessionId, routeId, [obj]);
}
static Get(obj: SAPB1.CreditCardPaymentKey, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.GET, "CreditCardPayments('" + obj.DueDateCode + "')", sessionId, routeId, [obj]);
}
}
export class AlternateCatNumEntity{
static Add(obj: SAPB1.AlternateCatNum, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.ADD, "AlternateCatNum", sessionId, routeId, [obj]);
}
static Update(obj: SAPB1.AlternateCatNum, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.UPDATE, "AlternateCatNum('" + obj.ItemCode + "', '" + obj.CardCode + "', '" + obj.Substitute + "')", sessionId, routeId, [obj]);
}
static Delete(obj: SAPB1.AlternateCatNumKey, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.DELETE, "AlternateCatNum('" + obj.ItemCode + "', '" + obj.CardCode + "', '" + obj.Substitute + "')", sessionId, routeId, [obj]);
}
static Get(obj: SAPB1.AlternateCatNumKey, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.GET, "AlternateCatNum('" + obj.ItemCode + "', '" + obj.CardCode + "', '" + obj.Substitute + "')", sessionId, routeId, [obj]);
}
}
export class BudgetsEntity{
static Add(obj: SAPB1.Budget, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.ADD, "Budgets", sessionId, routeId, [obj]);
}
static Update(obj: SAPB1.Budget, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.UPDATE, "Budgets(" + obj.Numerator + ")", sessionId, routeId, [obj]);
}
static Delete(obj: SAPB1.BudgetKey, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.DELETE, "Budgets(" + obj.Numerator + ")", sessionId, routeId, [obj]);
}
static Get(obj: SAPB1.BudgetKey, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.GET, "Budgets(" + obj.Numerator + ")", sessionId, routeId, [obj]);
}
}
export class BudgetDistributionsEntity{
static Add(obj: SAPB1.BudgetDistribution, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.ADD, "BudgetDistributions", sessionId, routeId, [obj]);
}
static Update(obj: SAPB1.BudgetDistribution, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.UPDATE, "BudgetDistributions(" + obj.DivisionCode + ")", sessionId, routeId, [obj]);
}
static Delete(obj: SAPB1.BudgetDistributionKey, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.DELETE, "BudgetDistributions(" + obj.DivisionCode + ")", sessionId, routeId, [obj]);
}
static Get(obj: SAPB1.BudgetDistributionKey, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.GET, "BudgetDistributions(" + obj.DivisionCode + ")", sessionId, routeId, [obj]);
}
}
export class ItemPropertiesEntity{
static Add(obj: SAPB1.ItemProperty, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.ADD, "ItemProperties", sessionId, routeId, [obj]);
}
static Update(obj: SAPB1.ItemProperty, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.UPDATE, "ItemProperties(" + obj.Number + ")", sessionId, routeId, [obj]);
}
static Delete(obj: SAPB1.ItemPropertyKey, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.DELETE, "ItemProperties(" + obj.Number + ")", sessionId, routeId, [obj]);
}
static Get(obj: SAPB1.ItemPropertyKey, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.GET, "ItemProperties(" + obj.Number + ")", sessionId, routeId, [obj]);
}
}
export class AlertManagementsEntity{
static Add(obj: SAPB1.AlertManagement, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.ADD, "AlertManagements", sessionId, routeId, [obj]);
}
static Update(obj: SAPB1.AlertManagement, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.UPDATE, "AlertManagements(" + obj.Code + ")", sessionId, routeId, [obj]);
}
static Delete(obj: SAPB1.AlertManagementKey, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.DELETE, "AlertManagements(" + obj.Code + ")", sessionId, routeId, [obj]);
}
static Get(obj: SAPB1.AlertManagementKey, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.GET, "AlertManagements(" + obj.Code + ")", sessionId, routeId, [obj]);
}
static GetAlertManagementList(obj: SAPB1.AlertManagement, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.ACTION, "AlertManagements(" + obj.Code + ")/GetAlertManagementList", sessionId, routeId, [obj]);
}
}
export class MessagesEntity{
static Add(obj: SAPB1.Message, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.ADD, "Messages", sessionId, routeId, [obj]);
}
static Update(obj: SAPB1.Message, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.UPDATE, "Messages(" + obj.Code + ")", sessionId, routeId, [obj]);
}
static Delete(obj: SAPB1.MessageKey, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.DELETE, "Messages(" + obj.Code + ")", sessionId, routeId, [obj]);
}
static Get(obj: SAPB1.MessageKey, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.GET, "Messages(" + obj.Code + ")", sessionId, routeId, [obj]);
}
}
export class BudgetScenariosEntity{
static Add(obj: SAPB1.BudgetScenario, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.ADD, "BudgetScenarios", sessionId, routeId, [obj]);
}
static Update(obj: SAPB1.BudgetScenario, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.UPDATE, "BudgetScenarios(" + obj.Numerator + ")", sessionId, routeId, [obj]);
}
static Delete(obj: SAPB1.BudgetScenarioKey, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.DELETE, "BudgetScenarios(" + obj.Numerator + ")", sessionId, routeId, [obj]);
}
static Get(obj: SAPB1.BudgetScenarioKey, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.GET, "BudgetScenarios(" + obj.Numerator + ")", sessionId, routeId, [obj]);
}
}
export class UserDefaultGroupsEntity{
static Add(obj: SAPB1.UserDefaultGroup, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.ADD, "UserDefaultGroups", sessionId, routeId, [obj]);
}
static Update(obj: SAPB1.UserDefaultGroup, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.UPDATE, "UserDefaultGroups('" + obj.Code + "')", sessionId, routeId, [obj]);
}
static Delete(obj: SAPB1.UserDefaultGroupKey, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.DELETE, "UserDefaultGroups('" + obj.Code + "')", sessionId, routeId, [obj]);
}
static Get(obj: SAPB1.UserDefaultGroupKey, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.GET, "UserDefaultGroups('" + obj.Code + "')", sessionId, routeId, [obj]);
}
}
export class SalesOpportunitiesEntity{
static Add(obj: SAPB1.SalesOpportunities, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.ADD, "SalesOpportunities", sessionId, routeId, [obj]);
}
static Update(obj: SAPB1.SalesOpportunities, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.UPDATE, "SalesOpportunities(" + obj.SequentialNo + ")", sessionId, routeId, [obj]);
}
static Delete(obj: SAPB1.SalesOpportunitiesKey, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.DELETE, "SalesOpportunities(" + obj.SequentialNo + ")", sessionId, routeId, [obj]);
}
static Get(obj: SAPB1.SalesOpportunitiesKey, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.GET, "SalesOpportunities(" + obj.SequentialNo + ")", sessionId, routeId, [obj]);
}
static Close(obj: SAPB1.SalesOpportunities, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.ACTION, "SalesOpportunities(" + obj.SequentialNo + ")/Close", sessionId, routeId, [obj]);
}
}
export class SalesOpportunityInterestsSetupEntity{
static Add(obj: SAPB1.SalesOpportunityInterestSetup, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.ADD, "SalesOpportunityInterestsSetup", sessionId, routeId, [obj]);
}
static Update(obj: SAPB1.SalesOpportunityInterestSetup, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.UPDATE, "SalesOpportunityInterestsSetup(" + obj.SequenceNo + ")", sessionId, routeId, [obj]);
}
static Delete(obj: SAPB1.SalesOpportunityInterestSetupKey, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.DELETE, "SalesOpportunityInterestsSetup(" + obj.SequenceNo + ")", sessionId, routeId, [obj]);
}
static Get(obj: SAPB1.SalesOpportunityInterestSetupKey, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.GET, "SalesOpportunityInterestsSetup(" + obj.SequenceNo + ")", sessionId, routeId, [obj]);
}
}
export class U_ATTACHMENTSEntity{
static Add(obj: SAPB1.ATTACHMENTS, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.ADD, "U_ATTACHMENTS", sessionId, routeId, [obj]);
}
static Update(obj: SAPB1.ATTACHMENTS, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.UPDATE, "U_ATTACHMENTS('" + obj.Code + "')", sessionId, routeId, [obj]);
}
static Delete(obj: SAPB1.ATTACHMENTSKey, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.DELETE, "U_ATTACHMENTS('" + obj.Code + "')", sessionId, routeId, [obj]);
}
static Get(obj: SAPB1.ATTACHMENTSKey, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.GET, "U_ATTACHMENTS('" + obj.Code + "')", sessionId, routeId, [obj]);
}
}
export class U_BXPAUDITEntity{
static Add(obj: SAPB1.BXPAUDIT, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.ADD, "U_BXPAUDIT", sessionId, routeId, [obj]);
}
static Update(obj: SAPB1.BXPAUDIT, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.UPDATE, "U_BXPAUDIT('" + obj.Code + "')", sessionId, routeId, [obj]);
}
static Delete(obj: SAPB1.BXPAUDITKey, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.DELETE, "U_BXPAUDIT('" + obj.Code + "')", sessionId, routeId, [obj]);
}
static Get(obj: SAPB1.BXPAUDITKey, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.GET, "U_BXPAUDIT('" + obj.Code + "')", sessionId, routeId, [obj]);
}
}
export class U_BXPCONFIGEntity{
static Add(obj: SAPB1.BXPCONFIG, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.ADD, "U_BXPCONFIG", sessionId, routeId, [obj]);
}
static Update(obj: SAPB1.BXPCONFIG, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.UPDATE, "U_BXPCONFIG('" + obj.Code + "')", sessionId, routeId, [obj]);
}
static Delete(obj: SAPB1.BXPCONFIGKey, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.DELETE, "U_BXPCONFIG('" + obj.Code + "')", sessionId, routeId, [obj]);
}
static Get(obj: SAPB1.BXPCONFIGKey, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.GET, "U_BXPCONFIG('" + obj.Code + "')", sessionId, routeId, [obj]);
}
}
export class U_BXPCTRLPREFSEntity{
static Add(obj: SAPB1.BXPCTRLPREFS, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.ADD, "U_BXPCTRLPREFS", sessionId, routeId, [obj]);
}
static Update(obj: SAPB1.BXPCTRLPREFS, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.UPDATE, "U_BXPCTRLPREFS('" + obj.Code + "')", sessionId, routeId, [obj]);
}
static Delete(obj: SAPB1.BXPCTRLPREFSKey, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.DELETE, "U_BXPCTRLPREFS('" + obj.Code + "')", sessionId, routeId, [obj]);
}
static Get(obj: SAPB1.BXPCTRLPREFSKey, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.GET, "U_BXPCTRLPREFS('" + obj.Code + "')", sessionId, routeId, [obj]);
}
}
export class U_BXPCUSTFDEntity{
static Add(obj: SAPB1.BXPCUSTFD, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.ADD, "U_BXPCUSTFD", sessionId, routeId, [obj]);
}
static Update(obj: SAPB1.BXPCUSTFD, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.UPDATE, "U_BXPCUSTFD('" + obj.Code + "')", sessionId, routeId, [obj]);
}
static Delete(obj: SAPB1.BXPCUSTFDKey, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.DELETE, "U_BXPCUSTFD('" + obj.Code + "')", sessionId, routeId, [obj]);
}
static Get(obj: SAPB1.BXPCUSTFDKey, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.GET, "U_BXPCUSTFD('" + obj.Code + "')", sessionId, routeId, [obj]);
}
}
export class U_BXPCUSTSORTDEFEntity{
static Add(obj: SAPB1.BXPCUSTSORTDEF, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.ADD, "U_BXPCUSTSORTDEF", sessionId, routeId, [obj]);
}
static Update(obj: SAPB1.BXPCUSTSORTDEF, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.UPDATE, "U_BXPCUSTSORTDEF('" + obj.Code + "')", sessionId, routeId, [obj]);
}
static Delete(obj: SAPB1.BXPCUSTSORTDEFKey, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.DELETE, "U_BXPCUSTSORTDEF('" + obj.Code + "')", sessionId, routeId, [obj]);
}
static Get(obj: SAPB1.BXPCUSTSORTDEFKey, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.GET, "U_BXPCUSTSORTDEF('" + obj.Code + "')", sessionId, routeId, [obj]);
}
}
export class U_BXPFORMPREFSEntity{
static Add(obj: SAPB1.BXPFORMPREFS, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.ADD, "U_BXPFORMPREFS", sessionId, routeId, [obj]);
}
static Update(obj: SAPB1.BXPFORMPREFS, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.UPDATE, "U_BXPFORMPREFS('" + obj.Code + "')", sessionId, routeId, [obj]);
}
static Delete(obj: SAPB1.BXPFORMPREFSKey, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.DELETE, "U_BXPFORMPREFS('" + obj.Code + "')", sessionId, routeId, [obj]);
}
static Get(obj: SAPB1.BXPFORMPREFSKey, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.GET, "U_BXPFORMPREFS('" + obj.Code + "')", sessionId, routeId, [obj]);
}
}
export class U_BXPLICFEATEntity{
static Add(obj: SAPB1.BXPLICFEAT, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.ADD, "U_BXPLICFEAT", sessionId, routeId, [obj]);
}
static Update(obj: SAPB1.BXPLICFEAT, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.UPDATE, "U_BXPLICFEAT('" + obj.Code + "')", sessionId, routeId, [obj]);
}
static Delete(obj: SAPB1.BXPLICFEATKey, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.DELETE, "U_BXPLICFEAT('" + obj.Code + "')", sessionId, routeId, [obj]);
}
static Get(obj: SAPB1.BXPLICFEATKey, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.GET, "U_BXPLICFEAT('" + obj.Code + "')", sessionId, routeId, [obj]);
}
}
export class U_BXPLICIPEntity{
static Add(obj: SAPB1.BXPLICIP, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.ADD, "U_BXPLICIP", sessionId, routeId, [obj]);
}
static Update(obj: SAPB1.BXPLICIP, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.UPDATE, "U_BXPLICIP('" + obj.Code + "')", sessionId, routeId, [obj]);
}
static Delete(obj: SAPB1.BXPLICIPKey, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.DELETE, "U_BXPLICIP('" + obj.Code + "')", sessionId, routeId, [obj]);
}
static Get(obj: SAPB1.BXPLICIPKey, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.GET, "U_BXPLICIP('" + obj.Code + "')", sessionId, routeId, [obj]);
}
}
export class U_BXPLICSETEntity{
static Add(obj: SAPB1.BXPLICSET, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.ADD, "U_BXPLICSET", sessionId, routeId, [obj]);
}
static Update(obj: SAPB1.BXPLICSET, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.UPDATE, "U_BXPLICSET('" + obj.Code + "')", sessionId, routeId, [obj]);
}
static Delete(obj: SAPB1.BXPLICSETKey, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.DELETE, "U_BXPLICSET('" + obj.Code + "')", sessionId, routeId, [obj]);
}
static Get(obj: SAPB1.BXPLICSETKey, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.GET, "U_BXPLICSET('" + obj.Code + "')", sessionId, routeId, [obj]);
}
}
export class U_BXPLICTEREntity{
static Add(obj: SAPB1.BXPLICTER, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.ADD, "U_BXPLICTER", sessionId, routeId, [obj]);
}
static Update(obj: SAPB1.BXPLICTER, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.UPDATE, "U_BXPLICTER('" + obj.Code + "')", sessionId, routeId, [obj]);
}
static Delete(obj: SAPB1.BXPLICTERKey, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.DELETE, "U_BXPLICTER('" + obj.Code + "')", sessionId, routeId, [obj]);
}
static Get(obj: SAPB1.BXPLICTERKey, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.GET, "U_BXPLICTER('" + obj.Code + "')", sessionId, routeId, [obj]);
}
}
export class U_BXPLMSEMPPRINTEREntity{
static Add(obj: SAPB1.BXPLMSEMPPRINTER, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.ADD, "U_BXPLMSEMPPRINTER", sessionId, routeId, [obj]);
}
static Update(obj: SAPB1.BXPLMSEMPPRINTER, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.UPDATE, "U_BXPLMSEMPPRINTER('" + obj.Code + "')", sessionId, routeId, [obj]);
}
static Delete(obj: SAPB1.BXPLMSEMPPRINTERKey, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.DELETE, "U_BXPLMSEMPPRINTER('" + obj.Code + "')", sessionId, routeId, [obj]);
}
static Get(obj: SAPB1.BXPLMSEMPPRINTERKey, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.GET, "U_BXPLMSEMPPRINTER('" + obj.Code + "')", sessionId, routeId, [obj]);
}
}
export class U_BXPLMSMOBINVCOUNTEntity{
static Add(obj: SAPB1.BXPLMSMOBINVCOUNT, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.ADD, "U_BXPLMSMOBINVCOUNT", sessionId, routeId, [obj]);
}
static Update(obj: SAPB1.BXPLMSMOBINVCOUNT, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.UPDATE, "U_BXPLMSMOBINVCOUNT('" + obj.Code + "')", sessionId, routeId, [obj]);
}
static Delete(obj: SAPB1.BXPLMSMOBINVCOUNTKey, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.DELETE, "U_BXPLMSMOBINVCOUNT('" + obj.Code + "')", sessionId, routeId, [obj]);
}
static Get(obj: SAPB1.BXPLMSMOBINVCOUNTKey, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.GET, "U_BXPLMSMOBINVCOUNT('" + obj.Code + "')", sessionId, routeId, [obj]);
}
}
export class U_BXPLMSMOBLOGEntity{
static Add(obj: SAPB1.BXPLMSMOBLOG, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.ADD, "U_BXPLMSMOBLOG", sessionId, routeId, [obj]);
}
static Update(obj: SAPB1.BXPLMSMOBLOG, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.UPDATE, "U_BXPLMSMOBLOG('" + obj.Code + "')", sessionId, routeId, [obj]);
}
static Delete(obj: SAPB1.BXPLMSMOBLOGKey, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.DELETE, "U_BXPLMSMOBLOG('" + obj.Code + "')", sessionId, routeId, [obj]);
}
static Get(obj: SAPB1.BXPLMSMOBLOGKey, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.GET, "U_BXPLMSMOBLOG('" + obj.Code + "')", sessionId, routeId, [obj]);
}
}
export class U_BXPLMSMOBPICKEntity{
static Add(obj: SAPB1.BXPLMSMOBPICK, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.ADD, "U_BXPLMSMOBPICK", sessionId, routeId, [obj]);
}
static Update(obj: SAPB1.BXPLMSMOBPICK, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.UPDATE, "U_BXPLMSMOBPICK('" + obj.Code + "')", sessionId, routeId, [obj]);
}
static Delete(obj: SAPB1.BXPLMSMOBPICKKey, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.DELETE, "U_BXPLMSMOBPICK('" + obj.Code + "')", sessionId, routeId, [obj]);
}
static Get(obj: SAPB1.BXPLMSMOBPICKKey, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.GET, "U_BXPLMSMOBPICK('" + obj.Code + "')", sessionId, routeId, [obj]);
}
}
export class U_BXPLMSMOBTENEntity{
static Add(obj: SAPB1.BXPLMSMOBTEN, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.ADD, "U_BXPLMSMOBTEN", sessionId, routeId, [obj]);
}
static Update(obj: SAPB1.BXPLMSMOBTEN, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.UPDATE, "U_BXPLMSMOBTEN('" + obj.Code + "')", sessionId, routeId, [obj]);
}
static Delete(obj: SAPB1.BXPLMSMOBTENKey, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.DELETE, "U_BXPLMSMOBTEN('" + obj.Code + "')", sessionId, routeId, [obj]);
}
static Get(obj: SAPB1.BXPLMSMOBTENKey, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.GET, "U_BXPLMSMOBTEN('" + obj.Code + "')", sessionId, routeId, [obj]);
}
}
export class U_BXPLMSMOBTHDEntity{
static Add(obj: SAPB1.BXPLMSMOBTHD, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.ADD, "U_BXPLMSMOBTHD", sessionId, routeId, [obj]);
}
static Update(obj: SAPB1.BXPLMSMOBTHD, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.UPDATE, "U_BXPLMSMOBTHD('" + obj.Code + "')", sessionId, routeId, [obj]);
}
static Delete(obj: SAPB1.BXPLMSMOBTHDKey, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.DELETE, "U_BXPLMSMOBTHD('" + obj.Code + "')", sessionId, routeId, [obj]);
}
static Get(obj: SAPB1.BXPLMSMOBTHDKey, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.GET, "U_BXPLMSMOBTHD('" + obj.Code + "')", sessionId, routeId, [obj]);
}
}
export class U_BXPLMSMOBTLNEntity{
static Add(obj: SAPB1.BXPLMSMOBTLN, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.ADD, "U_BXPLMSMOBTLN", sessionId, routeId, [obj]);
}
static Update(obj: SAPB1.BXPLMSMOBTLN, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.UPDATE, "U_BXPLMSMOBTLN('" + obj.Code + "')", sessionId, routeId, [obj]);
}
static Delete(obj: SAPB1.BXPLMSMOBTLNKey, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.DELETE, "U_BXPLMSMOBTLN('" + obj.Code + "')", sessionId, routeId, [obj]);
}
static Get(obj: SAPB1.BXPLMSMOBTLNKey, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.GET, "U_BXPLMSMOBTLN('" + obj.Code + "')", sessionId, routeId, [obj]);
}
}
export class U_BXPLMSPRINTEREntity{
static Add(obj: SAPB1.BXPLMSPRINTER, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.ADD, "U_BXPLMSPRINTER", sessionId, routeId, [obj]);
}
static Update(obj: SAPB1.BXPLMSPRINTER, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.UPDATE, "U_BXPLMSPRINTER('" + obj.Code + "')", sessionId, routeId, [obj]);
}
static Delete(obj: SAPB1.BXPLMSPRINTERKey, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.DELETE, "U_BXPLMSPRINTER('" + obj.Code + "')", sessionId, routeId, [obj]);
}
static Get(obj: SAPB1.BXPLMSPRINTERKey, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.GET, "U_BXPLMSPRINTER('" + obj.Code + "')", sessionId, routeId, [obj]);
}
}
export class U_BXPLMSPRINTLAYOUTEntity{
static Add(obj: SAPB1.BXPLMSPRINTLAYOUT, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.ADD, "U_BXPLMSPRINTLAYOUT", sessionId, routeId, [obj]);
}
static Update(obj: SAPB1.BXPLMSPRINTLAYOUT, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.UPDATE, "U_BXPLMSPRINTLAYOUT('" + obj.Code + "')", sessionId, routeId, [obj]);
}
static Delete(obj: SAPB1.BXPLMSPRINTLAYOUTKey, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.DELETE, "U_BXPLMSPRINTLAYOUT('" + obj.Code + "')", sessionId, routeId, [obj]);
}
static Get(obj: SAPB1.BXPLMSPRINTLAYOUTKey, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.GET, "U_BXPLMSPRINTLAYOUT('" + obj.Code + "')", sessionId, routeId, [obj]);
}
}
export class U_BXPLMSPRINTLAYSETEntity{
static Add(obj: SAPB1.BXPLMSPRINTLAYSET, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.ADD, "U_BXPLMSPRINTLAYSET", sessionId, routeId, [obj]);
}
static Update(obj: SAPB1.BXPLMSPRINTLAYSET, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.UPDATE, "U_BXPLMSPRINTLAYSET('" + obj.Code + "')", sessionId, routeId, [obj]);
}
static Delete(obj: SAPB1.BXPLMSPRINTLAYSETKey, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.DELETE, "U_BXPLMSPRINTLAYSET('" + obj.Code + "')", sessionId, routeId, [obj]);
}
static Get(obj: SAPB1.BXPLMSPRINTLAYSETKey, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.GET, "U_BXPLMSPRINTLAYSET('" + obj.Code + "')", sessionId, routeId, [obj]);
}
}
export class U_BXPLMSUSRPREFEntity{
static Add(obj: SAPB1.BXPLMSUSRPREF, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.ADD, "U_BXPLMSUSRPREF", sessionId, routeId, [obj]);
}
static Update(obj: SAPB1.BXPLMSUSRPREF, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.UPDATE, "U_BXPLMSUSRPREF('" + obj.Code + "')", sessionId, routeId, [obj]);
}
static Delete(obj: SAPB1.BXPLMSUSRPREFKey, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.DELETE, "U_BXPLMSUSRPREF('" + obj.Code + "')", sessionId, routeId, [obj]);
}
static Get(obj: SAPB1.BXPLMSUSRPREFKey, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.GET, "U_BXPLMSUSRPREF('" + obj.Code + "')", sessionId, routeId, [obj]);
}
}
export class U_BXPLOGEntity{
static Add(obj: SAPB1.BXPLOG, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.ADD, "U_BXPLOG", sessionId, routeId, [obj]);
}
static Update(obj: SAPB1.BXPLOG, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.UPDATE, "U_BXPLOG('" + obj.Code + "')", sessionId, routeId, [obj]);
}
static Delete(obj: SAPB1.BXPLOGKey, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.DELETE, "U_BXPLOG('" + obj.Code + "')", sessionId, routeId, [obj]);
}
static Get(obj: SAPB1.BXPLOGKey, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.GET, "U_BXPLOG('" + obj.Code + "')", sessionId, routeId, [obj]);
}
}
export class U_BXPREPORTEntity{
static Add(obj: SAPB1.BXPREPORT, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.ADD, "U_BXPREPORT", sessionId, routeId, [obj]);
}
static Update(obj: SAPB1.BXPREPORT, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.UPDATE, "U_BXPREPORT('" + obj.Code + "')", sessionId, routeId, [obj]);
}
static Delete(obj: SAPB1.BXPREPORTKey, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.DELETE, "U_BXPREPORT('" + obj.Code + "')", sessionId, routeId, [obj]);
}
static Get(obj: SAPB1.BXPREPORTKey, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.GET, "U_BXPREPORT('" + obj.Code + "')", sessionId, routeId, [obj]);
}
}
export class U_BXPRPTPFEntity{
static Add(obj: SAPB1.BXPRPTPF, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.ADD, "U_BXPRPTPF", sessionId, routeId, [obj]);
}
static Update(obj: SAPB1.BXPRPTPF, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.UPDATE, "U_BXPRPTPF('" + obj.Code + "')", sessionId, routeId, [obj]);
}
static Delete(obj: SAPB1.BXPRPTPFKey, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.DELETE, "U_BXPRPTPF('" + obj.Code + "')", sessionId, routeId, [obj]);
}
static Get(obj: SAPB1.BXPRPTPFKey, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.GET, "U_BXPRPTPF('" + obj.Code + "')", sessionId, routeId, [obj]);
}
}
export class U_BXPRPTTPEntity{
static Add(obj: SAPB1.ReportType, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.ADD, "U_BXPRPTTP", sessionId, routeId, [obj]);
}
static Update(obj: SAPB1.ReportType, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.UPDATE, "U_BXPRPTTP('" + obj.TypeCode + "')", sessionId, routeId, [obj]);
}
static Delete(obj: SAPB1.ReportTypeKey, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.DELETE, "U_BXPRPTTP('" + obj.TypeCode + "')", sessionId, routeId, [obj]);
}
static Get(obj: SAPB1.ReportTypeKey, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.GET, "U_BXPRPTTP('" + obj.TypeCode + "')", sessionId, routeId, [obj]);
}
}
export class U_BXPSEQUENCEEntity{
static Add(obj: SAPB1.BXPSEQUENCE, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.ADD, "U_BXPSEQUENCE", sessionId, routeId, [obj]);
}
static Update(obj: SAPB1.BXPSEQUENCE, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.UPDATE, "U_BXPSEQUENCE('" + obj.Code + "')", sessionId, routeId, [obj]);
}
static Delete(obj: SAPB1.BXPSEQUENCEKey, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.DELETE, "U_BXPSEQUENCE('" + obj.Code + "')", sessionId, routeId, [obj]);
}
static Get(obj: SAPB1.BXPSEQUENCEKey, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.GET, "U_BXPSEQUENCE('" + obj.Code + "')", sessionId, routeId, [obj]);
}
}
export class U_BXPSYNCOBJCEntity{
static Add(obj: SAPB1.BXPSYNCOBJC, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.ADD, "U_BXPSYNCOBJC", sessionId, routeId, [obj]);
}
static Update(obj: SAPB1.BXPSYNCOBJC, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.UPDATE, "U_BXPSYNCOBJC('" + obj.Code + "')", sessionId, routeId, [obj]);
}
static Delete(obj: SAPB1.BXPSYNCOBJCKey, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.DELETE, "U_BXPSYNCOBJC('" + obj.Code + "')", sessionId, routeId, [obj]);
}
static Get(obj: SAPB1.BXPSYNCOBJCKey, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.GET, "U_BXPSYNCOBJC('" + obj.Code + "')", sessionId, routeId, [obj]);
}
}
export class U_BXPSYNCQEntity{
static Add(obj: SAPB1.BXPSYNCQ, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.ADD, "U_BXPSYNCQ", sessionId, routeId, [obj]);
}
static Update(obj: SAPB1.BXPSYNCQ, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.UPDATE, "U_BXPSYNCQ('" + obj.Code + "')", sessionId, routeId, [obj]);
}
static Delete(obj: SAPB1.BXPSYNCQKey, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.DELETE, "U_BXPSYNCQ('" + obj.Code + "')", sessionId, routeId, [obj]);
}
static Get(obj: SAPB1.BXPSYNCQKey, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.GET, "U_BXPSYNCQ('" + obj.Code + "')", sessionId, routeId, [obj]);
}
}
export class U_BXPTCCONFEntity{
static Add(obj: SAPB1.BXPTCCONF, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.ADD, "U_BXPTCCONF", sessionId, routeId, [obj]);
}
static Update(obj: SAPB1.BXPTCCONF, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.UPDATE, "U_BXPTCCONF('" + obj.Code + "')", sessionId, routeId, [obj]);
}
static Delete(obj: SAPB1.BXPTCCONFKey, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.DELETE, "U_BXPTCCONF('" + obj.Code + "')", sessionId, routeId, [obj]);
}
static Get(obj: SAPB1.BXPTCCONFKey, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.GET, "U_BXPTCCONF('" + obj.Code + "')", sessionId, routeId, [obj]);
}
}
export class U_BXPTRANCUSTEntity{
static Add(obj: SAPB1.BXPTRANCUST, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.ADD, "U_BXPTRANCUST", sessionId, routeId, [obj]);
}
static Update(obj: SAPB1.BXPTRANCUST, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.UPDATE, "U_BXPTRANCUST('" + obj.Code + "')", sessionId, routeId, [obj]);
}
static Delete(obj: SAPB1.BXPTRANCUSTKey, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.DELETE, "U_BXPTRANCUST('" + obj.Code + "')", sessionId, routeId, [obj]);
}
static Get(obj: SAPB1.BXPTRANCUSTKey, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.GET, "U_BXPTRANCUST('" + obj.Code + "')", sessionId, routeId, [obj]);
}
}
export class U_BXPUSRLCEntity{
static Add(obj: SAPB1.BXPUSRLC, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.ADD, "U_BXPUSRLC", sessionId, routeId, [obj]);
}
static Update(obj: SAPB1.BXPUSRLC, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.UPDATE, "U_BXPUSRLC('" + obj.Code + "')", sessionId, routeId, [obj]);
}
static Delete(obj: SAPB1.BXPUSRLCKey, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.DELETE, "U_BXPUSRLC('" + obj.Code + "')", sessionId, routeId, [obj]);
}
static Get(obj: SAPB1.BXPUSRLCKey, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.GET, "U_BXPUSRLC('" + obj.Code + "')", sessionId, routeId, [obj]);
}
}
export class ItemImagesEntity{
static Add(obj: SAPB1.ItemImage, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.ADD, "ItemImages", sessionId, routeId, [obj]);
}
static Update(obj: SAPB1.ItemImage, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.UPDATE, "ItemImages('" + obj.ItemCode + "')", sessionId, routeId, [obj]);
}
static Delete(obj: SAPB1.ItemImageKey, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.DELETE, "ItemImages('" + obj.ItemCode + "')", sessionId, routeId, [obj]);
}
static Get(obj: SAPB1.ItemImageKey, sessionId: string, routeId: string) {
callSL(B1ObjActionEnum.GET, "ItemImages('" + obj.ItemCode + "')", sessionId, routeId, [obj]);
}
}
}
