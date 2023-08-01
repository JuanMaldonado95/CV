import { TestBed, async, inject } from '@angular/core/testing';
import { InformacionService } from './informacion.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';


describe('Service: Post', () => {
 beforeEach(() => {
   TestBed.configureTestingModule({
     imports: [HttpClientTestingModule],
     providers: [InformacionService]
   });
 });

 it('should create service', inject([InformacionService], (service: InformacionService) => {
   expect(service).toBeTruthy();
 }));
});