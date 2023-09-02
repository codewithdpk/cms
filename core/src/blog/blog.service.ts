import { Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
import { CreateBlogDto } from './dto/create-blog.dto';

@Injectable()
export class BlogService {
  constructor(private prisma: PrismaClient) {}

  async create(createBlogDto: CreateBlogDto) {
    return await this.prisma.blog.create({
      data: {
        slug: createBlogDto.title.split(' ').join('-').toLowerCase(),
        url: '/' + createBlogDto.title.split(' ').join('-').toLowerCase(),
        ...createBlogDto,
      },
    });
  }

  async findAll() {
    return await this.prisma.blog.findMany();
  }

  async findOne(slug: string) {
    return await this.prisma.blog.findUnique({
      where: {
        slug: slug,
      },
    });
  }

  async findOneFromId(id: string) {
    return await this.prisma.blog.findUnique({
      where: {
        id: id,
      },
    });
  }

  // update(id: number, updateBlogDto: UpdateBlogDto) {
  //   return `This action updates a #${id} blog`;
  // }

  remove(id: number) {
    return `This action removes a #${id} blog`;
  }
}
