import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { FileTransfer, FileTransferObject } from '@ionic-native/file-transfer';
import { ToastController } from 'ionic-angular';
import { File } from '@ionic-native/file';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  video: any;
  a;
  fileTransfer: FileTransferObject = this.transfer.create(); 
  constructor(public navCtrl: NavController, private transfer: FileTransfer, private file: File, public toastCtrl: ToastController) {
  }

  download() {
  
  const url = 'https://www.youtubeinmp3.com/fetch/?video=';
  this.fileTransfer.download(url + this.video, this.file.externalDataDirectory).then((entry) => {
    console.log(entry)
    let toast = this.toastCtrl.create({
      message: 'Musica baixada',
      duration: 3000
    });
    toast.present();
  }, (error) => {
        console.log(error)
    let toast = this.toastCtrl.create({
      message: 'erro ao baixar musica',
      duration: 3000
    });
    toast.present();
  });
}

}
