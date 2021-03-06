from django.contrib import admin
from rango.models import Category, Page, UserProfile, Vote

class CategoryAdmin(admin.ModelAdmin):
    prepopulated_fields = {'slug':('name',)}
    list_display = ['name', 'views', 'likes']
    
class PageAdmin(admin.ModelAdmin):
    list_display = ['title', 'category', 'url', 'views']
    
admin.site.register(Category, CategoryAdmin)
admin.site.register(Page, PageAdmin)
admin.site.register(UserProfile)
admin.site.register(Vote)
