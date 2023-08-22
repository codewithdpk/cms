import { Body, Controller, Delete, Get, HttpStatus, Logger, Param, Post } from '@nestjs/common';
import { HttpError } from 'src/utils/error';
import { BlogService } from './blog.service';
import { CreateBlogDto, CreateBlogDtoSchema } from './dto/create-blog.dto';

@Controller('blog')
export class BlogController {
  private readonly logger = new Logger(BlogController.name);
  constructor(private readonly blogService: BlogService) { }

  @Post('new')
  async create(@Body() createBlogDto: CreateBlogDto) {

    try {
      await CreateBlogDtoSchema.validateAsync(createBlogDto)

    } catch (e) {
      this.logger.log(
        HttpStatus.PRECONDITION_FAILED,
        `Inside ${this.create.name}:Invalid Request object`,
      );
      throw HttpError(
        HttpStatus.PRECONDITION_FAILED,
        `Inside ${this.create.name}:Invalid Request object`,
      );
    }


    return this.blogService.create(createBlogDto);
  }

  @Get()
  findAll() {
    return this.blogService.findAll();
  }

  @Get(':slug')
  findOne(@Param('slug') slug: string) {
    return this.blogService.findOne(slug);
  }

  @Get('from-id/:id')
  findOneFromId(@Param('id') id: string) {
    return this.blogService.findOneFromId(id);
  }

  // @Patch(':id')
  // update(@Param('id') id: string, @Body() updateBlogDto: UpdateBlogDto) {
  //   return this.blogService.update(+id, updateBlogDto);
  // }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.blogService.remove(+id);
  }
}
