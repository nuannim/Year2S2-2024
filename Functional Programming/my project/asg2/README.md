# Assignment 2 - Rubric: 1 criterion • 3 pts

## Individual work

Create the code for

**ห้ามใช้ .head / .tail  / .drop(1) / .dropWhile**

**ยอมรับได้ match**

- **case / recursive / .slice กรณี empty list ให้บอกว่า เป็น empty list**
1. Function Tail สำหรับลบ fist element ของ list ใดๆ **ห้ามใช้ .head และ .tail**l
2. Function Drop สำหรับลบ fist N element ของ list ใดๆ **โดยเรียกใช้ Function อื่นด้วย**
3. Function DropWhile สำหรับลบ element จาก list ใดๆ ตั้งแต่ fist element จนกระทั่งถึง element ที่ตรงตามเงื่อนไขที่กำหนด **โดยเรียกใช้ Function อื่นด้วย**

All functions requires at least 2 examples

**ตัวอย่าง**

List("I","LOVE","Andaman", "of", "Thailand")

1. Function Tail จะได้ผลลัพธ์ เป็น List("LOVE","Andaman", "of", "Thailand")

2. Function Drop  ลบตั้งแต่ส่วนต้น ไป 2 ตำแหน่ง (N=2)

3. Function DropWhile ลบตั้งแต่ส่วนต้น ไปจนถึงคำว่า "of" (ลบ of ด้วย)

มีเพิ่มเติมเป็นรูปแนบ

ส่งเป็น รหัสนักศึกษา.docx ไฟล์เท่านั้น

## code

### tail()

```scala
def tail[T](seq: Seq[T]): Seq[T] = seq match {
  case Nil => Nil
  case _ :: rest => rest
}
```

### drop()

```scala
def drop[T](seq: Seq[T], num: Int): Seq[T] = {
  if (num == 0) seq
  else drop(tail(seq), num - 1)
}
```

### dropWhile()

```scala
def dropWhile[T](seq: Seq[T], cond: T => Boolean): Seq[T] = seq match {
  case Nil => seq
  case x :: rest if cond(x) => dropWhile(rest, cond)
  case _ => seq
}
```

### test

```scala
@main def main(): Unit = {
  val exampleList = Seq("I", "LOVE", "Andaman", "of", "Thailand")

  val tailResult = tail(exampleList)
  println(s"Tail Result : $tailResult")

  val dropResult = drop(exampleList, 2)
  println(s"Drop Result : $dropResult")

  val dropWhileResult = dropWhile(exampleList, (x: String) => x != "of")
  println(s"DropWhile Result : $dropWhileResult")

  println("=======================")

// /////////////////////////////////////////////////////////////////////////
  val list2 = Seq("Good", "Morning", "everyone")

  val tail2 = tail(list2)
  println(s"Tail Result : $tail2")

  val drop2 = drop(list2, 2)
  println(s"Drop Result : $drop2")

  val dropWhile2 = dropWhile(list2, (x: String) => x != "everyone")
  println(s"DropWhile Result : $dropWhile2")

  println("=======================")
// /////////////////////////////////////////////////////////////////////////
  val list3 = Seq("A", "B", "C", "D")

  val tail3 = tail(list3)
  println(s"Tail Result : $tail3")

  val drop3 = drop(list3, 2)
  println(s"Drop Result : $drop3")

  val dropWhile3 = dropWhile(list3, (x: String) => x != "C")
  println(s"DropWhile Result : $dropWhile3")

  println("=======================")
}
```

<br>

---

<br>

## sbt project compiled with Scala 3

### Usage

This is a normal sbt project. You can compile code with `sbt compile`, run it with `sbt run`, and `sbt console` will start a Scala 3 REPL.

For more information on the sbt-dotty plugin, see the
[scala3-example-project](https://github.com/scala/scala3-example-project/blob/main/README.md).
