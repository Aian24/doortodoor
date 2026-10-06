import cv2
import os
import numpy as np
from PIL import Image

def generate_crystal_clear_frames():
    video_path = "public/relaunch-hero.mp4"
    output_dir = "public/hero_frames"
    os.makedirs(output_dir, exist_ok=True)
    
    cap = cv2.VideoCapture(video_path)
    if not cap.isOpened():
        print("Error: Cannot open", video_path)
        return
        
    frames = []
    while True:
        ret, frame = cap.read()
        if not ret:
            break
        frames.append(frame)
    cap.release()
    
    total_frames = len(frames)
    print(f"Loaded {total_frames} native frames from {video_path}")
    
    # Clean previous frames
    for f in os.listdir(output_dir):
        if f.startswith("frame_") and f.endswith(".webp"):
            try:
                os.remove(os.path.join(output_dir, f))
            except:
                pass
                
    print(f"Processing and saving {total_frames} ultra-sharp 1080p frames with Lanczos4 & Unsharp Mask...")
    
    for idx, frame in enumerate(frames):
        # 1. BGR to RGB
        rgb = cv2.cvtColor(frame, cv2.COLOR_BGR2RGB)
        
        # 2. High-precision Lanczos4 Upscaling to 1920x1080 Full HD
        upscaled = cv2.resize(rgb, (1920, 1080), interpolation=cv2.INTER_LANCZOS4)
        
        # 3. Cinematic Unsharp Mask for razor-sharp typography and 3D geometric edges
        gaussian = cv2.GaussianBlur(upscaled, (0, 0), 1.8)
        sharp = cv2.addWeighted(upscaled, 1.4, gaussian, -0.4, 0)
        sharp = np.clip(sharp, 0, 255).astype(np.uint8)
        
        # 4. Save highest fidelity WebP (Quality 95)
        img = Image.fromarray(sharp)
        filename = f"frame_{idx:03d}.webp"
        out_path = os.path.join(output_dir, filename)
        img.save(out_path, "WEBP", quality=95, method=6)
        
        if (idx + 1) % 30 == 0 or idx == total_frames - 1:
            print(f"Progress: {idx + 1}/{total_frames} frames generated...")
            
    print(f"Successfully generated all {total_frames} ultra-sharp 1080p frames in {output_dir}!")

if __name__ == "__main__":
    generate_crystal_clear_frames()
