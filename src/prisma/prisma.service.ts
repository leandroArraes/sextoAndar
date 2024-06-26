import { INestApplication, Injectable, OnModuleInit } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class PrismaService extends PrismaClient implements OnModuleInit {
  async onModuleInit() {
    await this.$connect();
  }
  enableShutdownHooks(app: INestApplication) {
    this.$on('beforeExit' as never, async () => {
      // Explicitly type the event name as a string
      await app.close();
    });
  }
}
