var itemsPerPage = 4;

$(document).ready(function() {

	initFancyBox();
	
	//If only one page, then no need for navigation
	if(($('#steps > li').length / itemsPerPage) > 1)
	{
		initNavigation();
	}
	else
	{
		deleteNavigation();
	}
	
	initStepNumbering();	
	
});

function initStepNumbering()
{
	var curStepNum = 1;
	
	$('#steps > li > h2').each(function(){
		var stepTitle = $(this).html();
		
		$(this).html(curStepNum + ': ' + stepTitle);
		
		$(this).siblings('a.screenshot').each(function(){
			var ssTitle = $(this).attr('title');
			$(this).find('img').attr('alt', ssTitle);
		});
		
		curStepNum += 1;
	});
}

function initNavigation()
{
	$('<div id="page-0">').insertBefore($('body h2:first'));
	$('h2:eq(' + itemsPerPage + 'n)').each(function(i){
		$('</div> <div id="page-' + (i + 1) + '">').insertBefore($(this))
	});
	$('</div>').append($('body'));
	
    $('#top-pagination').pagination({
        items: $('#steps > li').length,
        itemsOnPage: itemsPerPage,
        cssStyle: 'dark-theme',
		onPageClick: function(pageNumber){pageNumberSelected(pageNumber, itemsPerPage, 'top')}
    });
	$('#bottom-pagination').pagination({
        items: $('#steps > li').length,
        itemsOnPage: itemsPerPage,
        cssStyle: 'dark-theme',
		onPageClick: function(pageNumber){pageNumberSelected(pageNumber, itemsPerPage, 'bottom')}
    });
	
	pageNumberSelected(1, itemsPerPage);
}

function deleteNavigation()
{
	$('ul.pagination').remove();
}

function initFancyBox()
{
	$("#steps a.screenshot").fancybox({
		helpers: {
			title : {
				type : 'inside'
			}
		}
	});
}

function pageNumberSelected(pageNumber, itemsPerPage, pageLocation)
{
	$('#steps > li').each(function (index) {
		if(index >= ((pageNumber - 1) * itemsPerPage)
			&& index < (pageNumber * itemsPerPage))
		{
			$(this).show();
		}
		else
		{
			$(this).hide();
		}
	});
	
	window.scrollTo(0, 0);
}