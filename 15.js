xx=3;
yy=3;
$(function ()
{
    $('td').on('click', function ()
    {
        //Ячейка, на которую нажали
        var $td = $(this),
            $tr = $td.parent();
        xx= $tr.index();
        yy= $td.index();

        r=document.getElementById("id_table");
        var rr;
        var cc;
        //Проходимся по всем ячейкам в поисках пустой
        for(i=0;i<4; i++)
        {
            for(j=0;j<4; j++)
            {

                if(r.rows[i].cells[j].textContent=="")
                {//Если ячейка пустая
                    rr=i;
                    cc=j;
                    break;
                    //нашли, прерываем поиск
                }
            }

        }
        if((rr==xx&&Math.abs(yy-cc)==1) || (yy==cc&&Math.abs(rr-xx)==1))
        {
            //обмениваем ячейки цветами
            cell_color = r.rows[rr].cells[cc].bgColor;
            r.rows[rr].cells[cc].bgColor = r.rows[xx].cells[yy].bgColor;
            r.rows[xx].cells[yy].bgColor = cell_color;
            //Обмениваем ячейки номерками
            ww=r.rows[rr].cells[cc].textContent;
            r.rows[rr].cells[cc].textContent=r.rows[xx].cells[yy].textContent;
            r.rows[xx].cells[yy].textContent= ww;
            xx=xx;
            yy=yy;
        }

        //Проверка на решение игры:
        p=0;
        up=1;
        for(i=0;i<4;i++)
        {
            for(j=0;j<4;j++)
            {
                if(i==3 && j==3)
                {break;}
                else if(r.rows[i].cells[j].textContent==(up))
                {
                    p++;
                }
                up++;
            }
        }
        if(p==15)
        {
            alert("Вы решили головоломку");
        }
    });


    $(document).on('click', '.ShuffleCells', function()
    {
        tabl=document.getElementById("tb_");

        for(i=0;i<100;i++)
        {
            var variant;
            variant=getRandomIntInclusive(1,2);
            var but_x;
            var but_y;
            but_x=xx;
            but_y=yy;
            if(variant==1)
            {
                var variant_2;
                variant_2=getRandomIntInclusive(1,2);
                if(variant_2==1)
                {
                    if(xx+1==4)
                    {
                        but_x=xx-1;
                    }
                    else if(xx+1!=4)
                    {
                        but_x=xx+1;
                    }
                }
                if(variant_2==2)
                {
                    if(xx==0)
                    {
                        but_x=xx+1;
                    }
                    else if(xx!=0)
                    {
                        but_x=xx-1;
                    }
                }
            }

            if(variant==2)
            {
                var variant_2;
                variant_2=getRandomIntInclusive(1,2);
                if(variant_2==1)
                {
                    if(yy+1==4)
                    {
                        but_y=yy-1;
                    }
                    else if(yy+1!=4)
                    {
                        but_y=yy+1;
                    }
                }

                if(variant_2==2)
                {
                    if(yy==0)
                    {
                        but_y=yy+1;
                    }
                    else if(yy!=0)
                    {
                        but_y=yy-1;
                    }
                }
            }
            if((but_x==xx&&Math.abs(but_y-yy)==1) || (yy==but_y&&Math.abs(but_x-xx)==1))
            {
                r=document.getElementById("id_table");

                cell_color = r.rows[but_x].cells[but_y].bgColor;
                r.rows[but_x].cells[but_y].bgColor = r.rows[xx].cells[yy].bgColor;
                r.rows[xx].cells[yy].bgColor = cell_color;

                ww=r.rows[but_x].cells[but_y].textContent;
                r.rows[but_x].cells[but_y].textContent=r.rows[xx].cells[yy].textContent;
                r.rows[xx].cells[yy].textContent= ww;
                xx=but_x;
                yy=but_y;
            }
        }
        function getRandomIntInclusive(min, max)
        {
            min = Math.ceil(min);
            max = Math.floor(max);
            return Math.floor(Math.random() * (max - min + 1)) + min; //Максимум и минимум включаются
        }
    });
});