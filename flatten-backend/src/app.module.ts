import {DatabaseConfigService} from './config/database-config.service';
import {Module} from '@nestjs/common';
import {AppService} from './app.service';
import {QrCodeModule} from './qr-code/qr-code.module';
import {TypeOrmModule} from '@nestjs/typeorm';
import {ConfigModule} from '@nestjs/config';
import {HealthLogbookModule} from '@src/health-logbook/health-logbook.module';
import {TemporaryCodeModule} from './temporary-code/temporary-code.module';

@Module({
    imports: [
        ConfigModule.forRoot(),
        QrCodeModule,
        HealthLogbookModule,
        TemporaryCodeModule,
        TypeOrmModule.forRootAsync({
            imports: [ConfigModule],
            useClass: DatabaseConfigService
        })
    ],
    controllers: [],
    providers: [DatabaseConfigService, AppService]
})
export class AppModule {
}
