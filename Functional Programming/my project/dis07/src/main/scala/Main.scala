@main def main(): Unit = {
  println(StringToInt("123"))
  println(StringToInt("hello"))
}

//& StringToInt try catch
// def StringToInt(word: String): Any = {
//   var newWord = None

//   try {
//     // var newWord = word.toInt
//     println(word.toInt)
//   } catch {
//     case _: NumberFormatException =>
//       println("beep beep, you got number format exception")
//     case _: Exception =>
//       println("you got normal exception")
//   // } finally {
//   //   println("ifeifeifeife")
//   }
// }


//& StringToInt option

// ประกาศตัวแปร Option โดยแยกเป็น 2 cases
enum Option[+A]:
  // case Some ในกรณีที่มีค่า
  case Some(get: A)

  // case None ในกรณีที่เป็นค่าว่าง
  case None

// import Option ทำให้ไม่ต้องพิมพ์ Option.Some และ Option.None ทุกครั้ง
import Option.{Some, None}

def StringToInt(word: String): Option[Int] = {
  try {
    // เมื่อมีค่า ให้แปลง String to Int
    Some(word.toInt)
  } catch {
    // ถ้าแปลงไม่สำเร็จ (เช่น เป็น String ที่ไม่ใช่เลข) จะคืนค่า None
    case e: NumberFormatException => None  
  }
}
  