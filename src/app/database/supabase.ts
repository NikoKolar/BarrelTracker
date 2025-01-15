import { Injectable } from '@angular/core';
import { createClient, SupabaseClient } from '@supabase/supabase-js';
import { EnvironmentService } from '../environment.service';

@Injectable({
  providedIn: 'root',
})
export class SupabaseService {
  private supabase: SupabaseClient;

  constructor(private environmentService: EnvironmentService) {
    this.supabase = createClient(
      this.environmentService.getSupabaseUrl()!,
      this.environmentService.getSupabaseAnonKey()!,
    );
  }

  async addBarrel(newBarrel: any) {
    const { data, error } = await this.supabase
      .from('Barrels')
      .insert([newBarrel]);
    if (error) {
      console.error('Error adding barrel:', error.message);
    }
    return data;
  }

  async addLocation(newLocation: any) {
    const { data, error } = await this.supabase
      .from('Locations')
      .insert([newLocation]);
    if (error) {
      console.error('Error adding location:', error.message);
    }
    return data;
  }

  async getBarrels() {
    const { data: barrels, error: barrelError } = await this.supabase
      .from('Barrels')
      .select('id, name');

    if (barrelError) {
      console.error('Error fetching barrels:', barrelError.message);
      return [];
    }

    const { data: locations, error: locationError } = await this.supabase
      .from('Locations')
      .select('id, name, note, barrel_id');

    if (locationError) {
      console.error('Error fetching locations:', locationError.message);
      return [];
    }

    barrels.forEach((barrel: any) => {
      barrel.locations = locations.filter(
        (location) => location.barrel_id === barrel.id,
      );
    });

    return barrels;
  }
}
