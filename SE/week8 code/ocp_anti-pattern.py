from enum import Enum
from pprint import pprint

class Color(Enum):
    RED = 1
    GREEN = 2
    BLUE = 3

class Size(Enum):
    SMALL = 1
    MEDIUM = 2
    LARGE = 3

class Product:
    def __init__(self, name, color, size):
        self.name = name
        self.color = color
        self.size = size
        
    def __str__(self):
        return ("Object: " + self.name + " | " + str(self.color) + " | " + str(self.size))

class ProductFilter:
    def filter_by_color(self, products, color):
        for p in products:
            if p.color == color: yield p

    def filter_by_size(self, products, size):
        for p in products:
            if p.size == size: yield p

    def filter_by_color_and_size(self, products, color, size):
        for p in products:
            if p.color == color and p.size == size:
                yield p

    # state space explosion
    # 3 criteria
    # c s w cs sw cw csw = 7 methods

    # OCP = open for extension, closed for modification

print('--------Test Enum and Product-----------')
# Test our enum class
print('ENUMs:')    
print(Color.RED)
print(Size.MEDIUM) 
print('')

# Test our product class  
print('Product:')      
p1 = Product('Monkey', Color.RED, Size.MEDIUM)
print(p1.__dict__)
print(p1)

# Create a list of product instances 
p2 = Product('Dog', Color.RED, Size.LARGE)
p3 = Product('Cat', Color.BLUE, Size.SMALL)
p4 = Product('Fish', Color.GREEN, Size.SMALL)
p5 = Product('Dolphin', Color.BLUE, Size.LARGE)
p6 = Product('Lynx', Color.BLUE, Size.MEDIUM)
p7 = Product('Leopard', Color.RED, Size.LARGE)
products = [p1, p2, p3, p4, p5, p6, p7]

print('\n--------Filter by Color: RED-----------')
print('RED products (Anti pattern filter):')
antiPatternFilter = ProductFilter()
i = 1
for p in antiPatternFilter.filter_by_color(products, Color.RED):
    print(str(i) + ') ' + str(p))
    i+=1


print('\n--------Filter by Color and Size: BLUE and MEDIUM-----------')
print('BLUE and MEDIUM products (Anti pattern filter):')   
i = 1
for p in antiPatternFilter.filter_by_color_and_size(products, Color.BLUE, Size.MEDIUM):
    print(str(i) + ') ' + str(p))
    i+=1
    