// @ts-nocheck
import { domain } from '../domain';

export const networkUpdate = domain.createEvent('networkUpdate');
export const navigation = domain.createEvent<string>();
