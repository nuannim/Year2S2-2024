@main def main(): Unit =
  println(selectionSort(List(5, 3, 8, 6, 2)))
  println(selectionSort(List(9, 7, 6, 4, 1, 2, 3)))


def selectionSort(xs: List[Int]): List[Int] = xs 
  match {
    case Nil => Nil
    case _ =>
      val min = xs.min
      min :: selectionSort(xs.filterNot(_ == min))
    }
