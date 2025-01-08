@main def hello(): Unit =



  val seq2 = ("I"+: ("AM"+: ("GROOT"+: (Nil))))

  val vect1 = Vector("I", "AM","GROOT")

  val vect2 ="I"+: "AM"+:"GROOT"+: Vector.empty

  val vect3 = Vector.empty :+ "I":+ "AM":+"GROOT"

  vect3.head

  vect3.tail

  val vect4 = seq2.toVector
