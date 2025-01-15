import { Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { BarrelInfo } from '../types/barel-info';
import { CommonModule } from '@angular/common';
import { SupabaseService } from '../database/supabase';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-barrel-dropdown',
  templateUrl: './barrel-dropdown.component.html',
  styleUrls: ['./barrel-dropdown.component.scss'],
  imports: [IonicModule, CommonModule],
})
export class BarrelDropdownComponent implements OnInit {
  barrels: any;

  constructor(
    private supabaseService: SupabaseService,
    private alertController: AlertController,
  ) {
    this.barrels = [];
  }

  async ngOnInit() {
    await this.refreshList();
  }

  toggleBarrelLocations(barrel: BarrelInfo) {
    barrel.expanded = !barrel.expanded;
  }

  async addNewLocation(barrel: any) {
    const alert = await this.alertController.create({
      header: 'Enter location',
      inputs: [
        {
          name: 'locationName',
          type: 'text',
          placeholder: 'Nova lokacija',
        },
        {
          name: 'locationNote',
          type: 'text',
          placeholder: 'Opis',
        },
      ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          handler: () => {
            console.log('User canceled input');
          },
        },
        {
          text: 'OK',
          handler: async (data) => {
            this.supabaseService.addLocation({
              name: data.locationName,
              note: data.locationNote,
              barrel_id: barrel.id,
            });
            await this.refreshList();
            this.barrels.filter((b: any) => b.id === barrel.id)[0].expanded =
              true;
          },
        },
      ],
    });

    await alert.present();
  }

  getDisplayedLocations(barrel: BarrelInfo) {
    return barrel.locations.slice(-3);
  }

  async refreshList() {
    this.barrels = await this.supabaseService.getBarrels();
  }

  async promptForBarrelName() {
    const alert = await this.alertController.create({
      header: 'Enter Barrel Name',
      inputs: [
        {
          name: 'barrelName',
          type: 'text',
          placeholder: 'Ime soda',
        },
      ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          handler: () => {
            console.log('User canceled input');
          },
        },
        {
          text: 'OK',
          handler: async (data) => {
            this.supabaseService.addBarrel({ name: data.barrelName });
            await this.refreshList();
          },
        },
      ],
    });

    await alert.present();
  }
}
