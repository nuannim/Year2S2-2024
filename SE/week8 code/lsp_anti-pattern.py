class Rectangle:
    def __init__(self, width, height):
        self._height = height
        self._width = width
        
    def __str__(self):
        return f'Width: {self.width}, height: {self.height}'
    
    @property
    def area(self):
        return self._width * self._height

    @property
    def width(self):
        return self._width

    @width.setter
    def width(self, value):
        self._width = value

    @property
    def height(self):
        return self._height

    @height.setter
    def height(self, value):
        self._height = value

    
class Square(Rectangle):
    def __init__(self, size):
        Rectangle.__init__(self, size, size)

    @Rectangle.width.setter
    def width(self, value):
        self._width = self._height = value # This line violates the LSP.

    @Rectangle.height.setter
    def height(self, value):
        self._width = self._height = value # This line violates the LSP as well.
        


def use_it(rc):
    rc.width = 5
    rc.height = 10  # unpleasant side effect
    expected = int(5 * 10)
    print(type(rc))
    print(f'Expected a width of : {w}, got: {rc.width}')
    print(f'Expected an area of {expected}, got {rc.area}\n')


rc = Rectangle(2, 3)
use_it(rc)

sq = Square(5)
use_it(sq)
