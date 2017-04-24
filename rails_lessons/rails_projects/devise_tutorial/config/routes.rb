Rails.application.routes.draw do
  devise_for :users
  
	get 'home' => 'static_pages#home'
	get 'about' => 'static_pages#about'
	get 'faqs' => 'static_pages#faqs'

	root "static_pages#home"
end
