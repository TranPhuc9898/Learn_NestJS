import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { CreateMessageDto } from './dtos/create-message.dto';

@Controller('messages')
export class MessagesController {
  @Get()
  listMessages() {}

  // Nếu 1 phương thức nào cần truyền Body ( thì phải tạo giống như sau)
  // Hồi nãy là body : kiểu dữ liệu nó là any
  // Bây giờ muốn nó thống nhất hết tất cả kiểu dữ liệu respond và resquest thì phải thay nó bằng DTOS
  @Post()
  createMessage(@Body() body: CreateMessageDto) {
    console.log(body);
  }
  // Nếu 1 phương thức cần 1 địa chỉ cụ thể ví dụ như ID v.vthì làm như sau
  @Get('/:id')
  getMessage(@Param('id') id: string) {
    console.log(id);
  }
}
