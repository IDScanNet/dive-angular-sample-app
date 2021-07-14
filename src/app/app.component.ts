import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { environment } from '../environments/environment';
import IDVC from '@idscan/idvc';

@Component({
  selector: 'app-root',
  encapsulation: ViewEncapsulation.None,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css', '../../node_modules/@idscan/idvc/dist/css/idvc.css']
})
export class AppComponent implements OnInit {
  
    // tslint:disable-next-line:use-lifecycle-interface
    ngOnInit() {

        console.log('license key', environment.licenseKey);

        new IDVC({
          el: 'videoCapturingEl',
          networkUrl: '/assets/networks',
          tapBackSide: true,
          capturingMode: 4,
          licenseKey: environment.licenseKey,
          enableFlash: true,
          steps: [
            { type: 'front', name: 'Front Scan' },
            { type: 'face', name: 'Selfie' },
          ],
          submit(data) {
            let backStep = data.steps.find((item) => item.type === 'back');
            let trackString =
              backStep && backStep.trackString ? backStep.trackString : '';

            let request = {
              frontImageBase64: data.steps
                .find((item) => item.type === 'front')
                .img.split(/:image\/(jpeg|png);base64,/)[2],
              backOrSecondImageBase64: backStep.img.split(
                /:image\/(jpeg|png);base64,/
              )[2],
              faceImageBase64: data.steps
                .find((item) => item.type === 'face')
                .img.split(/:image\/(jpeg|png);base64,/)[2],
              documentType: data.documentType,
              trackString: trackString,
            };

            fetch('https://dvs2.idware.net/api/Request', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json;charset=utf-8',
                Authorization: `Bearer ${environment.publicKey}`,
              },
              body: JSON.stringify(request),
            })
              .then((response) => response.json())
              .then((response) => {
                fetch(
                  environment.backendServerUrl +
                    '/api/ValidationRequests/complete/',
                  {
                    method: 'POST',
                    mode: 'no-cors',
                    headers: {
                      'Content-Type': 'application/json;charset=utf-8',
                    },
                    body: JSON.stringify({
                      requestId: response.requestId,
                      documentType: response.documentType,
                    }),
                  }
                )
                  .then((response) => response.json())
                  .then((data) => {
                    alert(
                      data.payload.isDocumentSuccess
                        ? 'Document valid'
                        : 'Document invalid'
                    );
                  });
              })
              .catch(() => {});
          },
        });
	}
}
