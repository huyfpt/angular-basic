/* tslint:disable */
import { EquipGeneration } from './equip-generation';

/**
 */
export class RefEquipment {
    NUMBER_OF_ZONES?: number;
    ID_EQUIP?: number;
    ID_COOLING_FAMILY?: number;
    ID_USER?: number;
    ID_EQUIPGENERATION?: number;
    EQUIP_NAME?: string;
    EQUIP_VERSION?: number;
    EQUIP_RELEASE?: number;
    EQUIP_DATE?: string;
    EQUIP_COMMENT?: string;
    EQUIPPICT?: string;
    STD?: number;
    EQP_LENGTH?: number;
    EQP_WIDTH?: number;
    EQP_HEIGHT?: number;
    MODUL_LENGTH?: number;
    NB_MAX_MODUL?: number;
    NB_TR?: number;
    NB_TS?: number;
    NB_VC?: number;
    BUYING_COST?: number;
    RENTAL_COST?: number;
    INSTALL_COST?: number;
    MAX_FLOW_RATE?: number;
    MAX_NOZZLES_BY_RAMP?: number;
    MAX_RAMPS?: number;
    ID_EQUIPSERIES?: number;
    TMP_REGUL_MIN?: number;
    CAPABILITIES?: number;
    ITEM_TR?: number;
    ITEM_TS?: number;
    ITEM_VC?: number;
    ITEM_PRECIS?: number;
    ITEM_TIMESTEP?: number;
    EQP_IMP_ID_STUDY?: number;
    OPEN_BY_OWNER?: number;
    ID_FAMILY?: number;
    SERIES_NAME?: string;
    CONSTRUCTOR?: string;
    BATCH_PROCESS?: number;
    TYPE_CELL?: number;
    equipGeneration?: EquipGeneration;
    capabilitiesCalc?: string;
    capabilitiesCalc256?: string;
    timeSymbol?: string;
    temperatureSymbol?: string;
    dimensionSymbol?: string;
    consumptionSymbol1?: string;
    consumptionSymbol2?: string;
    consumptionSymbol3?: string;
    shelvesWidthSymbol?: string;
    rampsPositionSymbol?: string;
}
