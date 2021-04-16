Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  namespace :api do
    namespace :v1 do
      namespace :hacker_news do
        get "/user_comments", to: "user_comments#index"
        get "/user_comments/:id", to: "user_comments#show"
      end
    end
  end
end
