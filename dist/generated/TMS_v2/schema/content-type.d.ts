/**
 * Content type (one of MTA, XSCDU, APP)
 *   * `MTA` - Multi-Target Application
 *   * `XSCDU` - SAP HANA Extended Application Services Classic Model Delivery Unit
 *   * `APP` - generic application specific content
 *   * `BTP_ABAP` - SAP BTP, ABAP Environment
 *
 */
export type ContentType = 'MTA' | 'XSCDU' | 'APP' | 'BTP_ABAP';