import { country, currency } from 'shared/const/commons';

export interface profile {
   first?: string,
   lastname?: string,
   age?: number,
   currency?: currency,
   country?: country,
   city?: string,
   username?: string,
   avatar?: string,
 }

export interface ProfileSchema {
   data?: profile,
   form?: profile,
   isLoading: boolean,
   error?: string,
   readonly: boolean
 }
