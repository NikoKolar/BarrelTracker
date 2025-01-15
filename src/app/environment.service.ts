import { Injectable } from '@angular/core';
import { Environment, environment } from '../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class EnvironmentService {
  constructor() {}

  getSupabaseUrl() {
    return (environment as Environment).SUPABASE_URL;
  }

  getSupabaseAnonKey() {
    return (environment as Environment).ANON_KEY;
  }
}
