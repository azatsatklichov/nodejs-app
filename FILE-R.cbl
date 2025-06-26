       IDENTIFICATION DIVISION.
       PROGRAM-ID. FILE-R.

       ENVIRONMENT DIVISION.
       INPUT-OUTPUT SECTION.
       FILE-CONTROL.
       SELECT Employee ASSIGN TO EMP-FILE
       ORGANIZATION IS LINE SEQUENTIAL.

       DATA DIVISION.
       FILE SECTION.
       FD Employee.
          01 Employee-FILE.
             05 Employee-ID PIC 9(5).
             05 NAME PIC A(25).

       WORKING-STORAGE SECTION.
       01 WS-Employee.
          05 WS-Employee-ID PIC 9(5).
          05 WS-NAME PIC A(25).
       01 WS-EOF PIC A(1).

       PROCEDURE DIVISION.

           OPEN INPUT Employee.
           PERFORM UNTIL WS-EOF='Y'
             READ Employee INTO WS-Employee
                AT END MOVE 'Y' TO WS-EOF
                NOT AT END DISPLAY WS-Employee
             END-READ
           END-PERFORM.
           CLOSE Employee.
           STOP RUN.
