import { Module } from '@nestjs/common';
import { BlogService } from './blog.service';
import { BlogController } from './blog.controller';
import { PrismaClient } from '@prisma/client';

@Module({
  controllers: [BlogController],
  providers: [BlogService, PrismaClient],
})
export class BlogModule {}
