from abc import ABC, abstractmethod

class Printer(ABC):
    @abstractmethod
    def print(self, document): 
        pass

class Scanner(ABC):
    @abstractmethod
    def scan(self, document): 
        pass

# same for Fax, etc.

class MyPrinter(Printer):
    def print(self, document):
        print(document)

class MyScanner(Scanner):
    def scan(self, document):
        print(f'Scanning a given document: {document}')

class Photocopier(Printer, Scanner):
    def print(self, document):
        print(f'Print this: {document}. Note: I can make photocopy as well.')

    def scan(self, document):
        pass  # something meaningful


class MultiFunctionDevice(Printer, Scanner):  # , Fax, etc
    @abstractmethod
    def print(self, document):
        pass

    @abstractmethod
    def scan(self, document):
        pass


class MultiFunctionMachine(MultiFunctionDevice):
    def __init__(self, printer, scanner):
        self.printer = printer
        self.scanner = scanner

    def print(self, document):
        self.printer.print(document)

    def scan(self, document):
        self.scanner.scan(document)



print('===== Use MyPrinter =====')
printer = MyPrinter()
printer.print(123) # nothing happens
print('')

print('===== Use Photocopier =====')
printer = Photocopier()
printer.print(123) 
printer.scan(123)  # nothing happens
print('')

print('===== Use MultiFunctionDevice =====')
#printer = MultiFunctionDevice() #Error
#printer.print(123) # nothing happens
#printer.scan(123)  # nothing happens
#print('')

print('===== Use MultiFunctionMachine =====')
printer = MultiFunctionMachine(MyPrinter(), MyScanner())
printer.print(123) # nothing happens
printer.scan(123)  # nothing happens
print('')