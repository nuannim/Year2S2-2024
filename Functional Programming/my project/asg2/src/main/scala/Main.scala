

def tail[T](seq: Seq[T]): Seq[T] = seq match {
  case Nil => Nil
  case _ :: rest => rest
}

def drop[T](seq: Seq[T], num: Int): Seq[T] = {
  if (num == 0) seq
  else drop(tail(seq), num - 1)
}

def dropWhile[T](seq: Seq[T], cond: T => Boolean): Seq[T] = seq match {
  case Nil => seq
  case x :: rest if cond(x) => dropWhile(rest, cond)
  case _ => seq
}

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

