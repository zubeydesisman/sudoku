import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import { Checker } from "./sudoku";

$(document).ready(function() {
    $('input').on("change paste keyup",function(event) {
      event.preventDefault();
      const row1 = [3, 5, 6, 2, 9];
      const input = parseInt($("input.row1").val());
      const newChecker = new Checker(row1, input);

      newChecker.checkRow1();
    });
});