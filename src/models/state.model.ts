export interface ShockwaveState {
  isCurrent: boolean | null;
  originDate: number | null;
}

export enum ShockwaveStateProperties {
  IS_CURRENT = 'isCurrent',
  ORIGIN_DATE = 'originDate',
}

export const ShockwaveEmptyState = {
  isCurrent: null,
  originDate: null,
};

export interface DynamicState {
  entityId: string | null;
  entityMembers: number | null;
  entityName: string | null;
}

export enum DynamicStateProperties {
  ENTITY_ID = 'entityId',
  ENTITY_MEMBERS = 'entityMembers',
  ENTITY_NAME = 'entityName',
}

export const DynamicEmptyState = {
  entityId: null,
  entityMembers: null,
  entityName: null,
};
