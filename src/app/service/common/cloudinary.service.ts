import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CloudinaryService {
  private cloudName ='dtwfbpjys';
  private uploadPreset = 'upload_preset';
  cloudinary: any;


  constructor(
    private http:HttpClient
  ) {

  }
  onFileSelected(event: any) {
    const file = event.target.files[0];
    if (file) {
      this.cloudinary.uploadImage(file).subscribe((res: any) => {
        this.imageUrl = res.secure_url;
        console.log('Uploaded:', this.imageUrl);
      });
    }
  }
  imageUrl(arg0: string, imageUrl: any) {
    throw new Error('Method not implemented.');
  }


  uploadImage(file: File) {
    const url = `https://api.cloudinary.com/v1_1/${this.cloudName}/image/upload`;
    const formData = new FormData();
    formData.append('file', file);
    formData.append('upload_preset', this.uploadPreset);

    return this.http.post(url, formData);
  }
}
